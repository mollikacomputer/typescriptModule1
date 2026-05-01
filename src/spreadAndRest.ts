// // array spread operator
// const friends = ["rahim", "Karim", "Jamal", "Kamal"];
// const schoolFriends = ["Sanjoy", "Monjoy", "Sujan"];
// const collegeFriends = ["Ram", "Rahim", "Kamal"];

// friends.push(...schoolFriends);
// friends.push(...collegeFriends);
// console.log(friends);

// //object spread operator
// const user = {
//   name: "Ranjit Kumar Mandal",
//   phone: "01300241001",
// };

// const othersInfo = {
//   hobby: "outing",
//   favourateColor: "Green",
// };

// const userInfo = { ...user, ...othersInfo };

// console.log(userInfo);

const sentInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Sent invitation to ${friend}`),
  );
};
sentInvitation("Pintu", "Chintu", "Bulbul");
