using System;
using System.Threading.Tasks;
using ScheduleApi.Controllers;
using Xunit;
using ScheduleApi.Services;
using ScheduleApi;
using Microsoft.AspNetCore.Mvc;

namespace SceduleApiTest.Services.Mock
{
    public class UserControllerTest
    {
        [Fact]
        public async Task Get_AllUser_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllUser_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new UserService(dbContext);
            //var controller = new UserController(service);
            //var response = await controller.SelectAllUser();
            //dbContext.Dispose();
            var response = await service.SelectAllUser();
            Assert.NotEmpty(response);
        }

        [Fact]
        public async Task Get_AllUser_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllUser_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new UserService(dbContext);
            //var controller = new UserController(service);
            //var response = await controller.SelectAllUser();
            //dbContext.Dispose();
            var response = await service.SelectAllUser();
            Assert.Empty(response);
        }

        [Fact]
        public async Task Get_User_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_User_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new UserService(dbContext);
            //var controller = new UserController(service);
            //var response = await controller.SelectUser(1000);
            //dbContext.Dispose();
            var response = await service.SelectUser(1000);
            Assert.Equal(1000, response.UserId);
        }

        [Fact]
        public async Task Get_User_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_User_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new UserService(dbContext);
            //var controller = new UserController(service);
            //var response = await controller.SelectUser(1001);
            //dbContext.Dispose();
            var response = await service.SelectUser(1000);
            Assert.Null(response);
        }
    }
}
