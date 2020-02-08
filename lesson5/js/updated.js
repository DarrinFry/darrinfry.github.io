
let timeStamp = new Date();

let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = dayName[timeStamp.getDay()];

let date = timeStamp.getDate();

let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = monthName[timeStamp.getMonth()];

let year = timeStamp.getFullYear();

document.getElementById("last_modified").innerHTML = "Last Modified: " + day + ", " + date + " " + month + " " + year;
