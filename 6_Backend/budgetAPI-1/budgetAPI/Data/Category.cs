using System;
using System.Collections.Generic;

#nullable disable

namespace budgetAPI
{
    public partial class Category
    {
        public Category()
        {
            Types = new HashSet<Type>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<Type> Types { get; set; }
    }
}
