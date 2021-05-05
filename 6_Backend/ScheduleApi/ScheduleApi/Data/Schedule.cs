using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleApi
{
    public partial class Schedule
    {
        public int SchId { get; set; }
        public string Title { get; set; }
        public int? UserId { get; set; }

        public virtual User User { get; set; }
        public virtual ScheduleDetail ScheduleDetail { get; set; }

    }
}
