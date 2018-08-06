

using System.Threading.Tasks;
using Golf.Helpers;
using Golf.Entities;
using Golf.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Golf.Repository;

namespace Golf.Api.Controllers
{
  [Route("api/[controller]")]
  public class AccountsController : Controller
  {
    private readonly ApplicationDbContext _appDbContext;
    private readonly UserManager<AppUser> _userManager;
    private readonly IMapper _mapper;

    public AccountsController(UserManager<AppUser> userManager, IMapper mapper, ApplicationDbContext appDbContext)
    {
      _userManager = userManager;
      _mapper = mapper;
      _appDbContext = appDbContext;
    }

    // POST api/accounts
    [HttpPost]
    public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var userIdentity = new AppUser()
      {
        Email = model.Email,
        FirstName = model.FirstName,
        LastName = model.LastName,
        UserName = model.Email,
        Role = model.Role
      };

      var result = await _userManager.CreateAsync(userIdentity, model.Password);

      // Associate the role with the new user 
    //  await _userManager.AddToRoleAsync(userIdentity.Id, model);
      // Create customized claim

      await _userManager.AddClaimAsync(userIdentity, new Claim("WebAccess", model.Role.ToString()));

      await _userManager.AddClaimAsync(userIdentity, new Claim("AppAccess", model.Role.ToString()));

      if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

      //    await _appDbContext.Customers.AddAsync(new Customer { IdentityId = userIdentity.Id, Location = model.Location });
      await _appDbContext.SaveChangesAsync();

      return new OkObjectResult("Account created");
    }
  }
}
