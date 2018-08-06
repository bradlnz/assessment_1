using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public interface IDbFactory<D> where D : ApplicationDbContext
  {
    D Init();
  }
}
