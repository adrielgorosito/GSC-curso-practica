namespace Utils
{
    public class Estudiante
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Apellido { get; set; }
        public DateOnly FechaNacimiento { get; set; }
        public int Edad
        {
            get
            {
                var hoy = DateOnly.FromDateTime(DateTime.Today);
                int edad = hoy.Year - this.FechaNacimiento.Year;
                // var cumpleaniosAlAnioActual = new DateOnly(hoy.Year, this.FechaNacimiento.Month, this.FechaNacimiento.Day);
                // Método viejo ^^^^

                DateOnly diaDeHoyAlAnioNacimiento = hoy.AddYears(-edad);
                // Bug corregido de nacimiento en año bisiesto

                if (this.FechaNacimiento > diaDeHoyAlAnioNacimiento)
                    edad--;
                return edad;
            }
        }

        public int CalcularEdad(DateOnly fechaEdad)
        {
            int edad = fechaEdad.Year - this.FechaNacimiento.Year;

            DateOnly diaDeHoyAlAnioNacimiento = fechaEdad.AddYears(-edad);

            if (this.FechaNacimiento > diaDeHoyAlAnioNacimiento)
                edad--;
            return edad;
        }
    }
}
