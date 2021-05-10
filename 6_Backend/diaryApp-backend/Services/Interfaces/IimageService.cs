using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace diaryApp_backend.Services.Interfaces
{
    public interface IimageService
    {
        public Task<string> UploadImage(IFormFile imageFile);
       
    }
}
