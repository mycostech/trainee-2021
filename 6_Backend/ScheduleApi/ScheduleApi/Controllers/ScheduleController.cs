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

        private readonly ILogger<ScheduleController> _logger;

        public ScheduleController(ILogger<ScheduleController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public IEnumerable<Schedule> GetAllSchedules()
        {
            return Enumerable.Range(1, 4).Select(index => new Schedule
            {
                SchId = 10010000,
                Title = "My Birthday",
                UserId = 1001,
                SchDate = new DateTime(2000,4,27),
                BeginTime = new TimeSpan(0,0,0),
                EndTime = new TimeSpan(0, 0, 0),
                Note = null,
                Category = 'B'
            })
            .ToArray();
        }
        
        [HttpGet("{userId}/schedules")]
        public IEnumerable<Schedule> GetSchedules(int userId)
        {
            return Enumerable.Range(1, 1).Select(index => new Schedule
            {
                SchId = 10010000,
                Title = "My Birthday",
                UserId = userId,
                SchDate = new DateTime(2000, 4, 27),
                BeginTime = new TimeSpan(0, 0, 0),
                EndTime = new TimeSpan(0, 0, 0),
                Note = null,
                Category = 'B'
            })
            .ToArray();
        }

        [HttpPost]
        public void AddSchedule([FromBody] string value)
        {
        }

        [HttpPut("{schId}")]
        public void UpdateSchdule(int schId, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{schId}/delete")]
        public void DeleteSchedule(int schId)
        {
        }

        [HttpDelete("{userId}/delete")]
        public void DeleteAllSchedule(int userId)
        {
        }
    }
}
