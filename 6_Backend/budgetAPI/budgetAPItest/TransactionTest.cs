using budgetAPI;
using budgetAPI.Controllers;
using budgetAPI.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace budgetAPItest
{
    public class TransactionTest
    {
        public static budgetDBv2Context CreateTestingDatabase(string budgetDB)
        {
            var options = new DbContextOptionsBuilder<budgetDBv2Context>()
                .UseInMemoryDatabase(databaseName: budgetDB)
                .Options;
            var dbContext = new budgetDBv2Context(options);

            dbContext.Seed();

            return dbContext;
        }

        //Reuse Code -> Return Tuple
        public (TransactionsController, budgetDBv2Context) GetTranConSer(string name) //ชื่อแตกต่างกัน
        {
            budgetDBv2Context dbContext = CreateTestingDatabase(name);

            TransactionService tranService = new TransactionService(dbContext);
            TransactionDetailService tranDeService = new TransactionDetailService(dbContext);
            CategoryService categoryService = new CategoryService(dbContext);
            TypeService typeService = new TypeService(dbContext);

            TransactionsController controller = new TransactionsController(tranService, tranDeService, categoryService, typeService);

            return (controller, dbContext);
        }

        //***********************************************************************************************************************************************


        // TRANSACTION TEST
        [Fact(DisplayName = "Get Transaction One Failed")]
        public async Task GetTransaction_F()
        {
            var (controller, dbContext) = GetTranConSer("Get One Tran Failed");
            var response = await controller.GetTransactions(10);
            dbContext.Dispose();
            Assert.Null(response.Result);
        }

        [Fact(DisplayName = "Get Transaction One Success")]
        public async Task GetTransaction_S()
        {
            var (controller, dbContext) = GetTranConSer("Get One Tran Success");
            var response = await controller.GetTransactions(1);
            dbContext.Dispose();
            Assert.Equal(1, response.Value.ElementAt(0).UserId);
        }


        [Fact(DisplayName = "Insert Transaction Success")]
        public async Task PostTransaction_S()
        {
            var (controller, dbContext) = GetTranConSer("Post Tran Success");

            var tran = new Transaction()
            {
                Date = new DateTime(2021-05-08),
                UserId = 1
            };

            var response = await controller.PostTransaction(tran);
            dbContext.Dispose();
            //Assert.Equal(200, ((StatusCodeResult)response.Result).StatusCode);
            Assert.Equal(1, response.Value.UserId);
        }

        [Fact(DisplayName = "Insert Transaction Failed")]
        public async Task PostTransaction_F()
        {
            var (controller, dbContext) = GetTranConSer("Post Tran Failed");

            var tran = new Transaction()
            {
                Date = new DateTime(2021 - 05 - 08),
                UserId = 45
            };

            var response = await controller.PostTransaction(tran);
            dbContext.Dispose();
            Assert.Equal(500, ((StatusCodeResult)response.Result).StatusCode);
            //Assert.Null(response.Result);
        }


        [Fact(DisplayName = "Delete Transaction Success")]
        public async Task DeleteTransaction_S()
        {
            var (controller, dbContext) = GetTranConSer("Delete Tran Success");

            var response = await controller.DeleteTransaction(1);
            dbContext.Dispose();
            Assert.Equal(1, response.Value.TransactionId);
        }

        [Fact(DisplayName = "Delete Transaction Failed")]
        public async Task DeleteTransaction_F()
        {
            var (controller, dbContext) = GetTranConSer("Delete Tran Failed");

            var response = await controller.DeleteTransaction(5);
            dbContext.Dispose();
            Assert.Equal(500, ((StatusCodeResult)response.Result).StatusCode);
        }


        // TRANSACTION DETAIL TEST
        [Fact(DisplayName = "Get TransactionDe One Failed")]
        public async Task GetTransactionDe_F()
        {
            var (controller, dbContext) = GetTranConSer("Get One TranDe Failed");
            var response = await controller.SelectTranDetail(10);
            dbContext.Dispose();
            Assert.Null(response.Result);
        }

        [Fact(DisplayName = "Get TransactionDe One Success")]
        public async Task GetTransactionDe_S()
        {
            var (controller, dbContext) = GetTranConSer("Get One TranDe Success");
            var response = await controller.SelectTranDetail(2);
            dbContext.Dispose();
            Assert.Equal(300, response.Value.ElementAt(0).Amount);
        }


        [Fact(DisplayName = "Insert TransactionDe Success")]
        public async Task PostTransactionDe_S()
        {
            var (controller, dbContext) = GetTranConSer("Post TranDe Success");

            var tranDe = new TransactionDetail()
            {
                Amount = 500,
                Note = "ถูกหวย",
                TransactionId = 2,
                TypeId = 1
            };

            var response = await controller.PostTransactionDe(tranDe);
            dbContext.Dispose();         
            Assert.Equal(500, response.Value.Amount);
        }

        [Fact(DisplayName = "Insert TransactionDe Failed")]
        public async Task PostTransactionDe_F()
        {
            var (controller, dbContext) = GetTranConSer("Post TranDe Failed");

            var tranDe = new TransactionDetail()
            {
                Amount = 500,
                Note = "ถูกหวย",
                TransactionId = 20,
                TypeId = 1
            };

            var response = await controller.PostTransactionDe(tranDe);
            dbContext.Dispose();
            Assert.Equal(500, ((StatusCodeResult)response.Result).StatusCode);
            //Assert.Null(response.Result);
        }


        [Fact(DisplayName = "Delete TransactionDe Success")]
        public async Task DeleteTransactionDe_S()
        {
            var (controller, dbContext) = GetTranConSer("Delete TranDe Success");

            var response = await controller.DeleteTranDe(2,1);
            dbContext.Dispose();
            Assert.Equal(1, response.Value.TransactionDeId);
        }

        [Fact(DisplayName = "Delete TransactionDe Failed")]
        public async Task DeleteTransactionDe_F()
        {
            var (controller, dbContext) = GetTranConSer("Delete TranDe Failed");

            var response = await controller.DeleteTranDe(20, 1);
            dbContext.Dispose();
            Assert.Equal(500, ((StatusCodeResult)response.Result).StatusCode);
        }


        [Fact(DisplayName = "Edit TransactionDe Success")]
        public async Task EditTransactionDe_S()
        {
            var (controller, dbContext) = GetTranConSer("Edit TranDe Success");

            var tranDe = new TransactionDetail()
            {
                Amount = 500,
                Note = "ถูกหวย",
                TypeId = 1
            };

            var response = await controller.ModifyTranDetail(2,1, tranDe);
            dbContext.Dispose();
            Assert.Equal(500, response.Value.Amount);
        }

        [Fact(DisplayName = "Edit TransactionDe Failed")]
        public async Task EditTransactionDe_F()
        {
            var (controller, dbContext) = GetTranConSer("Edit TranDe Failed");

            var tranDe = new TransactionDetail()
            {
                Amount = 500,
                Note = "ถูกหวย",
                TypeId = 1
            };

            var response = await controller.ModifyTranDetail(20, 1, tranDe);
            dbContext.Dispose();
            Assert.Equal(500, ((StatusCodeResult)response.Result).StatusCode);
        }


        // CATEGORY TEST
        [Fact(DisplayName = "Get Category One Failed")]
        public async Task GetCategory_F()
        {
            var (controller, dbContext) = GetTranConSer("Get One Category Failed");
            var response = await controller.GetCatagory();
            dbContext.Dispose();
            Assert.Null(response.Result);
            //Assert.Equal(404, ((StatusCodeResult)response.Result).StatusCode);
        }

        [Fact(DisplayName = "Get Category One Success")]
        public async Task GetCategory_S()
        {
            var (controller, dbContext) = GetTranConSer("Get One Category Success");
            var response = await controller.GetCatagory();
            dbContext.Dispose();
            Assert.Equal("รายรับ", response.Value.ElementAt(0).CategoryName);
        }


        // TYPE TEST
        [Fact(DisplayName = "Get Type One Failed")]
        public async Task GetType_F()
        {
            var (controller, dbContext) = GetTranConSer("Get One Type Failed");
            var response = await controller.GetType();
            dbContext.Dispose();
            Assert.Null(response.Result);
            //Assert.Equal(404, ((StatusCodeResult)response.Result).StatusCode);
        }

        [Fact(DisplayName = "Get Type One Success")]
        public async Task GetType_S()
        {
            var (controller, dbContext) = GetTranConSer("Get One Type Success");
            var response = await controller.GetType();
            dbContext.Dispose();
            Assert.Equal("เงินเดือน", response.Value.ElementAt(0).TypeName);
        }


    }
}
