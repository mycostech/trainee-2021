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
    public class ScheduleController : ControllerBase
    {

        ScheduleDBContext db = new ScheduleDBContext();

        private readonly ILogger<ScheduleController> _logger;

        public ScheduleController(ILogger<ScheduleController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public IEnumerable<Schedule> GetAllSchedules()
        {
            return db.Schedules.OrderBy(d => d.UserId)
            .ToArray();
        }
        
        [HttpGet("{userId}")]
        public IEnumerable<Schedule> GetSchedules(int userId)
        {
            return db.Schedules.Where(e => e.UserId == userId || e.UserId == null)
            .ToArray();
        }

        [HttpPost("add")]
        public void AddSchedule([FromBody] Schedule value)
        {
            db.Schedules.Add(value);
            
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

        [HttpPut("{schId}/update")]
        public void UpdateSchdule(int schId, [FromBody] Schedule sch)
        {
            var s = db.Schedules.SingleOrDefault(e => e.SchId == schId);
            if (sch.Title == null) { s.Title = s.Title; } else { s.Title = sch.Title; }
            try
            {
                db.SaveChanges();
                Console.WriteLine("Update Schedule Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        [HttpDelete("{schId}/delete")]
        public void DeleteSchedule(int schId)
        {

            var sch = db.Schedules.Where(e => e.SchId == schId);

            var schDetail = db.ScheduleDetails.Where(e => e.SchId == schId);
            db.ScheduleDetails.RemoveRange(schDetail);

            db.Schedules.RemoveRange(sch);  

            try
            {
                db.SaveChanges();
                Console.WriteLine("Delete Schedule Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        [HttpDelete("{userId}/delete")]
        public void DeleteAllSchedule(int userId)
        {
            var sch = db.Schedules.Where(e => e.UserId == userId);

            foreach (Schedule s in sch.ToList())
            {
                var schDetail = db.ScheduleDetails.Where(e => e.SchId == s.SchId);
                db.ScheduleDetails.RemoveRange(schDetail);
            }

            db.Schedules.RemoveRange(sch);

            try
            {
                db.SaveChanges();
                Console.WriteLine("Delete Schedules Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
