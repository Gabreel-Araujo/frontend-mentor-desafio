const btnMenuOpen = document.querySelector(".open");
const btnMenuClose = document.querySelector(".close");
const navContent = document.querySelector(".nav-menu");
const navUl = document.querySelector("ul");
const btn_minus = document.querySelector("#btn-minus");
const btn_more = document.querySelector("#btn-more");
const contentSpan = document.querySelector("#content-span")
const btn_prev = document.getElementById("btnPrev");
const btn_next = document.getElementById("btnNext");
const carouselImages = document.querySelectorAll(".img-thumb img");
const imgThumb = document.querySelector(".img-thumb");
const imgPrev = document.querySelectorAll(".prev-img");
const imgSelect = document.querySelector(".slide_on");
const btn_addCart = document.getElementById("btn_addCart");
const btn_openCart = document.querySelector(".cart_img");
const market_content = document.querySelector(".market_cart");
const indicator = document.querySelector(".indicator");
const qtd_item = document.querySelector(".qtd_item");
const product_check = document.querySelector(".product-check")
const content_empty = document.querySelector(".content_empty")



let visibleIndicator = false;

const addItemCart = ()=>{
  visibleIndicator = !visibleIndicator

  
  let newValue = parseInt(contentSpan.textContent)
  
  if(visibleIndicator){
    product_check.style.display = "flex";
    content_empty.style.display = "none"
    qtd_item.innerHTML = newValue;
    indicator.style.display = "block"
  } else{
    indicator.style.display = "none"
  }

}
btn_addCart.addEventListener("click",addItemCart)

const openCart = ()=>{
  itsOpen = !itsOpen
  if(itsOpen){
    market_content.style.display = "block"
  }else{
    market_content.style.display = "none"
  }
}

btn_openCart.addEventListener("click", openCart)

const changeImage = (event) => {
  
    const elementClick = event.target;
    const src = elementClick.src;

    imgSelect.setAttribute("src",src)

    console.log(elementClick);
    console.log("src" + src);
};

imgPrev.forEach((element) => {
  element.addEventListener("click", changeImage);
});


//open menu
let itsOpen = false;

const openMenu = ()=>{
    itsOpen = !itsOpen;
    
   if(itsOpen){
    
     navContent.style.marginLeft = "0";
     navContent.style.animationName = "slideMenu"
    
   }else{
    navContent.style.marginLeft = "-60vw"
    navContent.style.animationName = "hiddenMenu"
   }
}
const closeMenu = ()=>{

  if(itsOpen ){
    openMenu()
  }
}
/* button mais e menos */
const addQuantity = ()=>{
    const valorAtual = parseInt(contentSpan.innerHTML)
    const novoValor = valorAtual + 1;

    contentSpan.innerHTML = novoValor;
}
const reduceQuantity = ()=>{
  const valorAtual = parseInt(contentSpan.innerHTML)
    if(valorAtual == 0){
      return valorAtual;
    }
    const novoValor = valorAtual - 1;
  contentSpan.innerHTML = novoValor;
}

//carrossel de imagem
let currentIndex = 0 ;
let imgWidth =imgThumb.offsetWidth;

const handleNextSlide = () =>{
  currentIndex = (currentIndex + 1) % carouselImages.length;

  carouselImages.forEach((image) => {
    image.style.transition = "transform 0.2s ease-in-out";
    image.style.transform = `translateX(${-currentIndex * imgWidth}px)`;
  });
}
const handlePrevSlide = () =>{
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  
  carouselImages.forEach((image) => {
    image.style.transition = "transform 0.2s ease-in-out";
    image.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  });
}

btn_next.addEventListener("click", handleNextSlide)
btn_prev.addEventListener("click", handlePrevSlide)

