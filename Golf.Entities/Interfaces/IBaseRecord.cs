using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Entities.Interfaces
{
    public interface IBaseRecord
    {
      DateTime? Created { get; set; }
      DateTime? Modified { get; set; }
    }
}
