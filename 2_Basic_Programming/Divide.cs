using System;

namespace homework
{
    class Program
    {
        static void Main(string[] args)
        {
            try 
            {
                Console.Write("Enter a number:  "); 
                int num1 = Convert.ToInt32(Console.ReadLine());
                Console.Write("Enter another number:  ");
                int num2 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine(num1 / num2);
            }
            catch (DivideByZeroException e )
            {
                Console.WriteLine(e.Message);
            }
            catch(FormatException e)
            {
                Console.WriteLine(e.Message);
            }
            



            Console.ReadLine();
        }
    }
}
