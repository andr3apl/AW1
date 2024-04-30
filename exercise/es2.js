"use strict";

const userListString = "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Enrico Masala, Antonio Servetti, Eros Fani";

const userList = userListString.split(", ");

const acronymsList = userList.map(name => {
    const nameParts = name.split(" ");
    return nameParts.map(part => part[0]).join("");
});

const users=[];

for(let i=0;i<userList.length;i++)
    users.push({acronyms: acronymsList[i], name: userList[i]});

users.sort((a, b) => {
if (a.acronyms < b.acronyms) return -1;
    if (a.acronyms > b.acronyms) return 1;
    return 0;
});;

console.log(users);
//console.log(userList);