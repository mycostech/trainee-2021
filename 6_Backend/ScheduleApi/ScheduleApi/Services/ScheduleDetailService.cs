using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleApi.Services
{

    public class ScheduleDetailService : IScheduleDetailService
    {
        private readonly ScheduleDBContext _context;

        public ScheduleDetailService(ScheduleDBContext context)
        {
            _context = context;
        }
    
        public async Task<List<ScheduleDetail>> SelectAllScheduleDetail()
        {
            return await _context.ScheduleDetails.ToListAsync();
        }
        public async Task<ScheduleDetail> SelectScheduleDetail(int schId)
        {
            return await _context.ScheduleDetails.FindAsync(schId);
        }
        public async Task<ScheduleDetail> AddScheduleDetail(ScheduleDetail schDetail)
        {
            _context.ScheduleDetails.Add(schDetail);

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
            return schDetail;
        }
        public async Task<ScheduleDetail> UpdateScheduleDetail(int schId, ScheduleDetail schDetail)
        {
            var s = await _context.ScheduleDetails.FindAsync(schId);

            if (schDetail.SchDate == null) { s.SchDate = s.SchDate; } else { s.SchDate = schDetail.SchDate; };
            if (schDetail.BeginTime == null) { s.BeginTime = s.BeginTime; } else { s.BeginTime = schDetail.BeginTime; };
            if (schDetail.EndTime == null) { s.EndTime = s.EndTime; } else { s.EndTime = schDetail.EndTime; };
            if (schDetail.Note == null) { s.Note = s.Note; } else { s.Note = schDetail.Note; };
            if (schDetail.Category == null) { s.Category = s.Category; } else { s.Category = schDetail.Category; };

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
            return schDetail;
        }

    }
}
