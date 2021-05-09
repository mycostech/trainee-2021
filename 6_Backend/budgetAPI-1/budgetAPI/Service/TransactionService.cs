using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace budgetAPI.Service.Interface
{
    public class TransactionService : ITransactionService
    {
        private readonly budgetDBContext _context = new budgetDBContext();

        public async Task<List<Transaction>> SelectTransaction(int userid)
        {

            var tranList = _context.Transactions.Where(t => t.UserId == userid);

            if (tranList == null)
            {
                return null;
            }
            return tranList.Select(t => new Transaction()
            {
                TransactionId = t.TransactionId,
                Date = t.Date,
                UserId = t.UserId
            }).ToList();
        }

        public async Task<Transaction> InsertTransaction(Transaction tran)
        {
            var transac = new Transaction()
            {
                TransactionId = tran.TransactionId,
                Date = tran.Date,
                UserId = tran.UserId
            };

            try
            {
                _context.Add(transac);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e;
            }
            return tran;
        }

        public async Task<Transaction> DeleteTransaction(int userid, int tranid)
        {
            var deltran = _context.Transactions.Where(d => d.UserId == userid && d.TransactionId == tranid).FirstOrDefault();
            //var deltran = _context.Transactions.Find(tranid);

            try
            {
                _context.Remove(deltran);
                _context.SaveChanges();          
                
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e;
            }

            return new Transaction()
            {
                TransactionId = deltran.TransactionId,
                Date = deltran.Date,
                UserId = deltran.UserId

            };
        }

    }
}
