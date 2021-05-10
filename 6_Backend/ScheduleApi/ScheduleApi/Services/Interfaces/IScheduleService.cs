using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public interface IScheduleService
    {
        
        public Task<List<Schedule>> SelectAllSchedule();
        public Task<List<Schedule>> SelectUserSchedule(int userId);
        public Task<Schedule> SelectSchedule(int schId);
        public Task<Schedule> AddSchedule(Schedule schedule);
        public Task<Schedule> AddUserSchedule(int userId, Schedulet s);
        public Task<Schedule> UpdateSchedule(int schId, Schedule s);
        public Task<Schedule> DeleteSchedule(int schId);
        public Task<List<Schedule>> DeleteAllUserSchedule(int userId);
        
    }

}
