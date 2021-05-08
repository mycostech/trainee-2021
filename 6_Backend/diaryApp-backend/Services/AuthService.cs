﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using diaryApp_backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;



namespace diaryApp_backend.Services
{
    public class AuthService : IAuthService
    {
        private readonly diaryAppContext db = new diaryAppContext();

        public AuthService(diaryAppContext dbContext)
        {
            db = dbContext;
        }

        public string GetHashpassword(string password) {

            // STEP 1 Create the salt value with a cryptographic PRNG:
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);

            // STEP 2 Create the Rfc2898DeriveBytes and get the hash value:
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 100000);
            byte[] hash = pbkdf2.GetBytes(20);


            // STEP 3 Combine the salt and password bytes for later use:
            byte[] hashBytes = new byte[36];
            Array.Copy(salt, 0, hashBytes, 0, 16);
            Array.Copy(hash, 0, hashBytes, 16, 20);

            // STEP 4 Turn the combined salt+hash into a string for storage
            string savedPasswordHash = Convert.ToBase64String(hashBytes);
            
            return savedPasswordHash;
        }

        public bool Verifypassword(string password, string hashedPassword) {

            // STEP 5 Verify the user-entered password against a stored password
            
            /* Extract the bytes */
            byte[] hashBytes = Convert.FromBase64String(hashedPassword);
            /* Get the salt */
            byte[] salt = new byte[16];
            Array.Copy(hashBytes, 0, salt, 0, 16);
            /* Compute the hash on the password the user entered */
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 100000);
            byte[] hash = pbkdf2.GetBytes(20);
            /* Compare the results */
            for (int i = 0; i < 20; i++)
                if (hashBytes[i + 16] != hash[i]) {
                    return false;
                }

            return true;

        }

        public async Task<Users> GetUser(string email) {
            var user = await db.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            if (user == null)
            {
                return null;
            }
            else {
                return user;
            }
        }

        public async Task<Users> Login(string email, string password) {

            var user = await db.Users.Where(u => u.Email == email).FirstOrDefaultAsync();

            if (user == null) {
                return null;
            }
            else
            {
                if (user.Password == password)
                {
                    return user;
                }
                else
                {
                    return null;
                }
            }

            return user;
        }

        public async Task<Users> Register(Users newUser)
        {

    
            var user = new Users()
            {
                Id = Guid.NewGuid().ToString(),
                Fname = newUser.Fname,
                Lname = newUser.Lname,
                Nickname = newUser.Nickname,
                Birthdate = newUser.Birthdate,
                Email = newUser.Email,
                Password = newUser.Password,
                ProfileImage = newUser.ProfileImage
            };


            try
            {


                db.Add(user);
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException err) {
                throw err;
            }

            return newUser;
        }

    }


}
