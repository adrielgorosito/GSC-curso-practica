using EjEfCore.Domain;
using Microsoft.EntityFrameworkCore;

namespace EjEfCore.DataAccess
{
    public class AcademiaDbContext : DbContext
    {
        // Cada vez que se instancie el DbContext, checkear que la base de datos esté creada
        public AcademiaDbContext() => this.Database.EnsureCreated();

        public DbSet<Estudiante> Estudiantes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=AcademiaDb");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // De la siguiente forma se determina a "Legajo" como PK
            // Además, se deshabilita la auto-generación numérica
            /* modelBuilder.Entity<Estudiante>(e => 
            {
                e.HasKey(p => p.Legajo);
                e.Property(p => p.Legajo).ValueGeneratedNever();
            }); */

            modelBuilder.Entity<Estudiante>()
                .Property(e => e.Nombre)
                .HasMaxLength(50);
        }
    }
}
