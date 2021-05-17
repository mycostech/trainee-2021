using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;

namespace TestProject4
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }

        private IWebDriver _driver = new ChromeDriver();

        [Test]
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