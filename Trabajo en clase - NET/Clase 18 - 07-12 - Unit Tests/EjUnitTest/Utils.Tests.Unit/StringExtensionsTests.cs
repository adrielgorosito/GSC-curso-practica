using FluentAssertions;

namespace Utils.Tests.Unit
{
    public class StringExtensionsTests
    {

        public class TheMethod_CountCharOccurrences : StringExtensionsTests
        {
            [Fact]
            public void Should_return_count_of_char_occurences()
            {
                // arrange
                const string sentence = "Curso full stack";
                const char @char = 'a';

                // act
                int actual = sentence.CountCharOccurrences(@char);

                // assert
                Assert.Equal(1, actual);
            }

            [Theory]
            [InlineData('a', 1)]
            [InlineData('l', 2)]
            [InlineData('u', 3)]
            public void Should_return_count_of_char_occurences_v2(char @char, int expected)
            {
                // arrange
                const string sentence = "Curso full stack GSC+UTN!";

                // act
                int actual = sentence.CountCharOccurrences(@char);

                // assert
                // Assert.Equal(expected, actual);
                actual.Should().Be(expected);
            }
        }

        
    }
}