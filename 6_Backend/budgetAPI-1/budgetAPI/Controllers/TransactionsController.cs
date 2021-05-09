using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using budgetAPI;
using budgetAPI.Service.Interface;
//using budgetAPI.budgetDBContext;

namespace budgetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionService _tranService;
        private readonly ITransactionDetailService _tranDeService;
        private readonly ICatagoryService _catagoryService;
        private readonly ITypeService _typeService;

        public TransactionsController(ITransactionService tranService, ITransactionDetailService tranDeService, ICatagoryService catagoryService, ITypeService typeService)
        {
            _tranService = tranService;
            _tranDeService = tranDeService;
            _catagoryService = catagoryService;
            _typeService = typeService;
        }


        // GET: api/Transactions/5
        [HttpGet("{userid}")]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetTransaction(int userid)
        {
            return await _tranService.SelectTransaction(userid);

        }

        // POST: api/Transactions
        [HttpPost]
        public async Task<ActionResult<Transaction>> PostTransaction([FromBody] Transaction tran)
        {
            return await _tranService.InsertTransaction(tran);
        }

        // DELETE: api/Transactions/5/2
        [HttpDelete("{userid}/{tranid}")]
        public async Task<ActionResult<Transaction>> DeleteTransaction(int userid, int tranid)
        {
            return await _tranService.DeleteTransaction(userid, tranid);
        }

        // GET: api/TransactionsDetail/5
        [HttpGet("TransactionDetail/{tranid}")]
        public async Task<ActionResult<IEnumerable<TransactionDetail>>> GetTransactionDetail(int tranid)
        {
            return await _tranDeService.SelectTranDetail(tranid);

        }

        // POST: api/TransactionsDetail
        [HttpPost("TransactionDetail")]
        public async Task<ActionResult<TransactionDetail>> PostTransactionDetail([FromBody] TransactionDetail trande)
        {
            return await _tranDeService.InsertTranDetail(trande);
        }

        // DELETE: api/TransactionsDetail/5/2
        //[ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpDelete("TransactionDetail/{tranid}/{trandeId}")]
        public async Task<ActionResult<TransactionDetail>> DeleteTranDetail(int tranid, int trandeId)
        {
            //if (_tranDeService.DeleteTranDetail(tranid, trandeId) == null)
            //{
            //    return NotFound();
            //}
            return await _tranDeService.DeleteTranDetail(tranid, trandeId);
        } 

        // PUT: api/TransactionsDetail/3/5
        [HttpPut("TransactionDetail/{tranid}/{trandeId}")]
        public async Task<ActionResult<TransactionDetail>> ModifyTranDetail(int tranid, int trandeId, [FromBody] TransactionDetail trande)
        {
            return await _tranDeService.ModifyTranDetail(tranid, trandeId, trande);
        }

        // GET: api/Catagory
        [HttpGet("Catagory")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCatagory()
        {
            return await _catagoryService.SelectCategory();
        }

        // GET: api/Type
        [HttpGet("Type")]
        public async Task<ActionResult<IEnumerable<Type>>> GetType()
        {
            return await _typeService.SelectType();
        }
    }
}
