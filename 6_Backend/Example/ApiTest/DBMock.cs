
using Microsoft.EntityFrameworkCore;
using ToDoApi.Data;

namespace ApiTest
{
    public static class DbContextMocker
    {
        public static void SeedTestSuccess(this ToDoItemsContext dbContext)
        {
            dbContext.TodoItems.Add(new TodoItems
            {
                Id = 1,
                Name = "A"
            });
            dbContext.SaveChanges();
        }
        public static void SeedTestNotFound(this ToDoItemsContext dbContext)
        {
            dbContext.TodoItems.Add(new TodoItems
            {
                Id = 1,
                Name = "A"
            });
            dbContext.SaveChanges();
        }
        public static ToDoItemsContext CreateTestingDatabase(string dbName)
        {
            var options = new DbContextOptionsBuilder<ToDoItemsContext>()
                .UseInMemoryDatabase(databaseName: dbName)
                .Options;

            var dbContext = new ToDoItemsContext(options);
            return dbContext;
        }
    }
}
