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
        private readonly budgetDBv2Context _context;

        public TransactionDetailService(budgetDBv2Context context)
        {
            _context = context;
        }

        public async Task<List<TransactionDetail>> SelectTranDetail(int tranId)
        {
            var tranDeList = _context.TransactionDetails.Where(td => td.TransactionId == tranId);
            if (tranDeList == null)
            {
                return null;
            }

            return tranDeList.Select(td => new TransactionDetail()
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
            //try
            //{
            //    _context.TransactionDetails.Single(td => td.TransactionId == trande.TransactionId); //check TransactionId ก่อน
            //}
            //catch (Exception e)
            //{
            //    throw e; //ถ้าไม่มี TransactionId นั้น
            //}
            var tranDe = new TransactionDetail() //ถ้ามี ลงมานี่
            {
                Amount = trande.Amount,
                Note = trande.Note,
                TransactionId = trande.TransactionId,
                TypeId = trande.TypeId
            };

            try
            {
                _context.Add(tranDe);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e;
            }
            return tranDe;
        }

        public async Task<TransactionDetail> DeleteTranDetail(int tranid, int trandeId)
        {
            var delTd = _context.TransactionDetails.Single(dTd => dTd.TransactionId == tranid && dTd.TransactionDeId == trandeId);
            if(delTd == null)
            {
                return null;
            }

            try
            {
                _context.Remove(delTd);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e;
            }
            return delTd;
        }

        public async Task<TransactionDetail> ModifyTranDetail(int tranid, int trandeId, TransactionDetail trande)
        {
            var moTd = _context.TransactionDetails.Single(moTd => moTd.TransactionId == tranid && moTd.TransactionDeId == trandeId);

            moTd.Amount = trande.Amount;
            moTd.Note = trande.Note;
            moTd.TypeId = trande.TypeId;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException e)
            {
                throw e; //Not Found & Bad request
            }

            return trande;


        }
    }
}
