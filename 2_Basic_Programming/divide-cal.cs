using System;

namespace divide_cal
{
    class Program
    {
        static void DivideCalculation()
        {

            try
            {
                int dividend;
                int divisor;
                int result;

                Console.Write("Input dividend: ");
                int.TryParse(Console.ReadLine(), out dividend);

                Console.Write("Input divisor: ");
                int.TryParse(Console.ReadLine(), out divisor);

                //Divide Calculation
                result = dividend / divisor;
                Console.WriteLine("Result = {0}", result);
            }

            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }

            finally
            {
                Console.WriteLine("End Program");
            }
            
        }
        static void Main(string[] args)
        {
            DivideCalculation();
        }
    }
}
