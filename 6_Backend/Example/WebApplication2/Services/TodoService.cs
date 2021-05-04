using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Contract;
using Microsoft.EntityFrameworkCore;
using ToDoApi.Data;

namespace Api.Service
{
    public class TodoService : ITodoService
    {

        private readonly ToDoItemsContext _context;
        public TodoService(ToDoItemsContext context)
        {
            _context = context;
        }

        public async Task<List<TodoItemContract>> GetTodoItems()
        {
            var list= await _context.TodoItems.ToListAsync();
            return list.Select(a => new TodoItemContract()
            {
                id = a.Id,
                name = a.Name
            }).ToList() ;
        }

        public async Task<TodoItemContract> GetTodoItem(int id)
        {
            var todoItems = await _context.TodoItems.FindAsync(id);

            if (todoItems == null)
            {
                return null;
            }

            return new TodoItemContract() { id = todoItems.Id, name = todoItems.Name };
        }

        public async Task<TodoItemContract> UpdateItem(int id, TodoItemContract contract)
        {
            var todo = _context.TodoItems.First(a => a.Id == id);
            todo.Id = id;
            todo.Name = contract.name;
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
        public async Task<TodoItemContract> CreateItem(TodoItemContract contract)
        {
            var todo = new TodoItems()
            { 
                Name = contract.name
            }; 
            try
            {
                _context.Add(todo);
                await _context.SaveChangesAsync(); 
            }
            catch (DbUpdateConcurrencyException err)
            {
                throw err;
            }
            return contract;
        }

        public async Task<TodoItemContract> DeleteItem(int id)
        {
            var todo = _context.TodoItems.Find(id); 
            try
            {
                _context.Remove(todo);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException err)
            {
                throw err;
            }
            return new TodoItemContract()
            {
                id = todo.Id,
                name = todo.Name
            };
        }
    }
}
