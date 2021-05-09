using budgetAPI.Service.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service
{
    public class TransactionDetailService : ITransactionDetailService
    {
        private readonly budgetDBContext _contaxt = new budgetDBContext();
        public async Task<List<TransactionDetail>> SelectTranDetail(int tranid)
        {
            var trandeList = _contaxt.TransactionDetails.Where(td => td.TransactionId == tranid);

            if (trandeList == null)
            {
                return null;
            }
            return trandeList.Select(td => new TransactionDetail()
            {
                TransactionId = td.TransactionId,
                TransactionDeId = td.TransactionDeId,
                Amount = td.Amount,
                Note = td.Note,
                TypeId = td.TypeId
            }).ToList();
        }

        public async Task<TransactionDetail> InsertTranDetail(TransactionDetail trande)
        {
            var tranDe = new TransactionDetail()
            {
                Amount = trande.Amount,
                Note = trande.Note,
                TransactionId = trande.TransactionId,
                TypeId = trande.TypeId
            };

            try
            {
                _contaxt.Add(tranDe);
                _contaxt.SaveChanges();
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e;
            }
            return trande;
        }

        public async Task<TransactionDetail> DeleteTranDetail(int tranid, int trandeId)
        {
            var deltranDe = _contaxt.TransactionDetails.Where(dt => dt.TransactionId == tranid && dt.TransactionDeId == trandeId).FirstOrDefault();
            try
            {
                _contaxt.Remove(deltranDe);
                _contaxt.SaveChanges();
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e;
            }

            return new TransactionDetail()
            {
                Amount = deltranDe.Amount,
                Note = deltranDe.Note,
                TransactionId = deltranDe.TransactionId,
                TypeId = deltranDe.TypeId,
                TransactionDeId = deltranDe.TransactionDeId
            };
        }

        public async Task<TransactionDetail> ModifyTranDetail(int tranid, int trandeId, TransactionDetail trande)
        {
            var motranDe = _contaxt.TransactionDetails.Where(mtd => mtd.TransactionId == tranid && mtd.TransactionDeId == trandeId).FirstOrDefault();
            motranDe.Amount = trande.Amount;
            motranDe.Note = trande.Note;

            try
            {
                _contaxt.SaveChanges();
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e;
            }

            return trande;
        }
    }
}
