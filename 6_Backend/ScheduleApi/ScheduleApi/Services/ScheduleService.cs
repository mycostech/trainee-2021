using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{
    public class ScheduleService : IScheduleService
    {
        private readonly ScheduleDBContext _context;

        public ScheduleService(ScheduleDBContext context)
        {
            _context = context;
        }
        public async Task<List<Schedule>> SelectAllSchedule()
        {
            return await _context.Schedules
                .OrderBy(e => e.UserId)
                .ThenBy(e => e.ScheduleDetail.SchDate)
                .ThenBy(e => e.ScheduleDetail.BeginTime)
                .ThenBy(e => e.ScheduleDetail.EndTime)
                .ToListAsync();
        }
        public async Task<List<Schedule>> SelectUserSchedule(int userId)
        {
            return await _context.Schedules.Where(e => e.UserId == userId || e.UserId == null)
                .OrderBy(e => e.ScheduleDetail.SchDate)
                .ThenBy(e => e.ScheduleDetail.BeginTime)
                .ThenBy(e => e.ScheduleDetail.EndTime)
                .ToListAsync();
        }
        public async Task<Schedule> SelectSchedule(int schId)
        {
            return await _context.Schedules.FindAsync(schId);
        }

        //Add by Admin aka UserId == null
        public async Task<Schedule> AddSchedule(Schedule schedule)
        {           
            var schedules = _context.Schedules.Where(e => e.SchId < 10010000).Select(e => e.SchId).ToList().Max();
            int max;
            if (schedules < 10010000) { max = 10010000; } else { max = schedules + 1; };
            Schedule sch = new Schedule()
            {
                SchId = max,
                Title = schedule.Title,
                ScheduleDetail = schedule.ScheduleDetail
            };
            _context.Schedules.Add(sch);

            if (schedule.ScheduleDetail != null)
            {
                _context.ScheduleDetails.Add(sch.ScheduleDetail);
            }

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine("Add Schedule Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
            return schedule;
        }

        //Add by User
        public async Task<Schedule> AddUserSchedule(int userId, Schedule s)
        {
            var schedules = _context.Schedules.Where(e => e.SchId < (userId + 1) * 10000).Select(e => e.SchId).ToList().Max();
            int max;
            if (schedules < userId * 10000) { max = (userId * 10000) + 1; } else { max = schedules + 1; };
            Schedule sch = new Schedule()
            {
                SchId = max,
                Title = s.Title,
                UserId = userId,
                ScheduleDetail = s.ScheduleDetail
            };
            _context.Schedules.Add(sch);
            if (sch.ScheduleDetail != null)
            {
                _context.ScheduleDetails.Add(sch.ScheduleDetail);
            }

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine("Add Schedule Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
            return sch;
        }
        public async Task<Schedule> UpdateSchedule(int schId, Schedule s)
        {
            var sch = _context.Schedules.SingleOrDefault(e => e.SchId == schId);

            if (s.Title == null) { sch.Title = sch.Title; } else { sch.Title = s.Title; }

            if (s.ScheduleDetail!=null)
            {
                var schDetail = _context.ScheduleDetails.SingleOrDefault(e => e.SchId == schId);
                var schD = s.ScheduleDetail;
                if (schD.SchDate == null) { schDetail.SchDate = schDetail.SchDate; } else { schDetail.SchDate = schD.SchDate; };
                if (schD.BeginTime == null) { schDetail.BeginTime = schDetail.BeginTime; } else { schDetail.BeginTime = schD.BeginTime; };
                if (schD.EndTime == null) { schDetail.EndTime = schDetail.EndTime; } else { schDetail.EndTime = schD.EndTime; };
                if (schD.Note == null) { schDetail.Note = schDetail.Note; } else { schDetail.Note = schD.Note; };
                if (schD.Category == null) { schDetail.Category = schDetail.Category; } else { schDetail.Category = schD.Category; };
            }

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine("Add Schedule Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
            return sch;
        }
        public async Task<Schedule> DeleteSchedule(int schId)
        {
            var sch = _context.Schedules.Find(schId);

            var schDetail = _context.ScheduleDetails.Find(schId);

            _context.ScheduleDetails.RemoveRange(schDetail);

            _context.Schedules.RemoveRange(sch);  

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine("Delete Schedule Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return null;
        }
        public async Task<List<Schedule>> DeleteAllUserSchedule(int userId)
        {
            var sch = _context.Schedules.Where(e => e.UserId == userId && e.SchId != userId * 10000).ToList();

            foreach (Schedule s in sch)
            {
                var schDetail = await _context.ScheduleDetails.FindAsync(s.SchId);
                _context.ScheduleDetails.RemoveRange(schDetail);
            }

            _context.Schedules.RemoveRange(sch);

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine("Delete Schedule Completed.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return null;
        }
    }


}
