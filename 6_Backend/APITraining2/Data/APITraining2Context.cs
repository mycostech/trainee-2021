using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace APITraining2.Data
{
    public class APITraining2Context : DbContext
    {
        public APITraining2Context (DbContextOptions<APITraining2Context> options)
            : base(options)
        {
        }

        public DbSet<APITraining2.Data.TodoItems> TodoItems { get; set; }
    }
}
