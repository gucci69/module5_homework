let users = new Map();
users.set("student 1", "grade A");
users.set("student 2", "grade B");
users.set("student 3", "grade A");
users.set("student 4", "grade B");
users.set("student 5", "grade A");
users.set("student 6", "grade C");
users.set("student 7", "grade A");

for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}