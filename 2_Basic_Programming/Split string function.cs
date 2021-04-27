using System;

public class Example
{
	public static void Main()
	{
		Console.WriteLine("Input :");
		string userName = Console.ReadLine();
		SplitStr(userName);
	}

	static void SplitStr(string x)
	{
		try
		{
			string[] words = x.Split(',');
			foreach (var word in words)
			{
				Console.WriteLine(">>" + word);
			}
		}
		catch (Exception)
		{
			Console.WriteLine("split error");
		}
	}
}