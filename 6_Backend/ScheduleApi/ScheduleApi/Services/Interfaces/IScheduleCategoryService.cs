using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public interface IScheduleCategoryService
    {
        public Task<List<ScheduleCategory>> SelectAllCategory();
    }

}
