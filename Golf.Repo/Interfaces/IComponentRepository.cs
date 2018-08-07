using Golf.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public interface IComponentRepository
  {
    bool Save(Component component);
    List<Component> Components(Guid id);
    Component Component(Guid id);
    List<Component> Components();
  }
}
