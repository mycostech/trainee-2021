using budgetAPI.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service
{
    public class CatagoryService : ICatagoryService
    {
        private readonly budgetDBContext _context = new budgetDBContext();

        public async Task<List<Category>> SelectCategory()
        {
            var cataList = _context.Categories.ToList();
            return cataList.Select(ca => new Category()
            {
                CategoryId = ca.CategoryId,
                CategoryName = ca.CategoryName
            }).ToList();
        }
    }
}
