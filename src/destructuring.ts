const user = {
  id: 123,
  name: {
    firstName: "Ranjit",
    middleName: "Kumar",
    lastName: "Mandal",
  },
  gender: "male",
  favouriteColor: "Black",
};
// const myFavouritColor = user.favouriteColor;
const {
  favouriteColor: myFavouritColor,
  name: { middleName },
} = user; // name Eleas
// console.log(myFavouritColor, middleName);

const friends = ["karim", "rahim", "mohin"];
// const myBestFriend = friends[1]; normal way
// const [, myBestFriend] = friends;
// // ব্যহার না হলে স্কিপ করতে পারি শেষেরটা কিছুই করতে হবে না
const [, , myBestFriend] = friends; // ব্যহার না হলে স্কিপ করতে পারি
console.log(myBestFriend);
