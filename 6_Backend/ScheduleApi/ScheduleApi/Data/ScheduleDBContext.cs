using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ScheduleApi
{
    public partial class ScheduleDBContext : DbContext
    {
        public ScheduleDBContext()
        {
        }

        public ScheduleDBContext(DbContextOptions<ScheduleDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Schedule> Schedules { get; set; }
        public virtual DbSet<ScheduleCategory> ScheduleCategories { get; set; }
        public virtual DbSet<ScheduleDetail> ScheduleDetails { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-DS1R1FU\\SQLEXPRESS;Initial Catalog=ScheduleDB; Trusted_Connection=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Thai_CI_AS");

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.HasKey(e => e.SchId)
                    .HasName("PK__Schedule__CAD9872B88BD252A");

                entity.Property(e => e.SchId)
                    .ValueGeneratedNever()
                    .HasColumnName("SchID");

                entity.Property(e => e.Title)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Schedules)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_UserSch");
            });

            modelBuilder.Entity<ScheduleCategory>(entity =>
            {
                entity.HasKey(e => e.CatCode)
                    .HasName("PK__Schedule__5E593E4F01CF40A6");

                entity.ToTable("ScheduleCategory");

                entity.Property(e => e.CatCode)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Descriptions)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ScheduleDetail>(entity =>
            {
                entity.HasKey(e => e.SchId)
                    .HasName("PK__Schedule__CAD9872B3D377EFA");

                entity.ToTable("ScheduleDetail");

                entity.Property(e => e.SchId)
                    .ValueGeneratedNever()
                    .HasColumnName("SchID");

                entity.Property(e => e.Category)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Note)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.SchDate).HasColumnType("date");

                entity.HasOne(d => d.CategoryNavigation)
                    .WithMany(p => p.ScheduleDetails)
                    .HasForeignKey(d => d.Category)
                    .HasConstraintName("FK_SchCategory");

                entity.HasOne(d => d.Sch)
                    .WithOne(p => p.ScheduleDetail)
                    .HasForeignKey<ScheduleDetail>(d => d.SchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SchDetail");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId)
                    .ValueGeneratedNever()
                    .HasColumnName("UserID");

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
