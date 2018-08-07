
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace Golf.Extensions
{
  public static class ResponseExtensions
  {
    public static void AddApplicationError(this HttpResponse response, string message)
    {
      response.Headers.Add("Application-Error", message);
      // CORS
      response.Headers.Add("access-control-expose-headers", "Application-Error");
    }

    public class CSVHelper : List<string[]>
    {
      protected string csv = string.Empty;
      protected string separator = ",";

      public CSVHelper(string csv, string separator = "\",\"")
      {
        this.csv = csv;
        this.separator = separator;

        foreach (string line in Regex.Split(csv, System.Environment.NewLine).ToList().Where(s => !string.IsNullOrEmpty(s)))
        {
          string[] values = Regex.Split(line, separator);

          for (int i = 0; i < values.Length; i++)
          {
            //Trim values
            values[i] = values[i].Trim('\"');
          }

          this.Add(values);
        }
      }
    }
  }

}
