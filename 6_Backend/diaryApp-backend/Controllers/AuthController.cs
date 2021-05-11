using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using diaryApp_backend;
using diaryApp_backend.Services.Interfaces;
using diaryApp_backend.Data;

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
        [HttpGet("login")]
        public async Task<ActionResult<Users>> Login(UserLogin userLogin)
        {
            var user = await _authService.GetUser(userLogin.Email);

            if (user != null)
            {
                if (_authService.Verifypassword(userLogin.Password, user.Password))
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
        public async Task<ActionResult<Users>> Register([FromForm]Reg Reguser) {

            var user = new Users() {
                Fname = Reguser.Fname,
                Lname = Reguser.Lname,
                Nickname = Reguser.Nickname,
                Birthdate = Reguser.Birthdate,
                Email = Reguser.Email
            };

            if (Reguser.ImageFile != null)
            {

                user.ProfileImage = await _iimageService.UploadImage(Reguser.ImageFile);
            }


            string savepassword = _authService.GetHashpassword(Reguser.Password);

            user.Password = savepassword;
            return await _authService.Register(user);
        }

        
    }
}

