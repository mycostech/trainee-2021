using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public interface IScheduleDetailService
    {
        public Task<List<ScheduleDetailContract>> SelectAllScheduleDetail();
        public Task<ScheduleDetailContract> SelectScheduleDetail(int schId);
        public Task<ScheduleDetailContract> AddScheduleDetail(ScheduleDetailContract schDetail);
        public Task<ScheduleDetailContract> UpdateScheduleDetail(int schId, ScheduleDetailContract schDetail);
    }


}
