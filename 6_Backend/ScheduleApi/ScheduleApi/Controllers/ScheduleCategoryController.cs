using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Controllers
{
    [ApiController]
    [Route("api/schedule/category")]
    public class ScheduleCategoryController : ControllerBase
    {

        private readonly ILogger<ScheduleCategoryController> _logger;

        public ScheduleCategoryController(ILogger<ScheduleCategoryController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public IEnumerable<ScheduleCategory> GetAllCategory()
        {
            return Enumerable.Range(1, 5).Select(index => new ScheduleCategory
            {
                CatCode = 'A',
                Descriptions = "Anniversary"
            })
            .ToArray();
        }

    }
}
