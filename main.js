const btnHam = document.querySelector('#btnHam');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

btnHam.addEventListener('click', function(){

    if(header.classList.contains('open')){ //close sandwich menu
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }else{ //open sandwich menu
        header.classList.add('open');

        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
})

function handleScroll() {
  // Do something on scroll
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.3) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

//adding image url from api
// const btnMore = document.querySelector('.btMore'); 

// async function start(){
//     const response = await fetch("https://dog.ceo/api/breeds/image/random")
//     const data = await response.json()
//     createBreedList(data)
// }

// start()

// btnMore.addEventListener('click', function(){
//         document.getElementById("more").innerHTML =
//         '<li><img src=${data} alt="dog"/></li>'
// })

let btnMore = document.querySelector(".btnMore");

btnMore.addEventListener('click', fectchPics);

function fectchPics(){
    let showImg = document.querySelector('.showImg')
    showImg.innerHTML = ''

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        // console.log(data[0].url)
        let catsImgUrl = data[0].url

        let catsImgEl = document.createElement('img')
        catsImgEl.setAttribute('src', `${catsImgUrl}`)
        
        let showImg = document.querySelector('.showImg')
        showImg.appendChild(catsImgEl)
    })
    .catch(err => console.log(err))
}