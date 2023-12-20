using EjEfCore2.DataAccess;
using EjEfCore2.Domain;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

using var context = new AcademiaDbContext();

await ReadSamples(context);

static async Task ReadSamples(AcademiaDbContext context)
{
    Estudiante e = await context.Estudiantes.FirstAsync();
    //Estudiante? e2 = await context.Estudiantes.Where(e2 => e2.Id > 3).FirstOrDefaultAsync(); // null
    // El ? lo declara como nullable, es decir, puede admitir un valor nulo

    Estudiante e4 = await context.Estudiantes.Where(e4 => e4.Nombre == "Laura").SingleAsync();
    //Estudiante e3 = await context.Estudiantes.SingleAsync(); // Error

    WriteToConsole(e);
    WriteToConsole(e4);

    int cantidad = await context.Estudiantes.CountAsync();
    Console.WriteLine(cantidad);

    // Múltiples Where o SQL crudo (aunque no es muy recomendado)
    int cantidad2 = await context.Estudiantes
        .Where(e5 => e5.Nombre.EndsWith("z"))
        .Where(e5 => e5.Legajo > 1000)
        .CountAsync();

    List<Estudiante> listaEstudiantes = await context.Estudiantes.FromSql($"SELECT * FROM dbo.Estudiantes").ToListAsync();

    // No tracking
    Estudiante e6 = await context.Estudiantes.AsNoTracking().FirstAsync();
}

static void WriteToConsole(Estudiante e)
{
    var options = new JsonSerializerOptions()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        WriteIndented = true
    };

    string json = System.Text.Json.JsonSerializer.Serialize(e, options);
    Console.WriteLine(json);
}

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
    var options = new JsonSerializerOptions()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        WriteIndented = true
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
    await context.SaveChangesAsync();
}

static async Task Delete(AcademiaDbContext context, int id)
{
    var estudiante = await context.FindAsync<Estudiante>(id);
    context.Remove(estudiante);
    await context.SaveChangesAsync();
}