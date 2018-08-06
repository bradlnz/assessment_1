using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Entities.Interfaces
{
    public interface IComponent : IBaseRecord
    {
      Guid Id { get; set; }
      string Number { get; set; }
      int? Quantity { get; set; }
    }
}
