using System.ComponentModel.DataAnnotations;

namespace EjEfCore2.Domain
{
    public class Estudiante
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set;}
        public int Legajo { get; set;}
        public DateOnly FechaNacimiento { get; set; }
    }
}
