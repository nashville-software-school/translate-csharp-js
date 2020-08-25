using System;

namespace fizzbuzz
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int n = 1; n <= 100; n++)
            {
                if (n % 15 == 0)
                {
                    Console.Write("fizzbuzz");
                }
                else if (n % 3 == 0)
                {
                    Console.Write("fizz");
                }
                else if (n % 5 == 0)
                {
                    Console.Write("buzz");
                }
                else
                {
                    Console.Write(n);
                }
            }
        }
    }
}