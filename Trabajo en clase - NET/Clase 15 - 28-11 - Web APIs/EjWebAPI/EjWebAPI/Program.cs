using EjWebAPI.DataAccess;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Sin autenticación
builder.Services.AddDbContext<AcademiaDbContext>(opt => 
    opt.UseSqlServer(builder.Configuration.GetConnectionString("AcademiaDb")));

// - Si se implementa autenticación:
//builder.Services
//    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme) // Se debe instalar el paquete Nuget "JwtBearer"
//    .AddJwtBearer(opt => opt.TokenValidationParameters = new TokenValidationParameters()
//    {
//        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ClaveDeSeguridadConUnMínimoDe256Bits")),
//        ValidateAudience = false,
//        ValidateIssuer = false,
//        ValidateIssuerSigningKey = true
//    });


builder.Services.AddControllers();

var app = builder.Build();

// - Si se implementa autenticación
//app.UseAuthentication();

// Uso de controllers
app.MapControllers();

// Ejemplo de uso de minimal API
// app.MapGet("/api/estudiantes", async (AcademiaDbContext context) =>
// {
//     await context.Estudiantes.ToListAsync();
// });

app.Run();



/* Luego, para autenticarse, se debe generar la petición POST a "login",
 * copiar el código y, cuando se realiza la petición GET, pegar la clave
 * secreta en la sección "Authorization", eligiendo el tipo "Bearer Token" */
