using budgetAPI.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service
{
    public class TypeService : ITypeService
    {
        private readonly budgetDBv2Context _context;
        public TypeService(budgetDBv2Context context)
        {
            _context = context;
        }

        public async Task<List<Type>> SelectType()
        {
            var typeList = _context.Types.ToList();

            if(typeList == null)
            {
                return null;
            }

            return typeList.Select(ty => new Type()
            {
                TypeId = ty.TypeId,
                TypeName = ty.TypeName,
                CategoryId = ty.CategoryId
            }).ToList();
        }
    }
}
