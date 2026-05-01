// function
// arow function, normal function;
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
const gogFol = addNormal(55, 55);

// console.log(gogFol);

// object => function => method

const poorUser = {
  name: "Ramen",
  balance: 0,
  // working this code from chat gpt
  addBalance(value: number): number {
    this.balance = this.balance + value;
    return this.balance;
  },

  //   this code not working
  //   addBalance(value: number): number {
  //     const totalBalance = this.balance + value;
  //     return totalBalance;
  //   },
};

poorUser.addBalance(100000);
console.log(poorUser);

const arr: number[] = [1, 4, 6];
const sqrArray = arr.map((elem: number): number => elem * elem);

console.log(sqrArray);
