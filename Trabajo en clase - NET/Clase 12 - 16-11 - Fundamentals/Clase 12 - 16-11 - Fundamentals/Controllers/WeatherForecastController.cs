using Microsoft.AspNetCore.Mvc;
using Clase_12___16_11___Fundamentals.Extensions;
using System.ComponentModel.DataAnnotations;

namespace Clase_12___16_11___Fundamentals.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IWebHostEnvironment webHostEnvironment;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWebHostEnvironment webHostEnvironment)
        {
            this._logger = logger;
            this.webHostEnvironment = webHostEnvironment;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            if (!webHostEnvironment.IsEnvironment("Production"))
            {
                return Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    Date = DateTime.Now.AddDayOnly(index),
                    TemperatureC = new Random().GetTemperatureRandom(),
                    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
                })
            .ToArray();
            }
            else
            {
                throw new ValidationException("Esto no está listo para producción");
            }


            
        }
    }
}
