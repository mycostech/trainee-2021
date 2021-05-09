using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using budgetAPI;
using budgetAPI.Service.Interface;
//using budgetAPI.budgetDBv2Context;

namespace budgetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionService _tranService;
        private readonly ITransactionDetailService _tranDeService;
        private readonly ICategoryService _categoryService;
        private readonly ITypeService _typeService;
        public TransactionsController(ITransactionService tranService, ITransactionDetailService tranDeService, ICategoryService categoryService, ITypeService typeService)
        {
            _tranService = tranService;
            _tranDeService = tranDeService;
            _categoryService = categoryService;
            _typeService = typeService;
        }

        // GET: api/Transactions/1
        [HttpGet("{userid}")]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetTransactions(int userid)
        {
            return await _tranService.SelectTransaction(userid); //ไม่เจอ return null
        }

        // POST: api/Transaction
        [HttpPost]
        public async Task<ActionResult<Transaction>> PostTransaction([FromBody] Transaction tran)
        {
            try
            {
                return await _tranService.InsertTransaction(tran);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            
        }

        // DELETE: api/Transactions/1
        [HttpDelete("{tranid}")]
        public async Task<ActionResult<Transaction>> DeleteTransaction(int tranid)
        {
            try
            {
                return await _tranService.DeleteTransaction(tranid);
            }
            catch
            {
                return StatusCode(500);
            }
            
        }

        //************************************************************************************************

        // GET: api/TransactionsDetail
        [HttpGet("TransactionDetail/{trandeId}")]
        public async Task<ActionResult<IEnumerable<TransactionDetail>>> SelectTranDetail(int trandeId)
        {
            return await _tranDeService.SelectTranDetail(trandeId); //ไม่เจอ return null
        }

        // POST: api/TransactionsDetail/1
        [HttpPost("TransactionDetail")]
        public async Task<ActionResult<TransactionDetail>> PostTransactionDe([FromBody] TransactionDetail trande)
        {
            //return await _tranDeService.InsertTranDetail(trande);
            try
            {
                return await _tranDeService.InsertTranDetail(trande);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }

        }

        // DELETE: api/Transactions/1/2
        [HttpDelete("{tranid}/{trandeId}")]
        public async Task<ActionResult<TransactionDetail>> DeleteTranDe(int tranid, int trandeId)
        {
            try
            {
                return await _tranDeService.DeleteTranDetail(tranid, trandeId);
            }
            catch
            {
                return StatusCode(500);
            }

        }

        // PUT: api/TransactionsDetail/3/5
        [HttpPut("TransactionDetail/{tranid}/{trandeId}")]
        public async Task<ActionResult<TransactionDetail>> ModifyTranDetail(int tranid, int trandeId, [FromBody] TransactionDetail trande)
        {

            try
            {
                return await _tranDeService.ModifyTranDetail(tranid, trandeId, trande);
            }
            catch
            {
                return StatusCode(500);
            }
           
        }

        //************************************************************************************************

        // GET: api/Catagory
        [HttpGet("Catagory")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCatagory()
        {
            var res = await _categoryService.SelectCategory();
            if (res == null)
            {
                return null;
            }
            return res;
        }

        //************************************************************************************************

        // GET: api/Type
        [HttpGet("Type")]
        public async Task<ActionResult<IEnumerable<Type>>> GetType()
        {
            var res = await _typeService.SelectType();
            if (res == null)
            {
                return null;
            }
            return res;
        }

    }
}
