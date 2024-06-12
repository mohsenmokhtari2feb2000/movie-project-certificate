const signInBtn = document.querySelector(".sign-in-btn");
const heroContainerEle = document.querySelector(".hero");
const closeLogInEle = document.querySelector(".sign-in-close-btn");
const loginPopEle = document.querySelector(".login-pop");
const freeMovieTitle = document.querySelector(".free-movie");
const spanInQuotesEle = document.querySelector(".span-in-quotes");
const serialsEle = document.querySelector(".serials");
signInBtn.addEventListener("click", (e) => {
  e.target.style.translate = "1100px";
  console.dir(e.target.nextElementSibling);
  loginPopEle.style.translate = "0";
  closeLogInEle.style.translate = "1200px -100px";
  freeMovieTitle.style.opacity = "0";
  closeLogInEle.style.visibility = "visible";
});
closeLogInEle.addEventListener("click", (e) => {
  loginPopEle.style.translate = "-1100px";
  signInBtn.style.translate = "0";
  e.target.style.translate = "1300px 0";
  freeMovieTitle.style.opacity = "1";
  e.target.style.visibility = "hidden";
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
  url: "https://imdb188.p.rapidapi.com/api/v1/getWeekTop10",
  headers: {
    "x-rapidapi-key": "9649235bc3mshdaa9c884b100fedp152d3bjsnc95206886936",
    "x-rapidapi-host": "imdb188.p.rapidapi.com",
  },
};

const fetch = async () => {
  try {
    const response = await axios.request(options);
    // console.log(response.data.data[0].primaryImage.imageUrl);
    for (let i = 0; i < 5; i++) {
      const cardEle = document.createElement("div");
      cardEle.setAttribute("class", "card");
      serialsEle.append(cardEle);
      const imgELeForCard = document.createElement("img");
      imgELeForCard.setAttribute(
        "src",
        response.data.data[i].primaryImage.imageUrl
      );
      cardEle.append(imgELeForCard);
      imgELeForCard.classList.add("img-for-cards");
    }
  } catch (error) {
    console.error(error);
  }
};
// fetch();
