using System;

    class Example
    {
        static void Main(string[] args)
        {
            try 
            {
		        Console.WriteLine("----Calculator----");
		        Console.WriteLine("Enter your a:");
		        int a = Convert.ToInt32(Console.ReadLine());
		        Console.WriteLine("Enter your b:");
		        int b = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("--> " + DivideCal(a, b));
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine("Division by zero.");
            }
            catch(FormatException)
            {
                Console.WriteLine("Enter only integers.");
            }
        }
    	static int DivideCal(int x, int y)
	    {
		    return x / y;
	    }
    }