using System;

namespace ScheduleApi
{
    public class Schedule
    {
        public int SchId { get; set; }
        public string Title { get; set; }
        public int UserId { get; set; }
        public DateTime SchDate { get; set; }
        public TimeSpan BeginTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public string Note { get; set; }
        public char Category { get; set; }

    }

    public class User
    {

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime Dob { get; set; }

    }

    public class ScheduleCategory
    {
        public char CatCode { get; set; }
        public string Descriptions { get; set; }

    }

}
