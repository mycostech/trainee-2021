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
    public class testcase_3
    {
        private IWebDriver _driver = new ChromeDriver();

        [Test]
        public void EnterInformation()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(5000);
            _driver.Url = "http://localhost:3000/";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("//*[@id='root']/div/div/div/div/div/div/div/div[2]/div/button")).Click();
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("/html/body/div[3]/div/div/div[2]/div/input[1]")).Click();
            _driver.FindElement(By.XPath("/html/body/div[3]/div/div/div[2]/div/input[1]")).SendKeys("Update_Title");
            _driver.FindElement(By.XPath("/html/body/div[3]/div/div/div[2]/div/input[2]")).Click();
            _driver.FindElement(By.XPath("/html/body/div[3]/div/div/div[2]/div/input[2]")).SendKeys("Update_Description");
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("/html/body/div[3]/div/div/div[3]/button[1]")).Click();
            Thread.Sleep(1000);
            Console.WriteLine("Test passed");
        }
    }
}
