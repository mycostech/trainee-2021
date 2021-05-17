using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace unit_test
{
    public class testcase_2
    {
        private IWebDriver _driver = new ChromeDriver();

        [Test]
        public void delete()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(5000);
            _driver.Url = "http://localhost:3000/";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("//*[@id='root']/div/div/div/div/div/div/div/div[2]/div/div/form/div/button")).Click();
            Thread.Sleep(1000);
            Console.WriteLine("Test passed");
        }
    }
}
