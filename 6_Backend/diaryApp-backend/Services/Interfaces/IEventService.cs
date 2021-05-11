using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using diaryApp_backend.Data;

namespace diaryApp_backend.Services.Interfaces
{
    public interface IEventService
    {
        public Task<List<EventInfo>> GetEvents(string uid);
        public Task<EventInfo> GetEventDetail(int eventId);
        public Task<List<EventInfo>> SearchByEventName(string name);
        public Task<Events> addEvent(AddEvent newEvent);
        public Task<EditEvent> editEvent(int id, EditEvent newEvent);
        public Task<Events> delEvent(int id);
    }

    
}
