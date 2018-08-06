using Golf.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public interface IOrderRepository
  {
    bool Save(Order order);
    Order GetOrderById(Guid id);
    List<Order> Orders();
  }
}
