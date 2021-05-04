using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Contract;
using Api.Service;
using Microsoft.AspNetCore.Mvc;

namespace ToDoApi
{
    [Route("api/todo")]
    [ApiController]
    public class TodoItemsController : ControllerBase
    { 
        private readonly ITodoService _todoService;

        public TodoItemsController(ITodoService todoService) 
        { 
            _todoService = todoService ;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItemContract>>> GetTodoItems()
        {
            return await _todoService.GetTodoItems();
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItemContract>> GetTodoItem(int id)
        {
             var todoItems = await _todoService.GetTodoItem(id); 

            if (todoItems == null)
            {
                return NotFound();
            }

            return todoItems;
        }

        // PUT: api/TodoItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ActionResult<TodoItemContract>> PutTodoItems(int id,[FromBody] TodoItemContract todoItems)
        { 
            return await _todoService.UpdateItem(id, todoItems); 
        }

        // POST: api/TodoItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TodoItemContract>> PostTodoItem([FromBody]TodoItemContract todoItem)
        { 
           return  await _todoService.CreateItem(todoItem); 
        }

        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TodoItemContract>> DeleteTodoItem(int id)
        { 
            return await _todoService.DeleteItem(id);
        } 
    }
}
