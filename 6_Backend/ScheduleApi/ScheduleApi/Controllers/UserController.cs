using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public IEnumerable<User> GetAllUsers()
        {
            return Enumerable.Range(1, 3).Select(index => new User
            {
                UserId = 1002,
                FirstName = "MINGYU",
                LastName = "KIM",
                Email = "mingyu@pledis.co.kr",
                Dob = new DateTime(1997,4,6),
                PhoneNumber = "0917317391"
            })
            .ToArray();
        }

        [HttpGet("{userId}")]
        public IEnumerable<User> GetUser(int userId)
        {
            return Enumerable.Range(1, 1).Select(index => new User
            {
                UserId = 1002,
                FirstName = "MINGYU",
                LastName = "KIM",
                Email = "mingyu@pledis.co.kr",
                Dob = new DateTime(1997, 4, 6),
                PhoneNumber = "0917317391"
            })
            .ToArray();
        }

        [HttpPost("addUser")]
        public void AddUser([FromBody] string value)
        {
        }

        [HttpPut("{userId}/edit")]
        public void UpdateUser(int userId, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{userId}/delete")]
        public void DeleteUser(int userId)
        {
        }
    }
}
