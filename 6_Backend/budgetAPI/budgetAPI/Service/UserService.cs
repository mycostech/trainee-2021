using budgetAPI.Service.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service
{
    public class UserService : IUserService
    {
        private readonly budgetDBContext _context = new budgetDBContext();
        //public UserService (budgetDBContext context)
        //{
        //    _context = context;
        //}


        public async Task<List<Customer>> SelectUser()
        {
            var cuslist = await _context.Customers.ToListAsync();

            return cuslist.Select(c => new Customer()
            {
                UserId = c.UserId,
                FirstName = c.FirstName,
                LastName = c.LastName,
                Username = c.Username,
                Email = c.Email,
                Password = c.Password
            }).ToList();
        }

        public async Task<Customer> InsertUser(Customer user)
        {
            var cus = new Customer()
            {
                UserId = user.UserId,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Username = user.Username,
                Email = user.Email,
                Password = user.Password
            };

            try
            {
                _context.Add(cus);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e;
            }
            return user;
        }

    }
}
