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
    public class ScheduleCategoryControllerTest
    {
        [Fact]
        public async Task Get_AllCategory_Success()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllCategory_Success));
            DBMocker.SeedTestSuccess(dbContext);
            var service = new ScheduleCategoryService(dbContext);
            //var controller = new ScheduleCategoryController(service);
            //var response = await controller.SelectAllCategory();
            //dbContext.Dispose();
            var response = await service.SelectAllCategory();
            Assert.NotEmpty(response);
        }

        [Fact]
        public async Task Get_AllCategory_NotFound()
        {
            var dbContext = DBMocker.CreateTestingDatabase(nameof(Get_AllCategory_NotFound));
            var service = new ScheduleCategoryService(dbContext);
            //var controller = new ScheduleCategoryController(service);
            //var response = await controller.SelectAllCategory();
            //dbContext.Dispose();
            var response = await service.SelectAllCategory();
            Assert.Empty(response);
        }
    }
}
