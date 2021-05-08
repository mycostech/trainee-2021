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

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
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

        [HttpPost("register")]
        public async Task<ActionResult<Users>> Register([FromBody]Users user) {

            string savepassword = _authService.GetHashpassword(user.Password);

            user.Password = savepassword;
            return await _authService.Register(user);
        }


        
    }
}

