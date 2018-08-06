using Golf.Entities;
using Golf.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Golf.Repo
{
  public class ComponentRepository : IComponentRepository
  {

    private readonly ApplicationDbContext context;

    public ComponentRepository(ApplicationDbContext _context)
    {
      context = _context;
    }

    public Component Component(Guid id)
    {
      IQueryable<Component> queryable = context.Components;
      return queryable.Where(a => a.Id == id).FirstOrDefault();
    }

    public List<Component> Components(Guid id)
    {
      IQueryable<Component> queryable = context.Components;
      return queryable.Where(a => a.Order.Id == id).ToList();
    }

    public void Save(Component component)
    {
      var result = Component(component.Id);

      if (result != null)
      {
        component.Modified = DateTime.Now;
        context.Update(component);
      }
      else
      {
        component.Created = DateTime.Now;
        context.Add(component);
      }
      context.SaveChanges();
    }
  }
}
