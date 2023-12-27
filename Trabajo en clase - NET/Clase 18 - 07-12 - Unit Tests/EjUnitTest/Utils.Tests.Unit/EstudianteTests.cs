using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Utils.Tests.Unit
{
    public class EstudianteTests
    {
        public class TheProperty_Edad : EstudianteTests
        {
            [Theory]
            [InlineData("1995-05-03", 28)]
            [InlineData("2000-05-03", 23)]
            [InlineData("2000-12-29", 22)]
            [InlineData("1996-02-29", 27)]
            public void Should_calculate_correctly(string fechaNacimiento, int expected)
            {
                // arrange
                var estudiante = new Estudiante()
                {
                    FechaNacimiento = DateOnly.ParseExact(fechaNacimiento, "yyyy-MM-dd")
                };

                // act
                int actual = estudiante.Edad;

                // assert
                actual.Should().Be(expected);
            }
        }

        public class TheMethod_CalcularEdad()
        {
            [Theory]
            [InlineData("1995-05-03", "2023-12-27", 28)]
            [InlineData("2000-05-03", "2023-12-27", 23)]
            [InlineData("2000-12-29", "2023-12-27", 22)]
            [InlineData("1996-02-29", "2023-12-27", 27)]
            public void Should_calculate_correctly(string fechaNacimiento, string fechaEdad, int expected)
            {
                // arrange
                var estudiante = new Estudiante()
                {
                    FechaNacimiento = DateOnly.ParseExact(fechaNacimiento, "yyyy-MM-dd")
                };

                // act
                int actual = estudiante.CalcularEdad(DateOnly.ParseExact(fechaEdad, "yyyy-MM-dd"));

                // assert
                actual.Should().Be(expected);
            }
        }
    }
}
