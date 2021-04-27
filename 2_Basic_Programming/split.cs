using System;

namespace homework
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string str_split_comma = "Hello & Hi, Animal and Birds, Earth and Sky";

                string[] broken_str_comma = str_split_comma.Split(',');
            }
            catch (DivideByZeroException e) //case input zero
            {
                System.Console.WriteLine(sub_str_comma);
            }
            




            Console.ReadLine();
        }
    }
}