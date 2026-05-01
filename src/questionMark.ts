// ? : ternary operator: desicion making
// ?? : nullish coalescing operator null / undefined
// ?. optional chaining
//1. use function for condition
// const biyerJonnoEligible = (age: number) => {
//   if (age >= 21) {
//     console.log("You are eligible for married");
//   } else {
//     console.log("Youre not eligible for married");
//   }
// };

//2. biyerJonnoEligible(20);

// // use ternary operator
// const bibaherJonnoEligable = (age: number) => {
//   const result =
//     age >= 21
//       ? "You are eligable for marriage"
//       : "You are not eligable for marriage";
//   console.log(result);
// };

// bibaherJonnoEligable(20);
//2. ?? : nullish coalescing operator
// null / undefined এই দুইটার উপর কাজ করে
// const userTheme = undefined;
// const userTheme = null;
// const userTheme = "Green Theme";
// const selectedTheme = userTheme ?? "Light theme";

// console.log(selectedTheme);

// ?. optional chaining
const user: {
  name: string;
  address: {
    city: string;
    town: string;
    postalCode?: "string";
  };
} = {
  name: "ramen",
  address: {
    city: "Dhaka",
    town: "Rampura",
    postalCode: "1212",
  },
};
const PostalCode = user?.address?.postalCode;
console.log(PostalCode);
