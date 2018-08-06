
using Golf.Models.Enum;
using Microsoft.AspNetCore.Identity;

namespace Golf.Entities
{
  // Add profile data for application users by adding properties to this class
  public class AppUser : IdentityUser
  {
    // Extended Properties
    public string FirstName { get; set; }

    public string LastName { get; set; }

    public Role Role { get; set; }
  }
}
