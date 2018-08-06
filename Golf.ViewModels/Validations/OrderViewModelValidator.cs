
using FluentValidation;
 

namespace Golf.ViewModels.Validations
{
    public class OrderViewModelValidator : AbstractValidator<OrderViewModel>
    {
        public OrderViewModelValidator()
        {
            RuleFor(vm => vm.DateRequired).NotEmpty().WithMessage("Date required cannot be empty");
            RuleFor(vm => vm.Description).NotEmpty().WithMessage("Description cannot be empty");
            RuleFor(vm => vm.Number).NotEmpty().WithMessage("Number cannot be empty");
        }
    }
}
