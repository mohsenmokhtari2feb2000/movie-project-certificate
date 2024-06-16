const formEle = document.querySelector("form");
const alertEle = document.querySelector(".alert");
// localStorage.setItem("mohsen", "123123");
// localStorage.setItem("omid", "123");
// localStorage.setItem("amirreza", "77");

// app
// formEle.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //   console.dir(e.target);
//   const userName = e.target.children[1].children[0].value.trim();
//   const passWord = e.target.children[2].children[0].value.trim();
//   if (userName) {
//     if (passWord) {
//       const user = localStorage.getItem(userName);
//       if (passWord === user) {
//         console.log("welcome");
//         console.dir(window.location.href);
//         window.location.href = "./../../index.html";
//       } else {
//         console.log("username or password is wrong");
//         alertEle.innerText = "username or password is wrong";
//       }
//     } else {
//       console.log("enter password");
//       alertEle.innerText = "Enter password";
//     }
//   } else {
//     console.log("enter username");
//     alertEle.innerText = "Enter Username";
//   }
// });

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = e.target.children[1].children[0].value.trim();
  const passWord = e.target.children[2].children[0].value.trim();
  const fetch = async () => {
    const res = await axios.get(
      "https://6658b6025c36170526499550.mockapi.io/users1"
    );
    // console.log(res.data);
    const doesUserExist = res.data.find((user) => user.username === userName);

    const isPassOk = res.data.find((user) => user.password === passWord);

    if (doesUserExist) {
      if (isPassOk) {
        console.log("welcome");
        localStorage.setItem("isUserLoggedIn", "true");
        window.location.href = "./../../index.html";
      } else {
        console.log("password is wrong");
        e.target.children[2].children[0].value = "";
        alertEle.innerText = "Password is wrong ❌";
      }
    } else {
      console.log("user does not exist");
      e.target.children[1].children[0].value = "";
      e.target.children[2].children[0].value = "";
      alertEle.innerText = "User does not exist 👤";
    }
  };
  fetch();
});
