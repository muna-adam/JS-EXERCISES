function userdata() {
  alert("welcome back");

  return { name: "ali", id: 2345, city: "bosaso" };
}

const user = userdata();
console.log(user);

function dibudhac(callback) {
  setTimeout(() => {
    console.log("kadib 2 second soo muuqo");
  }, 2000);
}

dibudhac();

console.log("kusoo dhawoow gacmo furan");
