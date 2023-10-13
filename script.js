let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
function btnActive(el) {
  [...btn].forEach((elment) => {
    elment.classList.remove("active");
  });
  el.classList.add("active");
}
btn[0].onclick = function () {
  productImg.src = "images/image1.png";
  btnActive(this);
};
btn[1].onclick = function () {
  productImg.src = "images/image2.png";
  btnActive(this);
};
btn[2].onclick = function () {
  productImg.src = "images/image3.png";
  btnActive(this);
};
