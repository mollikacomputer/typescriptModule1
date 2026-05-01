type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female" | "other"; // union
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};
const user1: User = {
  id: 123,
  name: {
    firstName: "Ranjit",
    lastName: "Mandal",
  },
  gender: "male",
  contactNo: "01300241001",
  address: {
    division: "Madaripur",
    city: "sadar",
  },
};

const user2: User = {
  id: 345,
  name: {
    firstName: "Kamal",
    lastName: "Khan",
  },
  contactNo: "019000000",
  gender: "male",
  address: {
    division: "Dhaka",
    city: "Madaripur",
  },
};
// console.log(user1);
// console.log(user2);
// type elias use with function
type NumberFunc = (num1: number, num2: number) => number;
const add: NumberFunc = (num1, num2) => num1 + num2;

console.log(add(55, 75));
