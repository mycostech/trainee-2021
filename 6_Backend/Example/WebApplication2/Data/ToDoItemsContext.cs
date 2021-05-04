using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ToDoApi.Data
{
    public class ToDoItemsContext : DbContext
    {
        public ToDoItemsContext() { }
        public ToDoItemsContext (DbContextOptions<ToDoItemsContext> options)
            : base(options)
        {
        }

        public DbSet<ToDoApi.Data.TodoItems> TodoItems { get; set; }
    }
}
