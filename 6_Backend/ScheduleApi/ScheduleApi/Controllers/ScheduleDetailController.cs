using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Controllers
{
    [ApiController]
    [Route("api/schedule")]
    public class ScheduleDetailController : ControllerBase
    {
        ScheduleDBContext db = new ScheduleDBContext();

        private readonly ILogger<ScheduleDetailController> _logger;

        public ScheduleDetailController(ILogger<ScheduleDetailController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet("detail")]
        public IEnumerable<ScheduleDetail> GetAllScheduleDetail()
        {
            return db.ScheduleDetails  
            .ToArray();
        }
        
        [HttpGet("{schId}/detail")]
        public IEnumerable<ScheduleDetail> GetScheduleDetail(int schId)
        {
            return db.ScheduleDetails.Where(e => e.SchId == schId)
            .ToArray();
        }
        /*
        [HttpPost("add")]
        public void AddScheduleDetail([FromBody] ScheduleDetail value)
        {
            db.ScheduleDetails.Add(value);
            try
            {
                db.SaveChanges();
                Console.WriteLine("Add Schedule Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
        */
        [HttpPut("{schId}/detail/update")]
        public void UpdateSchduleDetail(int schId, [FromBody] ScheduleDetail schDetail)
        {
            var s = db.ScheduleDetails.SingleOrDefault(e => e.SchId == schId);

            if (schDetail.SchDate == null) { s.SchDate = s.SchDate; } else { s.SchDate = schDetail.SchDate; };
            if (schDetail.BeginTime == null) { s.BeginTime = s.BeginTime; } else { s.BeginTime = schDetail.BeginTime; };
            if (schDetail.EndTime == null) { s.EndTime = s.EndTime; } else { s.EndTime = schDetail.EndTime; };
            if (schDetail.Note == null) { s.Note = s.Note; } else { s.Note = schDetail.Note; };
            if (schDetail.Category == null) { s.Category = s.Category; } else { s.Category = schDetail.Category; };

            try
            {
                db.SaveChanges();
                Console.WriteLine("Update Schedule Detail Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        /*[HttpDelete("{schId}/delete")]
        public void DeleteScheduleDetail(int schId)
        {
            var schDetail = db.ScheduleDetails.Where(e => e.SchId == schId);
            db.ScheduleDetails.RemoveRange(schDetail);
        }*/

    }
}
