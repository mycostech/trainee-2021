using System;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace diaryApp_backend
{
    public class ProfileView
    {
        public ProfileView()
        {
        }

        [Required(ErrorMessage = "Please enter first name")]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please enter last name")]
        [Display(Name = "First Name")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Please enter nickname")]
        public int Nickname { get; set; }

        [Required(ErrorMessage = "Please choose email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please enter birthdate")]
        public string Birthdate { get; set; }


        [Required(ErrorMessage = "Please choose profile image")]
        [Display(Name = "Profile Picture")]
        public IFormFile ProfileImage { get; set; }
    }
}
