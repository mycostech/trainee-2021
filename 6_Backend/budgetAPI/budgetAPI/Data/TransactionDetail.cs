using System;
using System.Collections.Generic;

#nullable disable

namespace budgetAPI
{
    public partial class TransactionDetail
    {
        public int TransactionDeId { get; set; }
        public int Amount { get; set; }
        public string Note { get; set; }
        public int TransactionId { get; set; }
        public int TypeId { get; set; }

        public virtual Transaction Transaction { get; set; }
        public virtual Type Type { get; set; }
    }
}
