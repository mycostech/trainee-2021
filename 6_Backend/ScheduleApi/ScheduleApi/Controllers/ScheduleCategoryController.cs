using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ScheduleApi.Services;
using Microsoft.EntityFrameworkCore;

namespace ScheduleApi.Controllers
{
    [ApiController]
    [Route("api/schedules/category")]
    public class ScheduleCategoryController : ControllerBase
    {

        //ScheduleDBContext db = new ScheduleDBContext();

        /*private readonly ILogger<ScheduleCategoryController> _logger;

        public ScheduleCategoryController(ILogger<ScheduleCategoryController> logger)
        {
            _logger = logger;
        }*/

        private readonly IScheduleCategoryService _context;

        public ScheduleCategoryController(IScheduleCategoryService context)
        {
            _context = context;
        }

        /*[HttpGet]
        public IEnumerable<ScheduleCategory> GetAllCategory()
        {
            return db.ScheduleCategories
            .ToArray();
        }*/

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ScheduleCategoryContract>>> SelectAllCategory()
        {

            return await _context.SelectAllCategory();

        }

    }
}
