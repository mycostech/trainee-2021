using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public class UserService : IUserService
    {
        private readonly ScheduleDBContext _context;

        public UserService(ScheduleDBContext context)
        {
            _context = context;
        }

        public async Task<List<User>> SelectAllUser()
        {
            return await _context.Users
                .OrderBy(e => e.UserId)
                .ToListAsync();
        }

        public async Task<User> SelectUser(int userId)
        {
            return await _context.Users.FindAsync(userId);
        }

        public async Task<User> AddUser(User user)
        {
            int max;
            var nUser = _context.Users.Select(e => e.UserId).ToList();
            if (nUser.Count() == 0) { max = 1001; } else { max = nUser.Max() + 1; }
            User u = new User()
            {
                UserId = max,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                Dob = user.Dob
            };

            _context.Users.Add(u);

            if (u.Dob != null) 
            { 
                Schedule dob = new Schedule { SchId = u.UserId * 10000, Title = "My Birthday", UserId = u.UserId };
                _context.Schedules.Add(dob);

                var dobDetail = new ScheduleDetail { SchId = dob.SchId, SchDate = u.Dob, Category = "B" };
                _context.ScheduleDetails.Add(dobDetail);
            }
            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine("Add User Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
            return u;
        }

        public async Task<User> UpdateUser(int userId, User user)
        {
            var u = _context.Users.SingleOrDefault(e => e.UserId == userId);

            if (user.FirstName == null) { u.FirstName = u.FirstName; } else { u.FirstName = user.FirstName; };
            if (user.LastName == null) { u.LastName = u.LastName; } else { u.LastName = user.LastName; };
            if (user.Email == null) { u.Email = u.Email; } else { u.Email = user.Email; };
            if (user.PhoneNumber == null) { u.PhoneNumber = u.PhoneNumber; } else { u.PhoneNumber = user.PhoneNumber; };
            if (user.Dob == null) { u.Dob = u.Dob; } else { u.Dob = user.Dob;
                var updateDob = _context.ScheduleDetails.SingleOrDefault(e => e.SchId == userId * 10000);
                updateDob.SchDate = u.Dob;
            };

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine("Update User Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
            return u;
        }

        public async Task<User> DeleteUser(int userId)
        {
            var user = _context.Users.Find(userId);
            var sch = _context.Schedules.Where(e => e.UserId == user.UserId).ToList();

            foreach (Schedule s in sch)
            {
                var schDetail = _context.ScheduleDetails.Where(e => e.SchId == s.SchId);
                _context.ScheduleDetails.RemoveRange(schDetail);
            }

            _context.Schedules.RemoveRange(sch);
            _context.Users.Remove(user);

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine("Delete User Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
            return null ;
        }
    }
}
