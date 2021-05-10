using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleApi
{
    public partial class ScheduleCategoryContract
    {
        public ScheduleCategoryContract()
        {
            ScheduleDetails = new HashSet<ScheduleDetailContract>();
        }

        public string CatCode { get; set; }
        public string Descriptions { get; set; }

        public virtual ICollection<ScheduleDetailContract> ScheduleDetails { get; set; }
    }
}
