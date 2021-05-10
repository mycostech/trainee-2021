using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public interface IUserService
    {
        public Task<List<UserContract>> SelectAllUser();
        public Task<UserContract> SelectUser(int userId);
        public Task<UserContract> AddUser(UserContract user);
        public Task<UserContract> UpdateUser(int userId, UserContract user);
        public Task<UserContract> DeleteUser(int userId);
    }
}
