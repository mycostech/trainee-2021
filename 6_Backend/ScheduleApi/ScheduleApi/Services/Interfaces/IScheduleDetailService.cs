using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public interface IScheduleDetailService
    {
        public Task<List<ScheduleDetail>> SelectAllScheduleDetail();
        public Task<ScheduleDetail> SelectScheduleDetail(int schId);
        public Task<ScheduleDetail> AddScheduleDetail(ScheduleDetail schDetail);
        public Task<ScheduleDetail> UpdateScheduleDetail(int schId, ScheduleDetail schDetail);
    }


}
