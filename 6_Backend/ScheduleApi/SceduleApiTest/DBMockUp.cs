using Microsoft.EntityFrameworkCore;
using ScheduleApi;
using System;

namespace SceduleApiTest
{
    static class DBMocker
    {
        public static void SeedTestSuccess(this ScheduleDBContext dbContext)
        {
            
            dbContext.Users.Add(new User
            {
                UserId = 1000,
                FirstName = "ENN",
                LastName = "ZEE",
                Email = "en@ohmy.god",
                PhoneNumber = "0123456789",
                Dob = new DateTime(2000,01,01)
            });  
            
            dbContext.Schedules.Add(new Schedule
            {
                SchId = 10000000,
                Title = "Default",
                UserId = 1000
            });

            dbContext.ScheduleDetails.Add(new ScheduleDetail
            {
                SchId = 10000000,
                SchDate = new DateTime(2000, 01, 01),
                Note = "default",
                Category = "D"
            });

            dbContext.Schedules.Add(new Schedule
            {
                SchId = 10000002,
                Title = "Natural",
                UserId = null
            });

            dbContext.ScheduleDetails.Add(new ScheduleDetail
            {
                SchId = 10000002,
                SchDate = new DateTime(2021, 01, 01),
                Note = null,
                Category = "N"
            });

            dbContext.ScheduleCategories.Add(new ScheduleCategory
            {
                CatCode = "D",
                Descriptions = "Default"
            });

            dbContext.ScheduleCategories.Add(new ScheduleCategory
            {
                CatCode = "N",
                Descriptions = "Natural"
            });

            dbContext.SaveChanges();
        }

        
        public static void SeedTestNotFound(this ScheduleDBContext dbContext)
        {
            /*
            dbContext.Users.Add(new User
            {
                UserId = 1001,
                FirstName = "ZEE",
                LastName = "ENN",
                Email = "ne@ohmy.god",
                PhoneNumber = "0987654321",
                Dob = new DateTime(2000, 12, 31)
            });
            
            dbContext.Schedules.Add(new Schedule
            {
                SchId = 10000001,
                Title = "Testing",
                UserId = 1001
            });
            dbContext.ScheduleDetails.Add(new ScheduleDetail
            {
                SchId = 10000001,
                SchDate = new DateTime(2000, 12, 31),
                BeginTime = new TimeSpan(0, 0, 0),
                EndTime = new TimeSpan(12, 59, 59),
                Note = "testing",
                Category = "T"
            });

            dbContext.ScheduleCategories.Add(new ScheduleCategory
            {
                CatCode = "T",
                Descriptions = "Testing"
            });
            
            dbContext.SaveChanges();*/
        }
        
        public static ScheduleDBContext CreateTestingDatabase(string dbName)
        {
            var options = new DbContextOptionsBuilder<ScheduleDBContext>()
                .UseInMemoryDatabase(databaseName: dbName)
                .Options;

            var dbContext = new ScheduleDBContext(options);
            return dbContext;
        }
    }
}