using EjEfCore.DataAccess;
using EjEfCore.Domain;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

using var context = new AcademiaDbContext();

await Create(context);
await ReadAll(context);

int id = await Create(context);
await Update(context, id);
await ReadAll(context);

await Delete(context, 6);

static async Task<int> Create(AcademiaDbContext context)
{
    var estudiante = new Estudiante()
    {
        Nombre = "Juan",
        Apellido = "Perez",
        FechaNacimiento = new DateOnly(2001, 6, 1),
        Legajo = 12345
    };
    context.Add(estudiante);
    await context.SaveChangesAsync();

    return estudiante.Id;
}

static async Task ReadAll(AcademiaDbContext context)
{
    var estudiantes = await context.Estudiantes.ToListAsync();

    // Para mejorar la legibilidad del Json que se imprime
    var options = new JsonSerializerOptions()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        WriteIndented = true,
    };

    estudiantes.ForEach(e =>
    {
        string json = System.Text.Json.JsonSerializer.Serialize(e, options);
        Console.WriteLine(json);
    });
}

static async Task Update(AcademiaDbContext context, int id)
{
    var estudiante = await context.FindAsync<Estudiante>(id);

    estudiante.FechaNacimiento = new DateOnly(2003, 6, 1);

    // context.Update(estudiante);
    // En este caso, no es necesario el update ya que ya poseemos el estudiante
    // de la instancia context, y dicha instancia no cambia
    await context.SaveChangesAsync();
}

static async Task Delete(AcademiaDbContext context, int id)
{
    var estudiante = await context.FindAsync<Estudiante>(id);

    context.Remove(estudiante);

    await context.SaveChangesAsync();
}