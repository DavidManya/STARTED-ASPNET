using Microsoft.EntityFrameworkCore;
using Empleats.Models;

public class EmpleatsContext : DbContext
    {
        public EmpleatsContext (DbContextOptions<EmpleatsContext> options)
            : base(options)
        {
        }

        public DbSet<Empleat> Empleat { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Empleat>().ToTable("Empleat");
        }
}
