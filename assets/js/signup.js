const coverEle = document.querySelector(".scroll p");
const bottomEle = document.querySelector(".allin");
const formEle = document.querySelector("form");
window.addEventListener("mousewheel", (e) => {
  coverEle.style.transform = "translate(0,-800px)";
  coverEle.style.opacity = "0.1";
  coverEle.style.scale = "2";
  bottomEle.style.transform = "translate(0,0)";
});
window.addEventListener("click", (e) => {
  coverEle.style.transform = "translate(0,-800px)";
  coverEle.style.opacity = "0.1";
  coverEle.style.scale = "2";
  bottomEle.style.transform = "translate(0,0)";
});
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
// console.dir(formEle);
formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUser = new User(
    e.target.children[1].children[0].value.trim(),
    e.target.children[2].children[0].value.trim()
  );
  //! start

  try {
    const data = async () => {
      const res = await axios.get(
        "https://6658b6025c36170526499550.mockapi.io/users1"
      );
      console.log(res.data);
      const userExist = res.data.find(
        (user) => user.username === e.target.children[1].children[0].value
      );
      if (userExist) {
        console.log("user exist");
      } else {
        const post = await axios.post(
          "https://6658b6025c36170526499550.mockapi.io/users1",
          newUser
        );
        console.log(post);
        if (post.status == 201) {
          window.location.href = "./signin.html";
        }
      }
    };
    data();
  } catch (error) {
    console.log(error);
  }

  //! end
});
