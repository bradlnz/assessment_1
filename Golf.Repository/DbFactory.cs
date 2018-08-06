
using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public class DbFactory<D> : IDisposable, IDbFactory<D> where D : ApplicationDbContext, new()
  {
    D dbContext;

    public void Dispose()
    {
      if (dbContext != null)
        dbContext.Dispose();
    }

    public D Init()
    {
      return dbContext ?? (dbContext = new D());
    }
  }
}
