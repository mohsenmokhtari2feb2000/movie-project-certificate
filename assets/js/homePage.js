const signInBtn = document.querySelector(".sign-in-btn");
const heroContainerEle = document.querySelector(".hero");
const closeLogInEle = document.querySelector(".sign-in-close-btn");
const loginPopEle = document.querySelector(".login-pop");
const freeMovieTitle = document.querySelector(".free-movie");
const spanInQuotesEle = document.querySelector(".span-in-quotes");
const serialsEle = document.querySelector(".serials");
const SignUpbtnInPop = document.querySelector(".sign-up-btn-in-pop");
const formEle = document.querySelector(".form");
const navLog = document.querySelector(".nav-log");
let btnInNav = document.querySelectorAll(".logged-in");
const goToTopBtn = document.querySelector(".go-to-top");
console.log("hi");
window.addEventListener("scroll", checkHeight);
function checkHeight() {
  if (window.scrollY > 200) {
    goToTopBtn.style.display = "flex";
  } else {
    goToTopBtn.style.display = "none";
  }
}
goToTopBtn.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ! whole app
if (localStorage.getItem("isUserLoggedIn") === "true") {
  signInBtn.classList.add("green-c");

  btnInNav.forEach((ele) => {
    ele.remove();
  });
  const logOutEle = document.createElement("button");
  logOutEle.innerText = "Log Out";
  logOutEle.classList.add("log-Out-c");
  navLog.append(logOutEle);
  logOutEle.addEventListener("click", (e) => {
    localStorage.setItem("isUserLoggedIn", "loggedOut");
    e.target.remove();
    // !
    const signInAnchor = document.createElement("a");
    signInAnchor.classList = "logged-in nav-link ms-lg-1";
    signInAnchor.innerText = "Sign In";
    signInAnchor.setAttribute("href", "./signin/log/signin.html");
    const signupAnchor = document.createElement("a");
    signupAnchor.classList = "logged-in nav-link ms-lg-1";
    signupAnchor.innerText = "Sign Up";
    signupAnchor.setAttribute("href", "./signin/log/signup.html");
    navLog.append(signInAnchor, signupAnchor);
    signInBtn.classList.remove("green-c");
  });
}
signInBtn.addEventListener("click", (e) => {
  // localStorage.setItem("isUserLoggedIn", "loggedOut");
  if (localStorage.getItem("isUserLoggedIn") === "true") {
    window.scrollTo({ top: 1700, behavior: "smooth" });
  } else {
    e.target.style.translate = "1000px";
    loginPopEle.style.translate = "0";
    closeLogInEle.style.translate = "1100px -100px";
    freeMovieTitle.style.opacity = "0";
    closeLogInEle.style.visibility = "visible";
    e.target.classList.remove("sign-in-btn-anim");
  }
});
closeLogInEle.addEventListener("click", (e) => {
  loginPopEle.style.translate = "-1100px";
  signInBtn.style.translate = "0";
  e.target.style.translate = "1300px 0";
  freeMovieTitle.style.opacity = "1";
  e.target.style.visibility = "hidden";
  signInBtn.classList.add("sign-in-btn-anim");
});
const dialogs = [
  "Pulp Fiction: You Won't Know The Facts Until You've Seen The Fiction",
  "Inception: The Dream Is Real",
  " Fight Club: Mischief. Mayhem. Soap.",
  " The Lord of the Rings: One Ring To Rule Them All",
  " Forrest Gump: The World Will Never Be The Same Once You've Seen It Through The Eyes Of Forrest Gump.",
  " The Shawshank Redemption: Fear Can Hold You Prisoner. Hope Can Set You Free.",
  " The Godfather: An Offer You Can't Refuse",
  "The Dark Knight: Welcome To A World Without Rules",
  "12 Angry Men: Life Is In Their Hands. Death Is On Their Minds",
];
let count = 0;
setInterval(() => {
  spanInQuotesEle.innerText = dialogs[count];
  count++;
  if (count == dialogs.length) {
    count = 0;
  }
}, 3000);
// ! IMDB API ____________________________________________________________

const options = {
  method: "GET",
  url: "https://api.tvmaze.com/shows",
};

const fetch = async () => {
  try {
    const response = await axios.request(options);
    // console.log(response.data[1]);
    for (let i = 0; i < 5; i++) {
      const cardEle = document.createElement("div");
      cardEle.setAttribute("class", "card");
      serialsEle.append(cardEle);
      const imgELeForCard = document.createElement("img");
      imgELeForCard.setAttribute("src", response.data[i].image.medium);
      cardEle.append(imgELeForCard);
      imgELeForCard.classList.add("img-for-cards");
    }
  } catch (error) {
    console.error(error);
  }
};
fetch();
// sign in app

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = e.target.children[1].value.trim();
  const passWord = e.target.children[2].value.trim();
  const fetchLogin = async () => {
    const res = await axios.get(
      "https://6658b6025c36170526499550.mockapi.io/users1"
    );
    // console.log(res.data);
    const doesUserExist = res.data.find((user) => user.username === userName);

    const isPassOk = res.data.find((user) => user.password === passWord);

    if (doesUserExist) {
      if (isPassOk) {
        // !=====
        let btnInNav = document.querySelectorAll(".logged-in");
        // !=====
        console.log("welcome");
        loginPopEle.style.translate = "-1100px";
        signInBtn.style.translate = "0";
        closeLogInEle.style.translate = "1300px 0";
        freeMovieTitle.style.opacity = "1";
        closeLogInEle.style.visibility = "hidden";
        signInBtn.classList.add("green-c");
        localStorage.setItem("isUserLoggedIn", "true");
        const logOutEle = document.createElement("button");
        logOutEle.innerText = "Log Out";
        logOutEle.classList.add("log-Out-c");
        navLog.append(logOutEle);
        logOutEle.addEventListener("click", (e) => {
          localStorage.setItem("isUserLoggedIn", "loggedOut");
          e.target.remove();
          // !
          const signInAnchor = document.createElement("a");
          signInAnchor.classList = "logged-in nav-link ms-lg-1";
          signInAnchor.innerText = "Sign In";
          signInAnchor.setAttribute("href", "./signin/log/signin.html");
          const signupAnchor = document.createElement("a");
          signupAnchor.classList = "logged-in nav-link ms-lg-1";
          signupAnchor.innerText = "Sign Up";
          signupAnchor.setAttribute("href", "./signin/log/signup.html");
          navLog.append(signInAnchor, signupAnchor);
          signInBtn.classList.remove("green-c");
        });
        btnInNav.forEach((ele) => {
          ele.remove();
        });
      } else {
        console.log("password is wrong");
        e.target.children[2].value = "";
      }
    } else {
      console.log("user does not exist");
      alert("user does not exist");
      e.target.children[1].value = "";
      e.target.children[2].value = "";
    }
  };
  fetchLogin();
});
