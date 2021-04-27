using System;

namespace split_string
{
    class Program
    {
        static void SplitString()
        {
            try
            {
                Console.Write("Input String: ");
                string str = Console.ReadLine();

                string[] words = str.Split(',');

                //Loop for display the word in array.
                foreach (var word in words)
                {
                    Console.WriteLine(word);
                }
            }

            catch (Exception e)
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
            SplitString();
        }
    }
}
