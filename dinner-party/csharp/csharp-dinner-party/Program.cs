using System;
using System.Collections.Generic;

namespace csharp_dinner_party
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Dictionary<string, int> bowlingScores = new Dictionary<string, int>()
            { { "Bubba", 40 }, { "Louis", 120 }, { "Mary Jane", 200 }
            };
            Console.WriteLine(bowlingScores);
        }
    }
}