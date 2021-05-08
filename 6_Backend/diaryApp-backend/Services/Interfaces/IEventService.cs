using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace diaryApp_backend.Services.Interfaces
{
    public interface IEventService
    {
        public Task<List<Events>> GetEvents(string uid);
        public Task<Events> GetEventDetail(int eventId);
        public Task<List<Events>> SearchByEventName(string name);
        public Task<Events> addEvent(Events newEvent);
        public Task<Events> editEvent(int id, Events newEvent);
        public Task<Events> delEvent(int id);
    }

    
}
