const users=[
    {name:"Alice",active:false},
    {name:"Bob",active:false},
    {name:"Charlie",active:false},
];
users.forEach((user)=>(user.active=true));
console.log(users);

const userDetails=[
    {name:"Alice",Emaill:"alice@email.com"},
    {name:"Bob",Emaill:"bob@email.com"},
    {name:"Charlie",Emaill:"charlie@email.com"},
];
const notifications=[];
userDetails.forEach((user) => {
    notifications.push(`Email sent to ${user.name}`);
});
console.log(notifications);