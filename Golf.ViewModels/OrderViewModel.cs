using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation.Attributes;
using Golf.ViewModels.Validations;

namespace Golf.ViewModels
{
  [Validator(typeof(OrderViewModelValidator))]
  public class OrderViewModel : BaseViewModel
  {
    public Guid Id { get; set; }

    public string Number { get; set; }

    public DateTime? DateRequired { get; set; }

    public string Description { get; set; }

    public List<ComponentViewModel> Components { get; set; }
  }
}
