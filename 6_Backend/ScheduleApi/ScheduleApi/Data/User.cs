using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleApi
{
    public partial class User
    {
        
        public User()
        {
            Schedules = new HashSet<Schedule>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? Dob { get; set; }

        public virtual ICollection<Schedule> Schedules { get; set; }
    }
}
