using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Golf.Entities
{
  public class BaseRecord
  {
    public DateTime? Created { get; set; }
    public DateTime? Modified { get; set; }
  }
}
