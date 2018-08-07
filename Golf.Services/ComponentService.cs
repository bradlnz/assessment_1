using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Golf.Entities;
using Golf.Repository;
using Golf.Services.Interface;
using Golf.ViewModels;

namespace Golf.Services
{
  public class ComponentService : IComponentService
  {
    private readonly IComponentRepository _componentRepository;
    private readonly IOrderRepository _orderRepository;
    private readonly IMapper _mapper;
    public ComponentService(IComponentRepository componentRepository, IOrderRepository orderRepository, IMapper mapper)
    {
      _componentRepository = componentRepository;
      _orderRepository = orderRepository;
      _mapper = mapper;
    }

    public bool SaveComponent(ComponentViewModel component)
    {
      var existingComponent = _componentRepository.Components().FirstOrDefault(a => a.Number == component.Number);
      var order = _orderRepository.GetOrderById(component.OrderId);

      var componentEntity = new Component
      {
        Number = component.Number,
        Quantity = component.Quantity,
        Order = order
      };

      return _componentRepository.Save(existingComponent ?? componentEntity);
    }

    public List<ComponentViewModel> GetComponents()
    {
      return _mapper.Map<List<ComponentViewModel>>(_componentRepository.Components());
    }

    public ComponentViewModel GetComponentById(Guid id)
    {
      return _mapper.Map<ComponentViewModel>(_componentRepository.Component(id));
    }
  }
}
