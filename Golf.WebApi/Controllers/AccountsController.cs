

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

    public AccountsController(UserManager<AppUser> userManager, ApplicationDbContext appDbContext)
    {
      _userManager = userManager;
      _appDbContext = appDbContext;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var userIdentity = new AppUser
      {
        Email = model.Email,
        FirstName = model.FirstName,
        LastName = model.LastName,
        UserName = model.Email,
        Role = model.Role
      };

      var result = await _userManager.CreateAsync(userIdentity, model.Password);

      await _userManager.AddClaimAsync(userIdentity, new Claim("WebAccess", model.Role.ToString()));

      await _userManager.AddClaimAsync(userIdentity, new Claim("AppAccess", model.Role.ToString()));

      if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

 
      await _appDbContext.SaveChangesAsync();

      return new OkObjectResult("Account created");
    }
  }
}
