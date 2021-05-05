using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service.Interface
{
    public interface ITransactionService
    {
        public Task<List<Transaction>> SelectTransaction(int userid);
        public Task<Transaction> InsertTransaction(Transaction tran);
        public Task<Transaction> DeleteTransaction(int userid, int tranid);
    }
}
