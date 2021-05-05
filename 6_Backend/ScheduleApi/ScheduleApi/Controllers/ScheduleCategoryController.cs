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

        ScheduleDBContext db = new ScheduleDBContext();

        private readonly ILogger<ScheduleCategoryController> _logger;

        public ScheduleCategoryController(ILogger<ScheduleCategoryController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public IEnumerable<ScheduleCategory> GetAllCategory()
        {
            return db.ScheduleCategories
            .ToArray();
        }

    }
}
