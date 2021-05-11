using System;
namespace diaryApp_backend.Data
{
    public class AddEvent
    {
        public AddEvent()
        {
        }
        public DateTime DateTime { get; set; }
        public string EventName { get; set; }
        public string Memo { get; set; }
        public string UserId { get; set; }
    }
}
