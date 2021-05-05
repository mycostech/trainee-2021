using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service.Interface
{
    public interface ITransactionDetailService
    {
        public Task<List<TransactionDetail>> SelectTranDetail(int tranid);
        public Task<TransactionDetail> InsertTranDetail(TransactionDetail trande);
        public Task<TransactionDetail> DeleteTranDetail(int tranid, int trandeId);
        public Task<TransactionDetail> ModifyTranDetail(int tranid, int trandeId, TransactionDetail trande);
    }
}
