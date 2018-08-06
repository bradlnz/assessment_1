using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Golf.Services.Interface;
using System;
using Golf.ViewModels;

namespace Golf.Api.Controllers
{
  [Authorize(Policy = "WebAccess")]
  [Route("api/[controller]/{id}")]
  public class OrdersController : Controller
  {
    private readonly IOrderService _orderService;

    public OrdersController(IOrderService orderService)
    {
      _orderService = orderService;
    }

    // GET api/dashboard/home
    [HttpGet]
    public IActionResult Get(Guid? id = null)
    {
      if(id != null && id.HasValue)
      {
        var order = _orderService.GetOrderById(id.Value);

        return Ok(order);
      }
      var orders = _orderService.GetOrders();

      return Ok(orders);
    }

    [HttpPost]
    public void Save([FromBody] OrderViewModel order)
    {
      _orderService.SaveOrder(order);
    }
  }
}
