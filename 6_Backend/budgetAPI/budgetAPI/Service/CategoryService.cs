using budgetAPI.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service
{
    public class CategoryService : ICategoryService
    {
        private readonly budgetDBv2Context _context;

        public CategoryService(budgetDBv2Context context)
        {
            _context = context;
        }

        public async Task<List<Category>> SelectCategory()
        {
            var cataList = _context.Categories.ToList();

            if (cataList == null)
            {
                return null;
            }

            return cataList.Select(ca => new Category()
            {
                CategoryId = ca.CategoryId,
                CategoryName = ca.CategoryName
            }).ToList();
        }
    }
}
