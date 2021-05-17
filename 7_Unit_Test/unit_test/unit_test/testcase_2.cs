using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;


namespace unit_test
{
    class testcase_2
    {
        IWebDriver _driver = new ChromeDriver();

        [Test]
        public void AddUser()
        {
            Thread.Sleep(3000);
            _driver.Manage().Window.Maximize();
            Thread.Sleep(3000);
            _driver.Url = "http://localhost:3000/";
            Thread.Sleep(2000);
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/button[1]")).Click();
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[1]/input")).SendKeys("KEI");
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[2]/input")).SendKeys("TSUKISHIMA");
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[3]/input")).SendKeys("kei@karasuno.ac.jp");
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[4]/input")).SendKeys("0864352693");
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[5]/input")).SendKeys("09/27/1996");
            _driver.FindElement(By.XPath("//*[@id=" + '"' + "root" + '"' + "]/div/form[2]/div[6]/button")).Click();
            Thread.Sleep(2000);
            Console.WriteLine("Test passed");
        }

    }

}
