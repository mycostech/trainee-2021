using Api.Contract;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Service
{
    public interface ITodoService
    {
        public Task<List<TodoItemContract>> GetTodoItems();
        public Task<TodoItemContract> GetTodoItem(int id);
        public Task<TodoItemContract> UpdateItem(int id, TodoItemContract contract); 
        public Task<TodoItemContract> CreateItem(TodoItemContract contract);
        public Task<TodoItemContract> DeleteItem(int id);
    }
}
