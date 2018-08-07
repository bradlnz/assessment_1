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

    private readonly ApplicationDbContext _context;

    public ComponentRepository(ApplicationDbContext context)
    {
      this._context = context;
    }

    public Component Component(Guid id)
    {
      IQueryable<Component> queryable = _context.Components;
      return queryable.FirstOrDefault(a => a.Id == id);
    }

    public List<Component> Components(Guid id)
    {
      IQueryable<Component> queryable = _context.Components;
      return queryable.Where(a => a.Order.Id == id).ToList();
    }

    public List<Component> Components()
    {
      IQueryable<Component> queryable = _context.Components;
      return queryable.ToList();
    }

    public bool Save(Component component)
    {
      var result = Component(component.Id);

      if (result != null)
      {
        component.Modified = DateTime.Now;
        _context.Update(component);
      }
      else
      {
        component.Created = DateTime.Now;
        _context.Add(component);
      }
      _context.SaveChanges();
      return true;
    }
  }
}
