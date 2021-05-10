using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using budgetAPI;
//using budgetAPI.budgetDBv2Context;
using budgetAPI.Service.Interface;

namespace budgetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IUserService _userService;
        public CustomersController(IUserService userService)
        {
            _userService = userService;
        }


        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetAllUser()
        {
            var res = await _userService.SelectAllUser();
            if (res == null)
            {
                return NotFound();
            }
            return res;
        }

        // POST: api/Customers/Register
        [HttpPost("Register")]
        public async Task<ActionResult<Customer>> PostUser([FromBody] Customer user)
        {
            string savepassword = _userService.HashPassword(user.Password);
            user.Password = savepassword;

            try
            {
                return await _userService.Register(user);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }

        }

        //GET: api/Customers/Login
        [HttpGet("Login/{email}/{password}")]
        public async Task<ActionResult<Customer>> GetLogin(string email, string password)
        {
            var res = await _userService.GetUser(email);
            if (res != null)
            {
                if (_userService.VerifyPassword(password, res.Password))
                {
                    return res;
                }
                return NotFound(); ;
            }
            return NotFound();
        }

        // DELETE: api/Customers/1
        [HttpDelete("{userid}")]
        public async Task<ActionResult<Customer>> DeleteCus(int userid)
        {
            try
            {
                return await _userService.DeleteUser(userid);
            }
            catch
            {
                return StatusCode(500);
            }

        }

    }

}