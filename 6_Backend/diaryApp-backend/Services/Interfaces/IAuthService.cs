using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace diaryApp_backend.Services.Interfaces
{
    public interface IAuthService
    {

        public Task<Users> Login(string email, string password);
        public Task<Users> Register(Users newUser);
        public Task<Users> GetUser(string email);

        public string GetHashpassword(string password);
        public bool Verifypassword(string password, string hashpassword);

    }
}
