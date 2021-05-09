using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI.Service.Interface
{
    public interface ICategoryService
    {
        public Task<List<Category>> SelectCategory();
    }
}
