using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace TestProject5
{
    public class testcase_1
    {
        //private IWebDriver _driver;
        private IWebDriver _driver = new ChromeDriver();

        [Fact]
        public void EnterInformation()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(5000);
            _driver.Url = "https://www.google.com/";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")).Click();
            _driver.FindElement(By.XPath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")).SendKeys("test");
            Thread.Sleep(2000);
            Console.WriteLine("Test passed");
        }
    }
}
