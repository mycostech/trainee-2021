using Microsoft.EntityFrameworkCore;
using NoteApi.Data;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace NoteApi.Services
{
    public class NoteService : INoteService
    {

        private readonly noteDBContext _context;
        public NoteService(noteDBContext context)
        {
            _context = context;
        }
        public async Task<Note> CreateItem(Note contract)
        {
            var note = new Note()
            {
                Id = contract.Id,
                TitleNote = contract.TitleNote,
                DescriptionNote = contract.DescriptionNote,
                DateNote = contract.DateNote
            };
            try
            {
                _context.Add(note);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException err)
            {
                throw err;
            }
            return contract;
        }

        public async Task<Note> DeleteItem(int id)
        {
            var note = await _context.Notes.FindAsync(id);
            if (note == null)
            {
                return null;
            }

            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();

            return null;
        }

        public async Task<Note> GetNoteItems(int id)
        {
            var note = await _context.Notes.FindAsync(id);

            if (note == null)
            {
                return null;
            }
            return new Note() { Id = note.Id, TitleNote = note.TitleNote, DescriptionNote = note.DescriptionNote, DateNote = note.DateNote };
        }

        public async Task<List<Note>> GetNoteItem()
        {
            return await _context.Notes.ToListAsync();
        }

        public async Task<Note> UpdateItem(int id, Note contract)
        {
            var note = _context.Notes.First(a => a.Id == id);
            note.Id = id;
            note.TitleNote = contract.TitleNote;
            note.DescriptionNote = contract.DescriptionNote;
            note.DateNote = contract.DateNote;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException err)
            {
                throw err;
            }
            return contract;
        }
    }
}
