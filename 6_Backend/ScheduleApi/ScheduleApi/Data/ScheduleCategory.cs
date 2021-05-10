using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleApi
{
    public partial class ScheduleCategory
    {

        public ScheduleCategory()
        {
            ScheduleDetails = new HashSet<ScheduleDetail>();
        }

        public string CatCode { get; set; }
        public string Descriptions { get; set; }

        public virtual ICollection<ScheduleDetail> ScheduleDetails { get; set; }
    }
}
