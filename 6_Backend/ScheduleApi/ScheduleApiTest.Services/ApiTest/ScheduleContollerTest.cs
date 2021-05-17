using System;
using System.Threading.Tasks;
using ScheduleApi.Controllers;
using Xunit;
using ScheduleApi.Services;
using ScheduleApi;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace SceduleApiTest.Services.Mock
{
    public class ScheduleControllerTest
    {
        [Fact]
        public async Task Get_AllSchedule_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllSchedule_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new ScheduleService(dbContext);
            //var controller = new ScheduleController(service);
            //var response = await controller.SelectAllSchedule();
            //dbContext.Dispose();
            var response = await service.SelectAllSchedule();
            Assert.NotEmpty(response);
        }

        [Fact]
        public async Task Get_AllSchedule_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllSchedule_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new ScheduleService(dbContext);
            //var controller = new ScheduleController(service);
            //var response = await controller.SelectAllSchedule();
            //dbContext.Dispose();
            var response = await service.SelectAllSchedule();
            Assert.Empty(response);
        }

        [Fact]
        public async Task Get_Schedule_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_Schedule_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new ScheduleService(dbContext);
            //var controller = new ScheduleController(service);
            //var response = await controller.SelectSchedule(10000000);
            //dbContext.Dispose();
            var response = await service.SelectSchedule(10000000);
            Assert.Equal(10000000, response.SchId);
        }

        [Fact]
        public async Task Get_Schedule_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_Schedule_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new ScheduleService(dbContext);
            //var controller = new ScheduleController(service);
            //var response = await controller.SelectSchedule(10000000);
            //dbContext.Dispose();
            var response = await service.SelectSchedule(10000000);
            Assert.Null(response);
        }
    }
}
