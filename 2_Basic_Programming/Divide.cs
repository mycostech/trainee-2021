using System;

namespace homework
{
    class Program
    {
        static void Main(string[] args)
        {
            try 
            {
                Console.Write("Enter a number:  "); //input number 
                int num1 = Convert.ToInt32(Console.ReadLine()); //receive the the number 
                Console.Write("Enter another number:  ");//input number
                int num2 = Convert.ToInt32(Console.ReadLine()); //receive  number

                Console.WriteLine(num1 / num2);//divide the number
            }
            catch (DivideByZeroException e ) //case input zero
            {
                Console.WriteLine(e.Message);
            }
            catch(FormatException e) //case input not a number
            {
                Console.WriteLine(e.Message);
            }
            



            Console.ReadLine();
        }
    }
}
