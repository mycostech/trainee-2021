using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service.Interface
{
    public interface IUserService
    {
        public Task<List<Customer>> SelectUser();
        public Task<Customer> InsertUser(Customer user);
    }
}
