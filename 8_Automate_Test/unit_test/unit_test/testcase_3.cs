using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;


namespace unit_test
{
    class testcase_3
    {
        IWebDriver _driver = new ChromeDriver();

        [Test]
        public void AddSchedule()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(3000);
            _driver.Url = "http://localhost:3000/";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/button[2]")).Click();
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/button[3]")).Click();
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[1]/input")).SendKeys("MOTHER DAY");
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[2]/input")).SendKeys("08/12/2021");
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[3]/select")).SendKeys("H");
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[5]/button")).Click();
            Thread.Sleep(2000);
            Console.WriteLine("Test passed");
        }

    }

}
