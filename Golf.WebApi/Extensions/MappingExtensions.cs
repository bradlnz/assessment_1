using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Golf.Extensions
{
  public static class MappingExtensions
  {
    public static IMappingExpression<TSource, TDest> IgnoreAllUnmapped<TSource, TDest>(this IMappingExpression<TSource, TDest> expression)
    {
      expression.ForAllMembers(opt => opt.Ignore());
      return expression;
    }
  }
}
