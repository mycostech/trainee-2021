using budgetAPI.Service.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service
{
    public class TransactionService : ITransactionService
    {
        private readonly budgetDBv2Context _context;
        public TransactionService(budgetDBv2Context context)
        {
            _context = context;
        }

        //Select Transaction
        public async Task<List<Transaction>> SelectTransaction(int userid)
        {
            var tranList = _context.Transactions.Where(t => t.UserId == userid);
         
            if (tranList == null)
            {
                return null;
            }

            return tranList.Select(tl => new Transaction()
            {
                TransactionId = tl.TransactionId,
                Date = tl.Date,
                UserId = tl.UserId
            }).ToList();
        }

        //Insert Transaction
        public async Task<Transaction> InsertTransaction(Transaction tran)
        {
            var t = new Transaction()
            {
                Date = tran.Date,
                UserId = tran.UserId
            };

            try
            {
                _context.Add(t);
                _context.SaveChanges();
            }
            catch(DbUpdateConcurrencyException e)
            {
                throw e;
            }
            return t;
        }

        public async Task<Transaction> DeleteTransaction(int tranid)
        {
            var delTran = _context.Transactions.Single(dt => dt.TransactionId == tranid);

            if(delTran == null)
            {
                return null;
            }

            try
            {
                _context.Remove(delTran);
                _context.SaveChanges();
            }
            catch(DbUpdateConcurrencyException e)
            {
                throw e;
            }
            return delTran;
        }
    }
}
