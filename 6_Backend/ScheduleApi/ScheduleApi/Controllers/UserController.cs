using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ScheduleApi.Services;

namespace ScheduleApi.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _context;

        public UserController(IUserService context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> SelectAllUser()
        {
            return await _context.SelectAllUser();
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<User>> SelectUser(int userId)
        {
            return await _context.SelectUser(userId);
        }

        [HttpPost("add")]
        public async Task<ActionResult<User>> AddUser([FromBody] User user)
        {
            return await _context.AddUser(user);
        }

        [HttpPut("{userId}")]
        public async Task<ActionResult<User>> UpdateUser(int userId, [FromBody] User user)
        {

            return await _context.UpdateUser(userId, user);
        }

        [HttpDelete("{userId}")]
        public async Task<ActionResult<User>> DeleteUser(int userId)
        {

            return await _context.DeleteUser(userId);
        }

        /*ScheduleDBContext db = new ScheduleDBContext();

        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public IEnumerable<User> GetAllUsers()
        {
            return db.Users
            .ToArray();
        }

        [HttpGet("{userId}")]
        public IEnumerable<User> GetUser(int userId)
        {
            return db.Users.Where(e => e.UserId == userId)
            .ToArray();
        }

        [HttpPost("add")]
        public void AddUser([FromBody] User user)
        {
            db.Users.Add(user);
            var dob = new Schedule { SchId = user.UserId * 10000, Title = "My Birthday", UserId = user.UserId };
            db.Schedules.Add(dob);
            var dobDetail = new ScheduleDetail { SchId = dob.SchId, SchDate = user.Dob, Category = "B"};
            db.ScheduleDetails.Add(dobDetail);
            try
            {
                db.SaveChanges();
                Console.WriteLine("Add User Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        [HttpPut("{userId}/update")]
        public void UpdateUser(int userId, [FromBody] User user)
        {
            var u = db.Users.SingleOrDefault(e => e.UserId == userId);

            if (user.FirstName == null) { u.FirstName = u.FirstName; } else { u.FirstName = user.FirstName; };
            if (user.LastName == null) { u.LastName = u.LastName; } else { u.LastName = user.LastName; };
            if (user.Email == null) { u.Email = u.Email; } else { u.Email = user.Email; };
            if (user.PhoneNumber == null) { u.PhoneNumber = u.PhoneNumber; } else { u.PhoneNumber = user.PhoneNumber; };
            if (user.Dob == null) { u.Dob = u.Dob; } else { u.Dob = user.Dob; };
            
            try
            {
                db.SaveChanges();
                Console.WriteLine("Update User Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("delete/{userId}")]
        public void DeleteUser(int userId)
        {
            var user = db.Users.SingleOrDefault(e => e.UserId == userId);
            var sch = db.Schedules.Where(e => e.UserId == user.UserId);

            foreach (Schedule s in sch.ToList())
            {
                var schDetail = db.ScheduleDetails.Where(e => e.SchId == s.SchId);
                db.ScheduleDetails.RemoveRange(schDetail);
            }

            db.Schedules.RemoveRange(sch);
            db.Users.Remove(user);

            try
            {
                db.SaveChanges();
                Console.WriteLine("Delete User Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }*/


    }
}
