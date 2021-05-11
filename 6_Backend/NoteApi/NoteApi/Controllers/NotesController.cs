using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NoteApi.Data;
using NoteApi.Services;

namespace NoteApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INoteService _context;

        public NotesController(INoteService context)
        {
            _context = context;
        }

        // GET: api/Notes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Note>>> GetNoteItems()
        {
            return await _context.GetNoteItems();
        }

        // GET: api/Notes/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Note>> GetNoteItem(int id)
        {
            var noteItem = await _context.GetNoteItem(id);

            if (noteItem == null)
            {
                return NotFound();
            }

            return noteItem;
        }

        // PUT: api/Notes/{id}
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<Note>> UpdateItem(int id, Note note)
        {
            return await _context.UpdateItem(id,note);
        }

        // POST: api/Notes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Note>> CreateItem(Note note)
        {
            return await _context.CreateItem(note);
        }

        // DELETE: api/Notes/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Note>> DeleteItem(int id)
        {
            return await _context.DeleteItem(id);
        }
    }
}
