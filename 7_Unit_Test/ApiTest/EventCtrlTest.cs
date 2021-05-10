using System;
using System.Threading.Tasks;
using diaryApp_backend;
using diaryApp_backend.Controllers;
using diaryApp_backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit;


namespace ApiTest
{
    public class EventCtrlTest
    {
        /// create database
        public diaryAppContext createTestingDB(string name)
        {
            var options = new DbContextOptionsBuilder<diaryAppContext>()
            .UseInMemoryDatabase(databaseName: name)
            .Options;

            var dbContext = new diaryAppContext(options);
            dbContext.Seed();

            return dbContext;
        }

       
        // Get
        [Fact]
        public  async Task GetEventDetailSuccess()
        {

            var dbContext = createTestingDB(nameof(GetEventDetailSuccess));
            var eventServe = new EventService(dbContext);
            var controller = new EventController(eventServe);

            var res = await controller.GetEventDetail(1);
            dbContext.Dispose();

            Assert.Equal(1, res.Value.Id);
        }

        [Fact]
        public async Task GetEventDetailError()
        {

            var dbContext = createTestingDB(nameof(GetEventDetailError));
            var eventServe = new EventService(dbContext);
            var controller = new EventController(eventServe);

            var res = await controller.GetEventDetail(2);
            dbContext.Dispose();

            Assert.IsType<NotFoundResult>(res.Result);
            //Assert.Null(res.Result);

        }


        // Add
        [Fact]
        public async Task addEventSuccess() {

            var dbContext = createTestingDB(nameof(addEventSuccess));
            var eventServe = new EventService(dbContext);
            var controller = new EventController(eventServe);

            var newEv = new Events() {
                EventName = "testEvent2",
                DateTime = new DateTime(2010 - 05 - 01),
                Memo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec tristique tellus, eget interdum massa. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis felis dignissim egestas tristique. Quisque elementum sed diam ac varius. Sed sollicitudin venenatis sodales. Maecenas malesuada metus vitae tellus accumsan, et cursus mauris tincidunt. Suspendisse in nibh luctus, maximus mauris eu, efficitur justo. Morbi eu justo sed quam sodales mollis. Nulla eget suscipit nisl. Nam efficitur vestibulum orci, quis placerat nibh ultricies sit amet. In hac habitasse platea dictumst. Vivamus vel accumsan nisi.",
                UserId = "testUser1"
            };

            var res = await controller.AddEvent(newEv);
            dbContext.Dispose();

            Assert.Equal("testEvent2", res.Value.EventName);
        }

        [Fact]
        public async Task addEventError()
        {

            var dbContext = createTestingDB(nameof(addEventError));
            var eventServe = new EventService(dbContext);
            var controller = new EventController(eventServe);

            var newEv = new Events()
            {
                EventName = "testEvent2",
                DateTime = new DateTime(2010 - 05 - 01),
                Memo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec tristique tellus, eget interdum massa. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis felis dignissim egestas tristique. Quisque elementum sed diam ac varius. Sed sollicitudin venenatis sodales. Maecenas malesuada metus vitae tellus accumsan, et cursus mauris tincidunt. Suspendisse in nibh luctus, maximus mauris eu, efficitur justo. Morbi eu justo sed quam sodales mollis. Nulla eget suscipit nisl. Nam efficitur vestibulum orci, quis placerat nibh ultricies sit amet. In hac habitasse platea dictumst. Vivamus vel accumsan nisi.",
                UserId = "testUser12323"
            };

            var res = await controller.AddEvent(newEv);
            dbContext.Dispose();

            Assert.Equal(500, ((StatusCodeResult)res.Result).StatusCode);
            //Assert.Null(res.Result);

        }


        // Edit
        [Fact]
        public async Task EditEventSuccess() {

            var dbContext = createTestingDB(nameof(EditEventSuccess));
            var eventServe = new EventService(dbContext);
            var controller = new EventController(eventServe);

            var editEv = new Events()
            {

                EventName = "testEditEvent1",
                DateTime = new DateTime(2010 - 05 - 01),
                Memo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec tristique tellus, eget interdum massa. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis felis dignissim egestas tristique. Quisque elementum sed diam ac varius. Sed sollicitudin venenatis sodales. Maecenas malesuada metus vitae tellus accumsan, et cursus mauris tincidunt. Suspendisse in nibh luctus, maximus mauris eu, efficitur justo. Morbi eu justo sed quam sodales mollis. Nulla eget suscipit nisl. Nam efficitur vestibulum orci, quis placerat nibh ultricies sit amet. In hac habitasse platea dictumst. Vivamus vel accumsan nisi.",
                UserId = "testUser1"
            };

            int eventId = 1;

            var res = await controller.ModifyEvent(eventId, editEv);
            dbContext.Dispose();

            Assert.Equal("testEditEvent1", res.Value.EventName);
        }

        [Fact]
        public async Task EditEventError() {

            var dbContext = createTestingDB(nameof(EditEventError));
            var eventServe = new EventService(dbContext);
            var controller = new EventController(eventServe);

            var editEv = new Events()
            {

                EventName = "testEditEvent1",
                DateTime = new DateTime(2010 - 05 - 01),
                Memo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec tristique tellus, eget interdum massa. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis felis dignissim egestas tristique. Quisque elementum sed diam ac varius. Sed sollicitudin venenatis sodales. Maecenas malesuada metus vitae tellus accumsan, et cursus mauris tincidunt. Suspendisse in nibh luctus, maximus mauris eu, efficitur justo. Morbi eu justo sed quam sodales mollis. Nulla eget suscipit nisl. Nam efficitur vestibulum orci, quis placerat nibh ultricies sit amet. In hac habitasse platea dictumst. Vivamus vel accumsan nisi.",
                UserId = "testUser22"
            };

            int eventId = 1;

            var res = await controller.ModifyEvent(eventId, editEv);
            dbContext.Dispose();

            Assert.Equal(500, ((StatusCodeResult)res.Result).StatusCode);
        }


        // Del
        [Fact]
        public async Task DelEventSuccess() {

            var dbContext = createTestingDB(nameof(DelEventSuccess));
            var eventServe = new EventService(dbContext);
            var controller = new EventController(eventServe);

            var res = await controller.DelEvent(1);
            dbContext.Dispose();

            Assert.Equal(1, res.Value.Id);
        }

        [Fact]
        public async Task DelEventError() {

            var dbContext = createTestingDB(nameof(DelEventError));
            var eventServe = new EventService(dbContext);
            var controller = new EventController(eventServe);

            var res = await controller.DelEvent(10);
            dbContext.Dispose();

            Assert.Equal(404, ((StatusCodeResult)res.Result).StatusCode);
        }
        

    }

    
}
