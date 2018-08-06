using System;
using System.Collections.Generic;

namespace Golf.DTO
{
    public class OrderDto
    {
    public Guid Id { get; set; }

    public string Number { get; set; }

    public DateTime? DateRequired { get; set; }

    public string Description { get; set; }

    public ICollection<Component> Components { get; set; }
  }
}
