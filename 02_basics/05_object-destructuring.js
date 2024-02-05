const course = {

    courseName: "javascript",
    coursePrice: "1000",
    courseDuration: "10H",
    courseInstructor: "Alif"
}

// console.log(course.courseName, course.coursePrice, course.courseDuration);

const { courseName: courseN, coursePrice: price, courseDuration: duration, courseInstructor: instructor } = course

console.log(courseN, price, duration, instructor)

// how the json looks
// {
//     "name": "course",
//     "course": "js in hindi",
//     "price": "free"

// }