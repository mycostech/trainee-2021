using budgetAPI.Service.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace budgetAPI.Service
{
    public class UserService : IUserService
    {
        private readonly budgetDBv2Context _context;

        public UserService(budgetDBv2Context context) //Constructor
        {
            _context = context;
        }

        //All User
        public async Task<List<Customer>> SelectAllUser()
        {
            var cuslist = await _context.Customers.ToListAsync();

            var cusResult = cuslist.Select(c => new Customer()
            {
                UserId = c.UserId,
                Firstname = c.Firstname,
                Lastname = c.Lastname,
                Username = c.Username,
                Email = c.Email,
                Password = c.Password
            }).ToList();

            if (cusResult == null)
            {
                return null;
            }
            return cusResult;
        }

        public string HashPassword(string password)
        {
            //Create the salt value with a cryptographic PRNG:
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);

            //Create the Rfc2898DeriveBytes and get the hash value:
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 100000);
            byte[] hash = pbkdf2.GetBytes(20);

            //Combine the salt and password bytes for later use:
            byte[] hashBytes = new byte[36];
            Array.Copy(salt, 0, hashBytes, 0, 16);
            Array.Copy(hash, 0, hashBytes, 16, 20);

            //Turn the combined salt+hash into a string for storage
            string savedPasswordHash = Convert.ToBase64String(hashBytes);
            //DBContext.AddUser(new User { ..., Password = savedPasswordHash });

            return savedPasswordHash;
        }

        public bool VerifyPassword(string password, string hashpassword)
        {
            /* Fetch the stored value */
            //string savedPasswordHash = DBContext.GetUser(u => u.UserName == user).Password;

            /* Extract the bytes */
            byte[] hashBytes = Convert.FromBase64String(hashpassword);
            /* Get the salt */
            byte[] salt = new byte[16];
            Array.Copy(hashBytes, 0, salt, 0, 16);
            /* Compute the hash on the password the user entered */
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 100000);
            byte[] hash = pbkdf2.GetBytes(20);
            /* Compare the results */
            for (int i = 0; i < 20; i++)
                if (hashBytes[i + 16] != hash[i])
                {
                    //throw new UnauthorizedAccessException();
                    return false;
                }
            return true;
        }

        //Register
        public async Task<Customer> Register(Customer user)
        {
         
            var cus = new Customer()
            {
                Firstname = user.Firstname,
                Lastname = user.Lastname,
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
            return cus;
        }

        //Login
        public async Task<Customer> Login(string email, string password)
        {
            var cus = _context.Customers.Where(c => c.Email == email).FirstOrDefault();

            if (cus == null)
            {
                return null;
            }
            else
            {
                if (cus.Password == password)
                {
                    return cus;
                }
                else
                {
                    return null;
                }
            }
            return cus;

        }

        public async Task<Customer> GetUser(string email)
        {
            var cus = _context.Customers.Where(c => c.Email == email).FirstOrDefault();
            if (cus == null)
            {
                return null;
            }

            return cus;
        }
    }

}