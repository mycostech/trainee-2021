﻿using NoteApi.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NoteApi.Services
{
    public interface INoteService
    {
        public Task<List<Note>> GetNoteItems();
        public Task<Note> GetNoteItem(int id);
        public Task<Note> UpdateItem(int id, Note data);
        public Task<Note> CreateItem(Note data);
        public Task<Note> DeleteItem(int id);
    }
}
