using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;


namespace unit_test
{
    class testcase_1
    {
        IWebDriver _driver = new ChromeDriver();

        [Test]
        public void LogIn()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(3000);
            _driver.Url = "http://localhost:3000/";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form/input")).SendKeys("1001"+ Keys.Enter);
            Thread.Sleep(2000);
            //_driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form/input")).SendKeys(Keys.Enter);
            //Thread.Sleep(3000);
            //_driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/button[1]")).Click();
            Console.WriteLine("Test passed");
        }
    
    }

}
