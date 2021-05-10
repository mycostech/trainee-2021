using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{

    public class ScheduleCategoryService : IScheduleCategoryService
    {
        private readonly ScheduleDBContext _context;

        public ScheduleCategoryService(ScheduleDBContext context)
        {
            _context = context;
        }

        public async Task<List<ScheduleCategory>> SelectAllCategory()
        {
            return await _context.ScheduleCategories.ToListAsync();
        }
    }

}
