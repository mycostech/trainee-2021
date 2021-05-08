using System;
using System.Security.Cryptography;
using diaryApp_backend;

namespace ApiTest
{
    public static class DbMock
    {
        public static void Seed(this diaryAppContext dbContext)
        {
            // add User
            dbContext.Users.Add(new Users
            {
                Id = "testUser1",
                Fname = "UserFirstname1",
                Lname = "UserLastname1",
                Nickname = "UserNickName1",
                Email = "testUser1@test.com",
                Password = GetHashpassword("12345")

            });

            dbContext.SaveChangesAsync();


            // add Event
            dbContext.Events.Add(new Events
            {
                EventName = "testEvent1",
                DateTime = new DateTime(2008 - 05 - 01),
                Memo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec tristique tellus, eget interdum massa. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis felis dignissim egestas tristique. Quisque elementum sed diam ac varius. Sed sollicitudin venenatis sodales. Maecenas malesuada metus vitae tellus accumsan, et cursus mauris tincidunt. Suspendisse in nibh luctus, maximus mauris eu, efficitur justo. Morbi eu justo sed quam sodales mollis. Nulla eget suscipit nisl. Nam efficitur vestibulum orci, quis placerat nibh ultricies sit amet. In hac habitasse platea dictumst. Vivamus vel accumsan nisi.",
                UserId = "testUser1"
            });


            dbContext.SaveChangesAsync();


        }

        public static string GetHashpassword(string password)
        {

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
    }
    

}
