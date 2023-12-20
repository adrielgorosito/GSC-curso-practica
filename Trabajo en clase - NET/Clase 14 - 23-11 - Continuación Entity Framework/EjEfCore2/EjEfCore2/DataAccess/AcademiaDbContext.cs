using EjEfCore2.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace EjEfCore2.DataAccess
{
    public class AcademiaDbContext : DbContext
    {
        public AcademiaDbContext()
        {
            this.Database.EnsureDeleted();
            this.Database.EnsureCreated();

            // Si se usan migrations, esas dos líneas de arriba se deben dejar de utilizar
        }

        public DbSet<Estudiante> Estudiantes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                // Muestra el log de consultas SQL
                .LogTo(Console.WriteLine, new[] {RelationalEventId.CommandExecuted})
                // Muestra los parámetros de las consultas
                .EnableSensitiveDataLogging()
                .UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=AcademiaDb");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Estudiante>(e =>
            {
                e.Property(p => p.Nombre).HasMaxLength(50);

                e.HasData(
                    new Estudiante()
                    {
                        Id = 1,
                        Nombre = "Juan",
                        Apellido = "Perez",
                        FechaNacimiento = new DateOnly(2001, 6, 1),
                        Legajo = 12345
                    },
                    new Estudiante()
                    {
                        Id = 2,
                        Nombre = "Jorge",
                        Apellido = "Cruz",
                        FechaNacimiento = new DateOnly(1998, 12, 7),
                        Legajo = 54321
                    },
                    new Estudiante()
                    {
                        Id = 3,
                        Nombre = "Laura",
                        Apellido = "Chavez",
                        FechaNacimiento = new DateOnly(2005, 2, 17),
                        Legajo = 98765
                    });
            });
        }
    }
}
