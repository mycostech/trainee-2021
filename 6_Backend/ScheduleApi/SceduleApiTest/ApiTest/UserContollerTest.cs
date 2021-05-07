using System;
using System.Threading.Tasks;
using ScheduleApi.Controllers;
using Xunit;
using ScheduleApi.Services;
using ScheduleApi;
using Microsoft.AspNetCore.Mvc;

namespace SceduleApiTest
{
    public class UserControllerTest
    {
        [Fact]
        public async Task Get_AllUser_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllUser_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new UserService(dbContext);
            var controller = new UserController(service);
            var response = await controller.SelectAllUser();
            dbContext.Dispose();
            Assert.NotEmpty(response.Value);
        }

        [Fact]
        public async Task Get_AllUser_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllUser_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new UserService(dbContext);
            var controller = new UserController(service);
            var response = await controller.SelectAllUser();
            dbContext.Dispose();
            Assert.Empty(response.Value);
        }

        [Fact]
        public async Task Get_User_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_User_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new UserService(dbContext);
            var controller = new UserController(service);
            var response = await controller.SelectUser(1000);
            dbContext.Dispose();
            Assert.Equal(1000, response.Value.UserId);
        }

        [Fact]
        public async Task Get_User_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_User_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new UserService(dbContext);
            var controller = new UserController(service);
            var response = await controller.SelectUser(1001);
            dbContext.Dispose();
            Assert.Null(response.Value);
        }
    }
}
