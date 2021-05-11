using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using diaryApp_backend;
using diaryApp_backend.Services.Interfaces;
using diaryApp_backend.Data;

namespace diaryApp_backend.Controllers
{
    [Route("api/event")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;
        private diaryAppContext dbContext;

        // Constructor
        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        // GET: Event of uid
        [HttpGet("{uid}")]
        public async Task<ActionResult<IEnumerable<EventInfo>>> GetEvents(string uid) {

            return await _eventService.GetEvents(uid);
        }

        // GET: Event Detail od eventID
        [HttpGet("detail/{id}")]
        public async Task<ActionResult<EventInfo>> GetEventDetail(int id) {

            var task = await _eventService.GetEventDetail(id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        // GET: Search Event by event name
        [HttpGet("search/{name}")]
        public async Task<ActionResult<IEnumerable<EventInfo>>> SearchByName(string name) {

            return await _eventService.SearchByEventName(name);
        }


        // POST: Add Event
        [HttpPost("add")]
        public async Task<ActionResult<Events>> AddEvent([FromBody]AddEvent newEvent) {


            try
            {
                var addEv = await _eventService.addEvent(newEvent);

                if (addEv == null)
                {
                    return BadRequest();
                }
                else
                {
                    return addEv;
                }

            }

            catch(Exception) {
                return StatusCode(500);
            }
            
        }


        // PUT: edit Event
        [HttpPut("edit/{id}")]
        public async Task<ActionResult<EditEvent>> ModifyEvent(int id,[FromBody]EditEvent edit_event) {

            try
            {
                var editEv = await _eventService.editEvent(id, edit_event);

                if (editEv == null)
                {
                    return BadRequest();
                }
                else
                {
                    return editEv;
                }
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        // DELETE: Delete Event
        [HttpDelete("{id}")]
        public async Task<ActionResult<Events>> DelEvent(int id) {


            try {
                var delEv = await _eventService.delEvent(id);
                return delEv;
            }
            catch (Exception) {
                return NotFound();
            }

        }


        
    }
}
