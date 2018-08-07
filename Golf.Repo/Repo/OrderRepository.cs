using Golf.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Golf.Repository
{
  public class OrderRepository : IOrderRepository, IDisposable
  {
    private readonly ApplicationDbContext _context;

    public OrderRepository(ApplicationDbContext context)
    {
      this._context = context;
    }

    public Order GetOrderById(Guid id)
    {
      IQueryable<Order> queryable = _context.Orders.Include(a => a.Components);
      return queryable.FirstOrDefault(a => a.Id == id);
    }

    public List<Order> Orders()
    {
      IQueryable<Order> queryable = _context.Orders.Include(a => a.Components);
      return queryable.ToList();
    }

    public bool Save(Order order)
    {
      var result = GetOrderById(order.Id);

      if (result != null)
      {
        order.Modified = DateTime.Now;
        _context.Update(order);
      } else
      {
        order.Created = DateTime.Now;
        _context.Add(order);
      }

      _context.SaveChanges();

      return true;
    }

    private bool _disposed = false;

    protected virtual void Dispose(bool disposing)
    {
      if (!this._disposed)
      {
        if (disposing)
        {
          _context.Dispose();
        }
      }
      this._disposed = true;
    }

    public void Dispose()
    {
      Dispose(true);
      GC.SuppressFinalize(this);
    }
  }
}
