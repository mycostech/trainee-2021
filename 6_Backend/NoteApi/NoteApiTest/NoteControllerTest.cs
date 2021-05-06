using System.Threading.Tasks;
using Xunit;
using NoteApi.Controllers;
using Microsoft.AspNetCore.Mvc;


namespace NoteApiTest
{
    public class NoteControllerTest
    {
        [Fact]
        public async Task Get_AllNote_Success()
        {
            var dbContext = DbContextMocker.CreateTestingDatabase(nameof(Get_AllNote_Success));
            DbContextMocker.SeedTestSuccess(dbContext);
            var controller = new NotesController(dbContext);
            var response = await controller.GetNote(1);
            dbContext.Dispose();
            int id = response.Value.Id;
            Assert.Equal(1, id);
        }
        [Fact]
        public async Task Get_AllNote_NotFound()
        {
            var dbContext = DbContextMocker.CreateTestingDatabase(nameof(Get_AllNote_NotFound));
            var controller = new NotesController(dbContext);
            var response = await controller.GetNote(2);
            dbContext.Dispose();
            Assert.IsType<NotFoundResult>(response.Result);
        }
    }
}
