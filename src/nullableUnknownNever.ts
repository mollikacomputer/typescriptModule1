// tutorial: 1.13
// //1. nullable type
// //2. unknown type
// //3. never type
// //1. nullable type example
// const getUser = (input: string | null) => {
//   if (input) {
//     console.log(`From Db: ${input}`);
//   } else {
//     console.log("From DB: All USER");
//   }
// };
// // getUser("Ranjit Kumar Mandal");
// getUser(null);
// //2. unknown type example
// const discountCalculator = (input: unknown) => {
//   if (typeof input === "number") {
//     const discountedPrice = input * 0.1;
//     console.log(discountedPrice);
//   } else if (typeof input === "string") {
//     const [discountedPrice] = input.split(" ");
//     console.log(Number(discountedPrice) * 0.1);
//   } else {
//     console.log("Wrong Input");
//   }
// };
// discountCalculator(100);
// discountCalculator("1000 TK");
// discountCalculator(null);

// //3. void
// const throwError = (msg: string): never => {
//   throw new Error(msg);
// };
// throwError("Error...");
