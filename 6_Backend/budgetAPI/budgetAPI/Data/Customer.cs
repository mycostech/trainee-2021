using System;
using System.Collections.Generic;

#nullable disable

namespace budgetAPI
{
    public partial class Customer
    {
        public Customer()
        {
            Transactions = new HashSet<Transaction>();
        }

        public int UserId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}
