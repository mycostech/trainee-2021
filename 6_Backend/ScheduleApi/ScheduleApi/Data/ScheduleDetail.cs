using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleApi
{
    public partial class ScheduleDetail
    {
        public int SchId { get; set; }
        public DateTime? SchDate { get; set; }
        public string Note { get; set; }
        public string Category { get; set; }
        
        public virtual ScheduleCategory CategoryNavigation { get; set; }
        public virtual Schedule Sch { get; set; }
        
    }
}
