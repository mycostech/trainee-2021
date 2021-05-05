using budgetAPI.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service
{
    public class TypeService : ITypeService
    {
        private readonly budgetDBContext _context = new budgetDBContext();

        public async Task<List<Type>> SelectType()
        {
            var typeList = _context.Types.ToList();
            return typeList.Select(ty => new Type()
            {
                TypeId = ty.TypeId,
                TypeName = ty.TypeName,
                CategoryId = ty.CategoryId
            }).ToList();
        }
    }
}
