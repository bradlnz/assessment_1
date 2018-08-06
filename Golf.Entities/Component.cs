using Golf.Entities.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Golf.Entities
{
  public class Component : BaseRecord, IComponent
  {
    [Key]
    public Guid Id { get; set; }

    public string Number { get; set; }

    public int? Quantity { get; set; }

    public Order Order { get; set; }
  }
}
