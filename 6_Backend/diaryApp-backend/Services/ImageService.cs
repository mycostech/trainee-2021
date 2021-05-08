using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using diaryApp_backend;
using System.IO;
using diaryApp_backend.Services.Interfaces;

namespace diaryApp_backend.Services
{

    public class ImageService : IimageService
    {
        public static IWebHostEnvironment _hostEnvironment;

        // Constructor
        public ImageService(IWebHostEnvironment hostEnvironment)
        {
            _hostEnvironment = hostEnvironment;
        }


        // save image and send image name
        public async Task<string> UploadImage(IFormFile imageFile)
        {

            if (imageFile.Length > 0)
            {

                string uploadeFolder = Path.Combine(_hostEnvironment.WebRootPath);
                string uniqueName = Guid.NewGuid().ToString() + "_" + imageFile.FileName;
                string filePath = Path.Combine(uploadeFolder, uniqueName);

          
                await imageFile.CopyToAsync(new FileStream(filePath, FileMode.Create));

                return filePath;
             
            }

            else {

                return "UnSuccess";
            }
        }

    }
}
