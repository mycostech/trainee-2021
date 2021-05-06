using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace NoteApi.Data
{
    public partial class noteDBContext : DbContext
    {
        public noteDBContext()
        {
        }

        public noteDBContext(DbContextOptions<noteDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Note> Notes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-3J2PUV9\\SQLEXPRESS;Database=noteDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Note>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DateNote)
                    .HasColumnType("datetime")
                    .HasColumnName("dateNote");

                entity.Property(e => e.DescriptionNote)
                    .HasMaxLength(1024)
                    .IsUnicode(false)
                    .HasColumnName("descriptionNote");

                entity.Property(e => e.TitleNote)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("titleNote");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
