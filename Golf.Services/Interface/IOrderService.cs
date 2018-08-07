using Golf.Entities;
using Golf.Entities.Interfaces;
using Golf.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Golf.Services.Interface
{
  public interface IOrderService
  {
    bool SaveOrder(OrderViewModel order);
    List<OrderViewModel> GetOrders();
    OrderViewModel GetOrderById(Guid id);
  }
}
