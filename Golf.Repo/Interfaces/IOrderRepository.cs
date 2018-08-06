using Golf.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public interface IOrderRepository
  {
    void Save(Order Order);
    Order GetOrderById(Guid id);
    List<Order> Orders();
  }
}
