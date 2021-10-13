document.write(typeof "10" + 5);

document.write(typeof 2E310);

document.write(typeof -3E310);

document.write(typeof 10 > 2);

document.write(typeof 10 < 2);

document.write(typeof 10 == 10);

document.write(typeof 3 == 10);

console.log(typeof 2 + 2);

console.log(typeof 10 > 2);

x = 10;
y = 10;
document.write(typeof x === y);

w = 10;
z = "8";
document.write(typeof w === z);

a = 10;
b = "10";
document.write(typeof a === b);

f = 10;
g = 9;
document.write(typeof f === g);

document.write(typeof 5 > 2 && 10 > 4);

document.write(typeof 5 > 10 && 10 > 4);

document.write(typeof 5 > 10 || 10 > 4);

document.write(typeof 5 > 10 || 10 > 20);

function not_Function1() {
    document.getElementById("Nott").innerHTML = ! (20 > 10);
}

function not_Function2() {
    document.getElementById("Notf").innerHTML = ! (5 > 10);
}