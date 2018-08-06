using Microsoft.EntityFrameworkCore;
using System;

namespace Golf.Repository
{
  public abstract class RepositoryBase<D, T> : IRepository<T> where T : class where D : ApplicationDbContext
  {


    private D dataContext;
    private readonly DbSet<T> dbSet;

    protected IDbFactory<D> DbFactory
    {
      get;
      private set;
    }

    protected D DbContext
    {
      get { return dataContext ?? (dataContext = DbFactory.Init()); }
    }


    protected RepositoryBase(IDbFactory<D> dbFactory)
    {

      DbFactory = dbFactory;
      dbSet = DbContext.Set<T>();

    }


    #region Implementation
    public virtual void Add(T entity)
    {
      dbSet.Add(entity);
    }

    public virtual void Update(T entity)
    {
      dbSet.Attach(entity);
      DbContext.Entry(entity).State = EntityState.Modified;
    }

    public virtual void Delete(T entity)
    {
      dbSet.Remove(entity);
    }


    public T GetByKey(object id)
    {
      return dbSet.Find(id);
    }


    #endregion

  }
  
}
