using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public class UnitOfWork<D> : IUnitOfWork<D> where D : ApplicationDbContext, new()
  {
    private readonly IDbFactory<D> dbFactory;
    private D dbContext;

    public UnitOfWork(IDbFactory<D> dbFactory)
    {
      this.dbFactory = dbFactory;
    }

    public D DbContext
    {
      get { return dbContext ?? (dbContext = dbFactory.Init()); }
    }

    public void Commit()
    {
      DbContext.SaveChanges();
    }
  }
}
