using Golf.Entities;
using Golf.Entities.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Services.Interface
{
  public interface IComponentService
  {
    void SaveComponent(Component order);
    Component GetComponentById(Guid id);
  }
}
