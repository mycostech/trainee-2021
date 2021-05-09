using System;
using System.Collections.Generic;

#nullable disable

namespace budgetAPI
{
    public partial class Transaction
    {
        public Transaction()
        {
            TransactionDetails = new HashSet<TransactionDetail>();
        }

        public int TransactionId { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }

        public virtual Customer User { get; set; }
        public virtual ICollection<TransactionDetail> TransactionDetails { get; set; }
    }
}
