using System;
using System.Threading.Tasks;
using ScheduleApi.Controllers;
using Xunit;
using ScheduleApi.Services;
using ScheduleApi;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace SceduleApiTest
{
    public class ScheduleControllerTest
    {
        [Fact]
        public async Task Get_AllSchedule_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllSchedule_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new ScheduleService(dbContext);
            var controller = new ScheduleController(service);
            var response = await controller.SelectAllSchedule();
            dbContext.Dispose();
            Assert.NotEmpty(response.Value);
        }

        [Fact]
        public async Task Get_AllSchedule_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllSchedule_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new ScheduleService(dbContext);
            var controller = new ScheduleController(service);
            var response = await controller.SelectAllSchedule();
            dbContext.Dispose();
            Assert.Empty(response.Value);
        }

        [Fact]
        public async Task Get_Schedule_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_Schedule_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new ScheduleService(dbContext);
            var controller = new ScheduleController(service);
            var response = await controller.SelectSchedule(10000000);
            dbContext.Dispose();
            Assert.Equal(10000000, response.Value.SchId);
        }

        [Fact]
        public async Task Get_Schedule_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_Schedule_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new ScheduleService(dbContext);
            var controller = new ScheduleController(service);
            var response = await controller.SelectSchedule(10000000);
            dbContext.Dispose();
            Assert.Null(response.Value);
        }
    }
}
