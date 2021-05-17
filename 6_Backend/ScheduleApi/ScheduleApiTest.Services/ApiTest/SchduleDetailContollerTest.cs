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
    public class ScheduleDetailControllerTest
    {
        [Fact]
        public async Task Get_AllScheduleDetail_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllScheduleDetail_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new ScheduleDetailService(dbContext);
            //var controller = new ScheduleDetailController(service);
            //var response = await controller.SelectAllScheduleDetail();
            //dbContext.Dispose();
            var response = await service.SelectAllScheduleDetail();
            Assert.NotEmpty(response);
        }

        [Fact]
        public async Task Get_AllScheduleDetail_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllScheduleDetail_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new ScheduleDetailService(dbContext);
            //var controller = new ScheduleDetailController(service);
            //var response = await controller.SelectAllScheduleDetail();
            //dbContext.Dispose();
            var response = await service.SelectAllScheduleDetail();
            Assert.Empty(response);
        }

        [Fact]
        public async Task Get_ScheduleDetail_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_ScheduleDetail_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new ScheduleDetailService(dbContext);
            //var controller = new ScheduleDetailController(service);
            //var response = await controller.SelectScheduleDetail(10000000);
            //dbContext.Dispose();
            var response = await service.SelectScheduleDetail(10000000);
            Assert.Equal(10000000, response.SchId);
        }

        [Fact]
        public async Task Get_ScheduleDetail_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_ScheduleDetail_NotFound));
            DBMocker.SeedTestNotFound(dbContext);
            var service = new ScheduleDetailService(dbContext);
            //var controller = new ScheduleDetailController(service);
            //var response = await controller.SelectScheduleDetail(10000000);
            //dbContext.Dispose();
            var response = await service.SelectScheduleDetail(10000000);
            Assert.Null(response);
        }
    }
}
