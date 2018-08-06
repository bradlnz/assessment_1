using Golf.Entities;
using Golf.Entities.Interfaces;
using Golf.Repository;
using Golf.Services.Interface;
using Golf.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Services
{
  public class OrderService : IOrderService
  {
    private readonly IOrderRepository _orderRepository;
  

    public OrderService(IOrderRepository orderRepository)
    {
      _orderRepository = orderRepository;
    }

    public List<Order> GetOrders()
    {
      return _orderRepository.Orders();
    }

    public Order GetOrderById(Guid id)
    {
      return _orderRepository.GetOrderById(id);
    }

    public void SaveOrder(OrderViewModel order)
    {
      var orderEntity = new Order()
      {
        Number = order.Number,
        DateRequired = order.DateRequired,
        Description = order.Description,
      };

      _orderRepository.Save(orderEntity);
    }
  }
}
