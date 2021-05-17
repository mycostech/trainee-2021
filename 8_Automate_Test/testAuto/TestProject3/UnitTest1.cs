using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;
using Xunit;

namespace TestProject3
{
    public class UnitTest1
    {
        private IWebDriver _driver = new ChromeDriver();

        [Fact]
        public void Test1()
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
