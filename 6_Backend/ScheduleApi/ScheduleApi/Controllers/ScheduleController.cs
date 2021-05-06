using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ScheduleApi.Services;

namespace ScheduleApi.Controllers
{
    [ApiController]
    [Route("api/")]
    public class ScheduleController : ControllerBase
    {
        
        //ScheduleDBContext db = new ScheduleDBContext();

        private readonly IScheduleService _context;

        public ScheduleController(IScheduleService context)
        {
            _context = context;
        }

        [HttpGet("schedules")]
        public async Task<ActionResult<List<Schedule>>> SelectAllSchedule()
        {
            return await _context.SelectAllSchedule();
        }

        [HttpGet("{userId}/schedules")]
        public async Task<ActionResult<List<Schedule>>> SelectUserSchedule(int userId)
        {
            return await _context.SelectUserSchedule(userId);
        }

        [HttpGet("schedule/{schId}")]
        public async Task<ActionResult<Schedule>> SelectSchedule(int schId)
        {
            return await _context.SelectSchedule(schId);
        }

        [HttpPost("schedules/add")]
        public async Task<ActionResult<Schedule>> AddSchedule(Schedule schedule)
        {
            return await _context.AddSchedule(schedule);
        }

        [HttpPost("{userId}/schedules/add")]
        public async Task<ActionResult<Schedule>> AddUserSchedule(int userId, Schedule schedule)
        {
            return await _context.AddUserSchedule(userId, schedule);
        }

        [HttpPut("schedules/{schId}/update")]
        public async Task<ActionResult<Schedule>> UpdateSchedule(int schId, Schedule schedule)
        {
            return await _context.UpdateSchedule(schId, schedule);
        }

        [HttpDelete("{schId}/schedules/add")]
        public async Task<ActionResult<Schedule>> DeleteSchedule(int schId)
        {
            return await _context.DeleteSchedule(schId);
        }

        [HttpDelete("{userId}/schedules/delete")]
        public async Task<ActionResult<List<Schedule>>> DeleteAllUserSchedule(int userId)
        {
            return await _context.DeleteAllUserSchedule(userId);
        }
        /*
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
        }*/
    }
}
