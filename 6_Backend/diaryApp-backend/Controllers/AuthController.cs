using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using diaryApp_backend;
using diaryApp_backend.Services.Interfaces;

namespace diaryApp_backend.Controllers
{
    [Route("api/auth")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IimageService _iimageService;


        // Contructor
        public AuthController(IAuthService authService, IimageService iimageService)
        {
            _authService = authService;
            _iimageService = iimageService;
        }

        
        // GET: Login
        [HttpGet("login/{email}/{password}")]
        public async Task<ActionResult<Users>> Login(string email, string password)
        {
            var user = await _authService.GetUser(email);

            if (user != null)
            {
                if (_authService.Verifypassword(password, user.Password))
                {
                    return user;
                }
                else
                {
                    return null;
                }
            }
            else {
                return null;
            }
       
        }

        // POST: register new user
        [HttpPost("register")]
        public async Task<ActionResult<Users>> Register([FromForm]Users user) {

            //check picture
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}


            if (user.ImageFile != null) {

                user.ProfileImage = await _iimageService.UploadImage(user.ImageFile);
            }

            
            string savepassword = _authService.GetHashpassword(user.Password);

            user.Password = savepassword;
            return await _authService.Register(user);
        }

        
    }
}

