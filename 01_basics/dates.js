// dates in JavaScript

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date(2023, 0, 23, 5, 3);

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myNewDate = new Date("2022-01-14");
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(myCreatedDate.getTime()); // this will give milisecond

// to change in seconds

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());

// newDate.toLocaleString('default', {
//     weekday: 'long',
//     month: 'long',
//     timeZone: 'absolute'
// });

// // ------------Interview questions-----------------------------

/*
1. What is the Date object in JavaScript, and what is its purpose?

Answer: The Date object is a built-in object in JavaScript used for working with dates and times. It provides methods for creating, manipulating, and formatting dates.

2. How can you create a new Date object in JavaScript?

Answer: You can create a new Date object by using the new Date() constructor. For example:

javascript

let currentDate = new Date();
3. What are the parameters you can pass to the Date constructor to create a specific date and time?

Answer: You can pass various parameters to the Date constructor to create a specific date and time, including year, month, day, hour, minute, second, and milliseconds. For example:

javascript

let specificDate = new Date(2023, 9, 5, 10, 30, 0, 0); // October 5, 2023, 10:30:00
4. How can you get the current date and time as a string in a specific format using the Date object?

Answer: You can use the Date object's methods like getMonth(), getDate(), getFullYear(), getHours(), getMinutes(), and getSeconds() to obtain individual date and time components and then format them into a string as desired.

5. Explain the difference between UTC and local time in JavaScript's Date object.

Answer: UTC (Coordinated Universal Time) is a standardized time, while local time is the time observed in a specific time zone. JavaScript's Date object can represent both UTC and local time, and you can switch between them using methods like getUTC*() and get*().

6. How can you obtain the current timestamp (milliseconds since January 1, 1970) using the Date object?

Answer: You can obtain the current timestamp in milliseconds using the getTime() method of the Date object. For example:

javascript

let timestamp = new Date().getTime();
7. Explain the purpose of the Date.parse() method, and how does it work?

Answer: The Date.parse() method parses a date string and returns the corresponding timestamp in milliseconds. It can accept date strings in various formats and timezones.

8. What is the significance of the "epoch" time (January 1, 1970) in JavaScript's Date object?

Answer: The "epoch" time, which is January 1, 1970, is the reference point for measuring timestamps in JavaScript. It serves as the starting point for calculating timestamps.

9. How can you calculate the difference between two dates using the Date object?

Answer: You can calculate the difference between two dates by subtracting one Date object from another, which results in the difference in milliseconds. You can then convert this difference into days, hours, minutes, etc., as needed.

10. Explain the concept of timezones in the Date object and how to work with them.

Answer: Timezones represent the offset from UTC and can be accounted for using the getTimezoneOffset() method to obtain the timezone offset in minutes. Additionally, you can use libraries like "moment-timezone" for more advanced timezone handling.

11. How can you format a Date object as a string in a specific date and time format in JavaScript?

Answer: You can use the toLocaleDateString() and toLocaleTimeString() methods to format the date and time portions of a Date object, respectively. You can also use libraries like "date-fns" or "moment.js" for more advanced formatting.

12. What is the purpose of the Date.UTC() method, and how does it differ from the regular Date constructor?

Answer: The Date.UTC() method allows you to create a Date object with a specified date and time in UTC format. It takes the same parameters as the regular Date constructor but always interprets them as UTC values.

13. How can you add or subtract days, months, or years to/from a Date object in JavaScript?

Answer: You can add or subtract days, months, or years to/from a Date object by using methods like setDate(), setMonth(), and setFullYear(), or by using libraries like "date-fns" or "moment.js" for more advanced date manipulation.

14. Explain the concept of leap years and how to check if a year is a leap year using the Date object.

Answer: Leap years have an extra day (February 29) and occur every four years. You can check if a year is a leap year by creating a Date object for February 29 of that year and verifying if it's valid.

15. How do you get the day of the week (e.g., Monday, Tuesday) from a Date object in JavaScript?

Answer: You can use the getDay() method of the Date object to obtain the day of the week as a number (0 for Sunday, 1 for Monday, and so on). You can then map this number to the corresponding day of the week.

16. How can you set the time portion of a Date object to midnight (00:00:00) in JavaScript?

Answer: You can set the time portion of a Date object to midnight by using the setHours(), setMinutes(), and setSeconds() methods to set the time to 00:00:00.

17. Explain the concept of daylight saving time (DST) and its impact on date and time calculations.

Answer: Daylight saving time is the practice of moving the clocks forward by one hour during certain periods of the year to extend daylight hours. It can affect the time offset and requires careful consideration in date and time calculations.

18. How can you check if a given year, month, and day form a valid date using the Date object?

Answer: You can create a Date object with the provided year, month, and day and check if it is a valid date by comparing the components to the original values. An invalid date will result in unexpected behavior, such as rollovers to the next month.

19. What are the limitations of the Date object in JavaScript when working with dates and times?

Answer: The Date object in JavaScript has limitations, including limited timezone support and limited date and time manipulation capabilities. Libraries like "date-fns" or "moment.js" are often used to overcome these limitations.

20. How can you calculate the age of a person given their birthdate using the Date object?

Answer: To calculate a person's age, you can subtract their birthdate from the current date and then extract the years portion of the resulting duration.

*/
