function isValidPassword(password, username) {


if (password.length < 8) {
    return false;
}


if (password.includes(username)) {
    return false;
}

if (password.includes(" ")) {
    return false;
}

return true;

}

console.log(isValidPassword("greeting777", "laura"));
console.log(isValidPassword("greet ing777", "laura"));
console.log(isValidPassword("laura7777", "laura"));
console.log(isValidPassword("greet", "laura"));

