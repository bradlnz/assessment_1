using Golf.Entities;
using Golf.Entities.Interfaces;
using Golf.Repository;
using Golf.Services.Interface;
using Golf.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;

namespace Golf.Services
{
  public class OrderService : IOrderService
  {
    private readonly IOrderRepository _orderRepository;
    private readonly IMapper _mapper;

    public OrderService(IOrderRepository orderRepository, IMapper mapper)
    {
      _orderRepository = orderRepository;
      _mapper = mapper;
    }

    public List<OrderViewModel> GetOrders()
    {
      return _mapper.Map<List<OrderViewModel>>(_orderRepository.Orders());
    }

    public OrderViewModel GetOrderById(Guid id)
    {
      return _mapper.Map<OrderViewModel>(_orderRepository.GetOrderById(id));
    }

    public bool SaveOrder(OrderViewModel order)
    {
      var existingOrder = _orderRepository.Orders().FirstOrDefault(a => a.Number == order.Number);

      if (existingOrder != null)
      {
        existingOrder.Number = order.Number;
        existingOrder.DateRequired = order.DateRequired;
        existingOrder.Description = order.Description;
      }

      var orderEntity = new Order
      {
        Number = order.Number,
        DateRequired = order.DateRequired,
        Description = order.Description
      };
      return _orderRepository.Save(existingOrder ?? orderEntity);
    }
  }
}
