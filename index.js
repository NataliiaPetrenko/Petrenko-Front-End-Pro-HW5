let userReply = Number(prompt("Hi! Kindly enter the hours you'd like to count:"));

while (!(Number(userReply))) {
    userReply = Number(prompt("Hi! Kindly enter the hours you'd like to count:"));
}

const userSeconds = Math.floor(userReply * 3600);

alert (`We have ${userSeconds} seconds in ${userReply} hour(s)`);

