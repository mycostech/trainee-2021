using Microsoft.EntityFrameworkCore;
using NoteApi.Data;
using System;
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
        public async Task<Note> CreateItem(Note data)
        {
            var note = new Note()
            {
                Id = data.Id,
                TitleNote = data.TitleNote,
                DescriptionNote = data.DescriptionNote,
                DateNote = data.DateNote
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
            return data;
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
            return note;
        }

        public async Task<List<Note>> GetNoteItem()
        {
            return await _context.Notes.ToListAsync();
        }

        public async Task<Note> UpdateItem(int id, Note data)
        {
            var note = _context.Notes.First(a => a.Id == id);
            note.Id = id;
            note.TitleNote = data.TitleNote;
            note.DescriptionNote = data.DescriptionNote;
            note.DateNote = DateTime.Now;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException err)
            {
                throw err;
            }
            return data;
        }
    }
}
