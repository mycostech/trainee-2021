
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace AutomatedTest
{
    public class testBudget_1
    {
        private IWebDriver _driver = new ChromeDriver();
        public string API = "http://localhost:3000";

        //[Fact]
        //public void EnterInformation()
        //{
        //    Thread.Sleep(3000);
        //    _driver.Manage().Window.Maximize();
        //    Thread.Sleep(5000);
        //    _driver.Url = "https://www.google.com/";
        //    Thread.Sleep(2000);
        //    _driver.FindElement(By.XPath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")).Click();
        //    _driver.FindElement(By.XPath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")).SendKeys("test");
        //    Thread.Sleep(2000);
        //    Console.WriteLine("Test passed");
        //}

        [Fact]
        public void PostTransaction_S()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(5000);
            _driver.Url = API + "/api/Transactions"; 
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("/html/body/div/div/form/div/input")).SendKeys("05-20-2021");
            _driver.FindElement(By.XPath("/html/body/div/div/form/button")).Click();
            Thread.Sleep(2000);
            Assert.Equal(API + "/api/Transactions", _driver.Url);
            Console.WriteLine("Test passed");
        }

        //[Fact]
        //public void PostTransaction_F()
        //{
        //    Thread.Sleep(3000);
        //    _driver.Manage().Window.Maximize();
        //    Thread.Sleep(5000);
        //    _driver.Url = API + "/api/Transactions";
        //    Thread.Sleep(2000);
        //    _driver.FindElement(By.XPath("/html/body/div/div/form/div/input")).SendKeys("05-20-20221");
        //    _driver.FindElement(By.XPath("/html/body/div/div/form/button")).Click();
        //    Thread.Sleep(2000);
        //    //Assert.Equal(_driver.SwitchTo().Alert());
        //    Assert.Equal(API + "/api/Transactions", _driver.Url);
        //    //Assert.Equal(OpenQA.Selenium.UnhandledAlertException);
        //    Console.WriteLine("Test failed");
        //}

        [Fact]
        public void DeleteTransaction_S()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(5000);
            _driver.Url = API + "/api/Transactions";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("/html/body/div/div/div/div[3]/form[2]/button")).Click();
            Thread.Sleep(2000);
            Assert.Equal(API + "/api/Transactions", _driver.Url);
            Console.WriteLine("Test passed");
        }

        [Fact]
        public void EditTransactionDe_S()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(5000);
            _driver.Url = API + "/api/Transactions";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("/html/body/div/div/div/div[2]/div[2]/div[2]/button[2]")).Click();
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("/html/body/div/div/div/div[2]/div[2]/div[2]/form/div[1]/input")).SendKeys("200");
            _driver.FindElement(By.XPath("/html/body/div/div/div/div[2]/div[2]/div[2]/form/div[2]/input")).SendKeys("เงินเดือนออกแล้วจ้า");
            _driver.FindElement(By.XPath("/html/body/div/div/div/div[2]/div[2]/div[2]/form/div[3]/select/option[2]")).Click();
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("/html/body/div/div/div/div[2]/div[2]/div[2]/form/button")).Click();
            Thread.Sleep(2000);
            Assert.Equal(API + "/api/Transactions", _driver.Url);
            Console.WriteLine("Test passed");
        }
    }
}
