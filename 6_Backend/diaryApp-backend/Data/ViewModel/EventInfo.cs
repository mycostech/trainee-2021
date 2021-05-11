using System;
namespace diaryApp_backend.Data
{
    public class EventInfo
    {
        public EventInfo()
        {
        }
        public DateTime DateTime { get; set; }
        public string EventName { get; set; }
        public string Memo { get; set; }
    }
}
