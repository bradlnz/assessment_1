using Golf.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public interface IComponentRepository
  {
    void Save(Component Component);
    Component GetComponentById(Guid id);
    List<Component> Components();
  }
}
