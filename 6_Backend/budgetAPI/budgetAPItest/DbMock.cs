using budgetAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace budgetAPItest
{
    //สร้างเพิ่มขึ้นมา
    //static class ต้องเป็น static method
    public static class DbMock
    {
        // DB MOCK
        public static void Seed(this budgetDBv2Context dbContext)
        {
            // ADD CUSTOMER
            dbContext.Customers.Add(new Customer
            {
                Firstname = "Yeo",
                Lastname = "Lowbatt",
                Username = "yeolowbatt",
                Email = "yeolowbatt@gmail.com",
                Password = HashPassword("12345")
            });

            dbContext.Customers.Add(new Customer
            {
                Firstname = "Pong",
                Lastname = "Pongngi",
                Username = "pongngi",
                Email = "pongngi@gmail.com",
                Password = HashPassword("12345")
            });

            dbContext.SaveChanges();
        }

        //Hash Password Function (Used in DB MOCK, hash password)
        public static string HashPassword(string password)
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
    }
}