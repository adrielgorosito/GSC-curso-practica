using System;

namespace Clase_12___16_11___Fundamentals.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateOnly AddDayOnly(this DateTime dateTime, int index)
        {
            return DateOnly.FromDateTime(dateTime.AddDays(index));
        }
    }
}
