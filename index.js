let userReply = Number(prompt("Hi! Kindly enter the hours you'd like to count:"));

while (!(Number(userReply))) {
    userReply = Number(prompt("Hi! Kindly enter the hours you'd like to count:"));
}

const userSeconds = Math.floor(userReply * 3600);

alert (`We've got ${userSeconds} seconds from ${userReply} hour(s)`);

