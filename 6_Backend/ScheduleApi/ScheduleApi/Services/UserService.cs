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

        public async Task<List<UserContract>> SelectAllUser()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<UserContract> SelectUser(int userId)
        {
            return await _context.Users.FindAsync(userId);
        }

        public async Task<UserContract> AddUser(UserContract user)
        {
            int max;
            var nUser = _context.Users.Select(e => e.UserId).ToList();
            if (nUser.Count() == 0) { max = 1001; } else { max = nUser.Max() + 1; }
            UserContract u = new User()
            {
                UserId = max,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                Dob = user.Dob
            };
            _context.Add(u);
            
            ScheduleContract dob = new ScheduleContract { SchId = u.UserId * 10000, Title = "My Birthday", UserId = user.UserId };
            _context.Schedules.Add(dob);

            var dobDetail = new ScheduleDetailContract { SchId = dob.SchId, SchDate = user.Dob, Category = "B" };
            _context.ScheduleDetails.Add(dobDetail);
            
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
            return u;
        }

        public async Task<UserContract> UpdateUser(int userId, UserContract user)
        {
            var u = _context.Users.Find(userId);

            if (user.FirstName == null) { u.FirstName = u.FirstName; } else { u.FirstName = user.FirstName; };
            if (user.LastName == null) { u.LastName = u.LastName; } else { u.LastName = user.LastName; };
            if (user.Email == null) { u.Email = u.Email; } else { u.Email = user.Email; };
            if (user.PhoneNumber == null) { u.PhoneNumber = u.PhoneNumber; } else { u.PhoneNumber = user.PhoneNumber; };
            if (user.Dob == default(DateTime)) { u.Dob = u.Dob; } else { u.Dob = user.Dob; };

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

        public async Task<UserContract> DeleteUser(int userId)
        {
            var user = _context.Users.Find(userId);
            var sch = _context.Schedules.Where(e => e.UserId == user.UserId).ToList();

            foreach (ScheduleContract s in sch)
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
            return null;
        }
    }
}
