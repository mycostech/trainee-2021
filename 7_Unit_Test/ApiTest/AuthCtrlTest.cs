using System;
using System.Threading.Tasks;
using diaryApp_backend;
using diaryApp_backend.Controllers;
using diaryApp_backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit;


namespace ApiTest
{
    public class AuthCtrlTest
    {

        /// create database
        public diaryAppContext createTestingDB(string name)
        {
            var options = new DbContextOptionsBuilder<diaryAppContext>()
            .UseInMemoryDatabase(databaseName: name)
            .Options;

            var dbContext = new diaryAppContext(options);
            dbContext.Seed();

            return dbContext;
        }


        // login
        [Fact]
        public async Task LoginSuccess()
        {

            var dbContext = createTestingDB(nameof(LoginSuccess));
            var userServe = new AuthService(dbContext);
            var controller = new AuthController(userServe);

            var res = await controller.Login("testUser1@test.com", "12345");

            dbContext.Dispose();

            Assert.Equal("testUser1", res.Value.Id);
        }

        // register
        [Fact]
        public async Task RegisterSuccess()
        {

            var dbContext = createTestingDB(nameof(RegisterSuccess));
            var userServe = new AuthService(dbContext);
            var controller = new AuthController(userServe);

            var uid = Guid.NewGuid().ToString();
            var newUser = new Users()
            {

                Id = uid,
                Fname = "userFname",
                Lname = "userLname",
                Nickname = "userNickname",
                Birthdate = new DateTime(1999 - 01 - 11),
                Email = "userT@test.com",
                Password = "12345"
            };


            var res = await controller.Register(newUser);
            dbContext.Dispose();

            Assert.Equal(uid, res.Value.Id);

        }

        [Fact]
        public async Task RegisterError() {

            var dbContext = createTestingDB(nameof(RegisterError));
            var userServe = new AuthService(dbContext);
            var controller = new AuthController(userServe);

            var uid = Guid.NewGuid().ToString();
            var newUser = new Users()
            {

                Id = uid,
                Fname = "userFname",
                Nickname = "userNickname",
                Birthdate = new DateTime(1999 - 01 - 11),
                Email = "userT@test.com",
                Password = "12345"
            };


            var res = await controller.Register(newUser);
            dbContext.Dispose();

            //Assert.IsType<BadRequestResult>(res.Result);
            Assert.Null(res.Result);
        }



    }


}
