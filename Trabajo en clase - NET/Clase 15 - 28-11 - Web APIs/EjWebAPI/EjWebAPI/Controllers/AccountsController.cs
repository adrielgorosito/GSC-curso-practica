using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EjWebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class AccountsController : ControllerBase
    {
        //[AllowAnonymous]     // Solo para autenticación
        [HttpPost("login")]         // Normalmente se usa el POST para el login
        public ActionResult Login()
        {
            // Esto está simplificado (no acepta credenciales):
            // Login podría acceder a usuario y contraseña y luego
            // con el dbContext validar si el usuario existe y es válido
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ClaveDeSeguridadConUnMínimoDe256Bits"));
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var securityToken = new JwtSecurityToken(
                claims: new[] { new Claim(ClaimTypes.Name, "admin")},
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: signingCredentials);

            var tokenHandler = new JwtSecurityTokenHandler();
            string jwt = tokenHandler.WriteToken(securityToken);

            return this.Ok(jwt);
        }
    }
}
