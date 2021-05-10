using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleApi
{
    public partial class UserContract
    {
        public UserContract()
        {
            Schedules = new HashSet<ScheduleContract>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime Dob { get; set; }

        public virtual ICollection<ScheduleContract> Schedules { get; set; }
    }
}
