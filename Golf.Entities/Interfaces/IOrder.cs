using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace Golf.Entities.Interfaces
{
  public interface IOrder : IBaseRecord
  {
    Guid Id { get; set; }
    string Number { get; set; }
    DateTime? DateRequired { get; set; }
    string Description { get; set; }
  }
}
