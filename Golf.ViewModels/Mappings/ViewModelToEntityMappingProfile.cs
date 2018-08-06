
using Golf.Entities;
using AutoMapper;


namespace Golf.ViewModels.Mappings
{
  public class ViewModelToEntityMappingProfile : Profile
  {
    public ViewModelToEntityMappingProfile()
    {
      CreateMap<RegistrationViewModel, AppUser>()
      .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email))
      .ForMember(au => au.LastName, map => map.MapFrom(vm => vm.LastName))
      .ForMember(au => au.FirstName, map => map.MapFrom(vm => vm.FirstName))
      .ForAllMembers(opt => opt.Ignore());

    }


  }
}
