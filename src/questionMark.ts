// ? : ternary operator: desicion making
// ?? : nullish coalescing operator
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
  if (age >= 21) {
    console.log("You are eligible for married");
  } else {
    console.log("Youre not eligible for married");
  }
};

biyerJonnoEligible(20);
