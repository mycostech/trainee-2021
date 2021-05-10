using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public interface IUserService
    {
        public Task<List<User>> SelectAllUser();
        public Task<User> SelectUser(int userId);
        public Task<User> AddUser(User user);
        public Task<User> UpdateUser(int userId, User user);
        public Task<User> DeleteUser(int userId);
    }
}
