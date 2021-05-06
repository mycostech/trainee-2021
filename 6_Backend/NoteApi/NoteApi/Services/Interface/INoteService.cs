using NoteApi.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NoteApi.Services
{
    public interface INoteService
    {
        public Task<List<Note>> GetNoteItem();
        public Task<Note> GetNoteItems(int id);
        public Task<Note> UpdateItem(int id, Note contract);
        public Task<Note> CreateItem(Note contract);
        public Task<Note> DeleteItem(int id);
    }
}
