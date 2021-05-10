using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleApi
{
    public partial class ScheduleContract
    {
        public int SchId { get; set; }
        public string Title { get; set; }
        public int? UserId { get; set; }

        public virtual UserContract User { get; set; }
        public virtual ScheduleDetailContract ScheduleDetail { get; set; }

    }
}
