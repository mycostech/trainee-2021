using budgetAPI;
using budgetAPI.Controllers;
using budgetAPI.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace budgetAPItest
{
    public class CustomerTest
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

        //----------------------------- ตัวอย่างก่อน Reuse Code ------------------------------
        //[Fact(DisplayName = "Get One Customer")]
        //public async Task GetOneCustomer()
        //{
        //    //var dbContext = CreateTestingDatabase(nameof(GetOneCustomer));

        //    //var userService = new UserService(dbContext);
        //    //var controller = new CustomersController(userService);

        //    var response = await controller.GetCustomers();
        //    dbContext.Dispose();
        //    Assert.Equal("Yeo", response.Value.ElementAt(0).FirstName);
        //}
        //-------------------------------------------------------------------------------


        //Reuse Code -> Return Tuple
        public (CustomersController, budgetDBv2Context) GetCusConSer(string name) //ชื่อแตกต่างกัน
        {
            budgetDBv2Context dbContext = CreateTestingDatabase(name);

            UserService userService = new UserService(dbContext);
            CustomersController controller = new CustomersController(userService);

            return (controller, dbContext);
        }

        //***********************************************************************************************************************************************


        // CUSTOMER TEST

        [Fact(DisplayName = "Get One User Success")]
        public async Task GetOneCustomer_S()
        {
            var (controller, dbContext) = GetCusConSer("Get One Success");
            var response = await controller.GetAllUser();
            dbContext.Dispose();
            Assert.Equal("Yeo", response.Value.ElementAt(0).Firstname);
        }

        //[Fact(DisplayName = "Get One User Failed")]
        //public async Task GetOneCustomer_F()
        //{
        //    var (controller, dbContext) = GetCusConSer("Get One Fail");
        //    var response = await controller.GetAllUser();
        //    dbContext.Dispose();
        //    Assert.IsType<NotFoundResult>(response.Result);
        //    //Assert.Equal(null, response.Value.ElementAt(1).Firstname);
        //}


        [Fact(DisplayName = "Login Success")]
        public async Task GetLogin_S()
        {
            var (controller, dbContext) = GetCusConSer("Get Login Success");
            var response = await controller.GetLogin("yeolowbatt@gmail.com","12345");
            dbContext.Dispose();
            Assert.Equal("Yeo", response.Value.Firstname);
        }

        [Fact(DisplayName = "Login Failed")]
        public async Task GetLogin_F()
        {
            var (controller, dbContext) = GetCusConSer("Get Login Failed");
            var response = await controller.GetLogin("yeolowbatt@gmail.com", "12345678");
            dbContext.Dispose();
            Assert.IsType<NotFoundResult>(response.Result);
        }


        [Fact(DisplayName = "Register Success")]
        public async Task PostRegister_S()
        {
            var (controller, dbContext) = GetCusConSer("Get Register Success");

            var newUser = new Customer()
            {
                Firstname = "Namu",
                Lastname = "Cat",
                Email = "namu@gmail.com",
                Username = "namuya",
                Password = "12345"
            };

            var response = await controller.PostUser(newUser);
            dbContext.Dispose();
            Assert.Equal("Namu", response.Value.Firstname);
        }

        [Fact(DisplayName = "Register Failed")]
        public async Task PostRegister_F()
        {
            var (controller, dbContext) = GetCusConSer("Get Register Failed");

            var newUser = new Customer()
            {
                Firstname = "Namu",
                Lastname = "Cat",
                Email = "yeolowbatt@gmail.com", //dup
                Username = "namuya",
                Password = "12345"
            };

            var response = await controller.PostUser(newUser);
            dbContext.Dispose();
            //Assert.Equal(500, ((StatusCodeResult)response.Result).StatusCode);
            Assert.Null(response.Result);
        }

    }
}
