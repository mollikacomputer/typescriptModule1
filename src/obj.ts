const user: {
  //   readonly organization: string;
  organization: "Mollika Computer"; // value => type: literal types
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Mollika Computer",
  firstName: "Ranjit",
  middleName: "Kumar",
  lastName: "Mandal",
  isMarried: true,
};

user.firstName = "Mollika";
console.log(user);
