using System.Threading.Tasks;
using Xunit;
using NoteApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using NoteApi.Services;
using Moq;
using NoteApi.Data;

namespace NoteApiTest
{
    public class NoteControllerTest
    {
        [Fact]
        public async Task Get_AllNote_Success()
        {
            var dbContext = DbContextMocker.CreateTestingDatabase(nameof(Get_AllNote_Success));
            DbContextMocker.SeedTestSuccess(dbContext);
            var service = new NoteService(dbContext);
            var controller = new NotesController(service);
            var response = await controller.GetNoteItems(1);
            dbContext.Dispose();
            Assert.Equal(1, response.Value.Id);
        }
        [Fact]
        public async Task Get_Note_NotFound()
        {
            var moq = new Mock<INoteService>();
            moq.Setup(_ => _.GetNoteItems(It.IsAny<int>())).ReturnsAsync((Note)null);
            var controller = new NotesController(moq.Object);
            var response = await controller.GetNoteItems(2);
            Assert.IsType<NotFoundResult>(response.Result);
        }
    }
}
