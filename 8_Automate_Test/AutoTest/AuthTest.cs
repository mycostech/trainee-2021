using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;

namespace AutoTest
{

    public class AuthTest
    {

        IWebDriver _dri = new ChromeDriver();


        public string API = "http://localhost:3000";

        [Test]
        public void SuccessEnterLogin()
        {
            Thread.Sleep(2000);
            _dri.Manage().Window.Maximize();
            Thread.Sleep(3000);
            _dri.Url = API + "/login";

            Thread.Sleep(2000);
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[1]/div[2]/div[1]/input")).SendKeys("tt@test.com");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[1]/div[2]/div[2]/input")).SendKeys("123");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[2]/button")).Click();
            Thread.Sleep(3000);


            Assert.AreEqual(API + "/events", _dri.Url);

        }

        [Test]
        public void FailedEnterLogin()
        {

            Thread.Sleep(2000);
            _dri.Manage().Window.Maximize();
            Thread.Sleep(3000);
            _dri.Url = API + "/login";

            Thread.Sleep(2000);
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[1]/div[2]/div[1]/input")).SendKeys("t@test.com");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[1]/div[2]/div[2]/input")).SendKeys("123");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[2]/button")).Click();
            Thread.Sleep(3000);


            Assert.AreEqual(API + "/login", _dri.Url);

        }

        [Test]
        public void SuccessAddEvent() {

            Thread.Sleep(2000);
            _dri.Manage().Window.Maximize();
            Thread.Sleep(3000);
            _dri.Url = API + "/login";

            // Enter login
            Thread.Sleep(2000);
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[1]/div[2]/div[1]/input")).SendKeys("tt@test.com");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[1]/div[2]/div[2]/input")).SendKeys("123");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[2]/button")).Click();
            Thread.Sleep(3000);

            Console.WriteLine(_dri.Url);

            // go to add Event
            Thread.Sleep(2000);
            _dri.FindElement(By.XPath("/html/body/div/div/div[1]/nav/ul/li[2]/a/a")).Click();
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/input")).SendKeys("2021-01-01");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[2]/div[1]/div[2]/div[2]/input")).SendKeys("2021-01-01");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[2]/div[1]/div[2]/div[2]/input")).SendKeys("test auto test");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[2]/div[1]/div[2]/div[3]/textarea")).SendKeys("test test test test");
            _dri.FindElement(By.XPath("/html/body/div/div/div[2]/div[2]/div[2]/button")).Click();
            Console.WriteLine("Click !!");
            Thread.Sleep(3000);

           
            Assert.AreEqual(API + "/events", _dri.Url);
        }
    }
}
