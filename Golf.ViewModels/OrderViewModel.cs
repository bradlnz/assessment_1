using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.ViewModels
{
   public class OrderViewModel
    {
    public Guid Id { get; set; }

    public string Number { get; set; }

    public DateTime? DateRequired { get; set; }

    public string Description { get; set; }
  }
}
