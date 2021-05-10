﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleApi
{
    public partial class ScheduleDetailContract
    {
        public int SchId { get; set; }
        public DateTime? SchDate { get; set; }
        public TimeSpan? BeginTime { get; set; }
        public TimeSpan? EndTime { get; set; }
        public string Note { get; set; }
        public string Category { get; set; }
        
        public virtual ScheduleCategoryContract CategoryNavigation { get; set; }
        public virtual ScheduleContract Sch { get; set; }
        
    }
}
