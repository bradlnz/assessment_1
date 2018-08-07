using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Golf.Extensions;
using Golf.Services.Interface;
using Golf.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResponseExtensions = Golf.Extensions.ResponseExtensions;

namespace Golf.WebApi.Controllers
{
  [Authorize(Policy = "WebAccess")]
  [Route("api/[controller]/{id}")]
  public class ImportController : Controller
  {
    private readonly IOrderService _orderService;
    private readonly IComponentService _componentService;
    public ImportController(IOrderService orderService, IComponentService componentService)
    {
      _orderService = orderService;
      _componentService = componentService;
    }

    [HttpPost]
    public bool Upload(IFormFile file)
    {
      var result = string.Empty;
      using (var reader = new StreamReader(file.OpenReadStream()))
      {
        result = reader.ReadToEnd();

        ResponseExtensions.CSVHelper csv = new ResponseExtensions.CSVHelper(result);

        csv.RemoveAt(0);

        foreach (var item in csv)
        {
          var line = item[0].Split(",").ToList();

          var order = new OrderViewModel
          {
            Number = line[0],
            Description = line[1]
          };
          var orderSaved = _orderService.SaveOrder(order);
          var orderResult = _orderService.GetOrders().FirstOrDefault(a => a.Number == line[0]);

          if (!orderSaved || orderResult == null) continue;

          line.RemoveAt(0);
          line.RemoveAt(0);

          var parts = line;
          var oddCategories = parts.ToList().Where((c, i) => i % 2 != 0).ToList();

          var evenCategories = parts.ToList().Where((c, i) => i % 2 == 0).ToList();

          for (var i = 0; i < oddCategories.Count(); i++)
          {
            var component = new ComponentViewModel
            {
              Number = evenCategories.ToArray()[i].Replace("\"", ""),
              Quantity = Convert.ToInt32(oddCategories.ToArray()[i].Replace("\"", "")),
              OrderId = orderResult.Id
            };

             _componentService.SaveComponent(component);
          }

          
        }

        return true;
      }
    }
  }

}
