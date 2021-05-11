using System;
using diaryApp_backend.Services.Interfaces;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using diaryApp_backend.Data;

namespace diaryApp_backend.Services
{
    public class EventService : IEventService
    {
        private readonly diaryAppContext db = new diaryAppContext();

        public EventService(diaryAppContext dbContext)
        {
            db = dbContext;
        }
        public async Task<List<EventInfo>> GetEvents(string uid) {

            var events = await db.Events.Where(e => e.UserId == uid).ToListAsync();

     
            return events.Select(e => new EventInfo()
            {
                DateTime = e.DateTime,
                EventName = e.EventName,
                Memo = e.Memo

            }).ToList();
                
        }


        public async Task<EventInfo> GetEventDetail(int id)
        {
            var detail = await db.Events.Where(d => d.Id == id).FirstOrDefaultAsync();


            if (detail == null) {
                return null;
            }
            else {
                var info = new EventInfo()
                {
                    DateTime = detail.DateTime,
                    EventName = detail.EventName,
                    Memo = detail.Memo
                };
                return info;
            }
        }

        public async Task<List<EventInfo>> SearchByEventName(string name) {

            var content = await db.Events.Where(e => e.EventName == name).ToListAsync();

            return content.Select(e => new EventInfo()
            {
                DateTime = e.DateTime,
                EventName = e.EventName,
                Memo = e.Memo

            }).ToList();

        }

        public async Task<Events> addEvent(AddEvent eventObj)
        {
       
            try
            {
                var userObj = db.Users.Single(u => u.Id == eventObj.UserId);
            }
            catch (Exception err)
            {
                throw err;
            }

            var ev = new Events()
            {

                DateTime = eventObj.DateTime,
                EventName = eventObj.EventName,
                Memo = eventObj.Memo,
                UserId = eventObj.UserId
            };
  
            db.Add(ev);
            await db.SaveChangesAsync();

            return ev;
            

        }

        public async Task<EditEvent> editEvent(int id, EditEvent newEvent)
        {
            try
            {
                var userObj = db.Users.Single(u => u.Id == newEvent.UserId);
            }
            catch (Exception err)
            {
                throw err;
            }

            var editObj = db.Events.First(a => a.Id == id);

            editObj.EventName = newEvent.EventName;
            editObj.Memo = newEvent.Memo;
            await db.SaveChangesAsync();
            
            return newEvent;
        }

        public async Task<Events> delEvent(int id)
        {

            try {
                var eventObj = db.Events.Single(e => e.Id == id);
            }
            catch (Exception ex) {
                throw ex;
            }

            var delObj = db.Events.Find(id);
            db.Remove(delObj);
            await db.SaveChangesAsync();

            return new Events()
            {
                Id = delObj.Id,
                DateTime = delObj.DateTime,
                EventName = delObj.EventName,
                Memo = delObj.Memo,
                UserId = delObj.UserId
            };
        }


    }
}
