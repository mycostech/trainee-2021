using Api.Contract;
using Api.Service;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Threading.Tasks;
using ToDoApi; 
using Xunit;

namespace ApiTest
{
    public class TodoItemControllerTest
    {
        [Fact]
        public async Task Get_AllToDoItem_Success()
        {
            var dbContext = DbContextMocker.CreateTestingDatabase(nameof(Get_AllToDoItem_Success));
            DbContextMocker.SeedTestSuccess(dbContext);
            var service = new TodoService(dbContext);
            var controller = new TodoItemsController(service);
            var response = await controller.GetTodoItem(1);
            dbContext.Dispose(); 
            Assert.Equal(1, response.Value.id);
        }

        [Fact]
        public async Task Get_ToDoItems_NotFound()
        { 
            var moq = new Mock<ITodoService>(); 
            moq.Setup(_ => _.GetTodoItem(It.IsAny<int>())).ReturnsAsync((TodoItemContract)null);
            var controller = new TodoItemsController(moq.Object);
            var response = await controller.GetTodoItem(2);  
            Assert.IsType<NotFoundResult>(response.Result);
        }
    }
}
