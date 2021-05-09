using System;
using System.Collections.Generic;

#nullable disable

namespace budgetAPI
{
    public partial class Type
    {
        public Type()
        {
            TransactionDetails = new HashSet<TransactionDetail>();
        }

        public int TypeId { get; set; }
        public string TypeName { get; set; }
        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<TransactionDetail> TransactionDetails { get; set; }
    }
}
