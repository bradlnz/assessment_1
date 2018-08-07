using Golf.Entities;
using Golf.Entities.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Golf.ViewModels;

namespace Golf.Services.Interface
{
  public interface IComponentService
  {
    bool SaveComponent(ComponentViewModel component);
    ComponentViewModel GetComponentById(Guid id);
    List<ComponentViewModel> GetComponents();
  }
}
