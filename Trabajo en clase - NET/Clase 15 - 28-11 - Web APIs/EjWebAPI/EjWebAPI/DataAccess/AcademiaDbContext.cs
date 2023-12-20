using EjWebAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace EjWebAPI.DataAccess
{
    public class AcademiaDbContext : DbContext
    {
        public DbSet<Estudiante> Estudiantes { get; set; }

        public AcademiaDbContext(DbContextOptions options) : base(options) => this.Database.EnsureCreated();
    }
}
