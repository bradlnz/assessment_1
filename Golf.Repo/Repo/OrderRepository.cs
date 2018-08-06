using Golf.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Golf.Repository
{
  public class OrderRepository : IOrderRepository, IDisposable
  {
    private readonly ApplicationDbContext context;

    public OrderRepository(ApplicationDbContext _context)
    {
      context = _context;
    }

    public Order GetOrderById(Guid id)
    {
      IQueryable<Order> queryable = context.Orders;
      return queryable.Where(a => a.Id == id).FirstOrDefault();
    }

    public List<Order> Orders()
    {
      IQueryable<Order> queryable = context.Orders;
      return queryable.ToList();
    }

    public void Save(Order Order)
    {
      var result = GetOrderById(Order.Id);

      if (result != null)
      {
        Order.Modified = DateTime.Now;
        context.Update(Order);
      } else
      {
        Order.Created = DateTime.Now;
        context.Add(Order);
      }
      context.SaveChanges();
    }

    private bool disposed = false;

    protected virtual void Dispose(bool disposing)
    {
      if (!this.disposed)
      {
        if (disposing)
        {
          context.Dispose();
        }
      }
      this.disposed = true;
    }

    public void Dispose()
    {
      Dispose(true);
      GC.SuppressFinalize(this);
    }
  }
}
