using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public interface IScheduleService
    {
        
        public Task<List<ScheduleContract>> SelectAllSchedule();
        public Task<List<ScheduleContract>> SelectUserSchedule(int userId);
        public Task<ScheduleContract> SelectSchedule(int schId);
        public Task<ScheduleContract> AddSchedule(ScheduleContract schedule);
        public Task<ScheduleContract> AddUserSchedule(int userId, ScheduleContract s);
        public Task<ScheduleContract> UpdateSchedule(int schId, ScheduleContract s);
        public Task<ScheduleContract> DeleteSchedule(int schId);
        public Task<List<ScheduleContract>> DeleteAllUserSchedule(int userId);
        
    }

}
