using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


#nullable disable

namespace diaryApp_backend
{
    public partial class Users
    {
        public Users()
        {
            Events = new HashSet<Events>();
        }

        public string Id { get; set; }

        [Required]
        public string Fname { get; set; }

        [Required]
        public string Lname { get; set; }

        [Required]
        public string Nickname { get; set; }

        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "E-mail is not valid")]
        public string Email { get; set; }

        public string Password { get; set; }

        public string ProfileImage { get; set; }

        public DateTime Birthdate { get; set; }

        public virtual ICollection<Events> Events { get; set; }
    }
}
