using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation.Attributes;
using Golf.ViewModels.Validations;

namespace Golf.ViewModels
{
  public class ComponentViewModel : BaseViewModel
  {
    public string Number { get; set; }

    public int? Quantity { get; set; }

    public Guid OrderId { get; set; }
  }
}
