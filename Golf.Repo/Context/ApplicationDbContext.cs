
using Golf.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Golf.Repository
{
  public class ApplicationDbContext : IdentityDbContext<AppUser, IdentityRole, string>
  {

    public ApplicationDbContext(DbContextOptions options)
            : base(options)
    {
    }

    public DbSet<Order> Orders { get; set; }

    public DbSet<Component> Components { get; set; }
  }
}
