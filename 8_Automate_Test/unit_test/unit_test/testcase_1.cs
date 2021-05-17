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
    public class testcase_1
    {
        private IWebDriver _driver = new ChromeDriver();

        [Test]
        public void push()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(5000);
            _driver.Url = "http://localhost:3000/";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("//*[@id='root']/div/div/form/div[1]/form/div[1]/input")).Click();
            _driver.FindElement(By.XPath("//*[@id='root']/div/div/form/div[1]/form/div[1]/input")).SendKeys("Title_Test");
            Thread.Sleep(1000);
            _driver.FindElement(By.XPath("//*[@id='root']/div/div/form/div[1]/form/div[2]/textarea")).Click();
            _driver.FindElement(By.XPath("//*[@id='root']/div/div/form/div[1]/form/div[2]/textarea")).SendKeys("Description_Test");
            Thread.Sleep(1000);
            _driver.FindElement(By.XPath("//*[@id='root']/div/div/form/div[2]/div/div/button")).Click();
            Thread.Sleep(2000);
            Console.WriteLine("Test passed");
        }
    }
}
