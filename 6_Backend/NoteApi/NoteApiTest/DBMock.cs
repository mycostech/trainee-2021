using Microsoft.EntityFrameworkCore;
using NoteApi.Data;
using System;

namespace NoteApiTest
{
    public static class DbContextMocker
    {
        public static void SeedTestSuccess(this noteDBContext dbContext)
        {
            dbContext.Notes.Add(new Note
            {
                Id = 1,
                TitleNote = "A",
                DescriptionNote = "AA",
                DateNote = DateTime.Now
            });
            dbContext.SaveChanges();
        }
        public static void SeedTestNotFound(this noteDBContext dbContext)
        {
            dbContext.Notes.Add(new Note
            {
                Id = 1,
                TitleNote = "A",
                DescriptionNote = "AA",
                DateNote = DateTime.Now
            });
            dbContext.SaveChanges();
        }
        public static noteDBContext CreateTestingDatabase(string dbName)
        {
            var options = new DbContextOptionsBuilder<noteDBContext>()
                .UseInMemoryDatabase(databaseName: dbName)
                .Options;

            var dbContext = new noteDBContext(options);
            return dbContext;
        }
    }
}
