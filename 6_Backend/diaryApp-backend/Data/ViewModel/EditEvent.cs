using System;
namespace diaryApp_backend.Data
{
    public class EditEvent
    {
        public EditEvent()
        {
        }

        public DateTime DateTime { get; set; }
        public string EventName { get; set; }
        public string Memo { get; set; }
        public string UserId { get; set; }
    }
}
