
using Golf.Entities.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Golf.Entities
{
  public class Order : BaseRecord, IOrder
  {
    [Key]
    public Guid Id { get; set; }

    public string Number { get; set; }

    public DateTime? DateRequired { get; set; }

    public string Description { get; set; }

    public virtual ICollection<Component> Components { get; set; }
  }
}
