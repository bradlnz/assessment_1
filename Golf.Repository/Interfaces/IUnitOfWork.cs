using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public interface IUnitOfWork<D> where D : ApplicationDbContext
  {
    void Commit();
  }
}
