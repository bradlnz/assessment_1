using Golf.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Golf.Repository
{
  public class ComponentRepository : RepositoryBase<ApplicationDbContext, Component>, IComponentRepository
  {
    public ComponentRepository(IDbFactory<ApplicationDbContext> dbFactory) : base(dbFactory)
    {
    }

    public List<Component> Components()
    {
      IQueryable<Component> queryable = DbContext.Components;
      return queryable.ToList();
    }

    public Component GetComponentById(Guid id)
    {
      IQueryable<Component> queryable = DbContext.Components;
      return queryable.Where(a => a.Id == id).FirstOrDefault();
    }

    public void Save(Component Component)
    {
      DbContext.Update(Component);
      DbContext.SaveChangesAsync();
    }
  }
}
