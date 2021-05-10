using System;
using System.Collections.Generic;

#nullable disable

namespace diaryApp_backend
{
    public partial class Events
    {
        public Events() { }

        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public string EventName { get; set; }
        public string Memo { get; set; }
        public string UserId { get; set; }

        public virtual Users User { get; set; }
    }
    
}
