using System.Collections.Generic;
using System.Threading.Tasks;

namespace budgetAPI.Service.Interface
{
    public interface IUserService
    {
        public Task<List<Customer>> SelectAllUser();
        public string HashPassword(string password);
        public bool VerifyPassword(string password, string hashpassword);
        public Task<Customer> Register(Customer user);
        public Task<Customer> Login(string email, string password);
        public Task<Customer> GetUser(string email); //ใช้กับ Login -> หาว่ามี user คนนี้ ?
    }
}