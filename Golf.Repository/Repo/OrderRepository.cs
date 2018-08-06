using Golf.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Golf.Repository
{
  public class OrderRepository : RepositoryBase<ApplicationDbContext, Order>, IOrderRepository
  {
    public OrderRepository(IDbFactory<ApplicationDbContext> dbFactory) : base(dbFactory)
    {
    }

    public Order GetOrderById(Guid id)
    {
      IQueryable<Order> queryable = DbContext.Orders;
      return queryable.Where(a => a.Id == id).FirstOrDefault();
    }

    public List<Order> Orders()
    {
      IQueryable<Order> queryable = DbContext.Orders;
      return queryable.ToList();
    }

    public void Save(Order Order)
    {
      DbContext.Update(Order);
      DbContext.SaveChangesAsync();
    }
  }
}
