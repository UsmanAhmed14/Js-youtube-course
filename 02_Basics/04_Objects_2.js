// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "sam@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Usman",
      lastName: "Ahmed",
    },
  },
};

// console.log(regularUser.fullName.userFullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = { ...obj1, ...obj2 }; //🥛 phenkenge tou spread hojayega. same as arrays

// console.log(obj3);

// database se aksar array of OBJECTS aynge
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "JS in English",
  price: "999",
  courseInstructor: "Sir, Hitesh",
};


// course.courseInstructor

const{courseInstructor: instructor} = course

console.log(instructor);