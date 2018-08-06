using System;
using System.Collections.Generic;
using System.Text;

namespace Golf.Repository
{
  public interface IRepository<T> where T : class
  {
    void Add(T entity);

    void Update(T entity);

    void Delete(T entity);

    T GetByKey(object id);
  }
}
