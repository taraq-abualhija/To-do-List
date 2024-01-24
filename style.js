// const button = document.querySelector("button");
const form = document.querySelector("body > aside > form");
const input = document.querySelector("body > aside > form > div > input[type=text]");
const containerTextText = document.getElementById("containerTextText");


containerText.addEventListener("click", (eo) => {
  if (eo.target.className == "fa-solid fa-trash myicon mergeicon")
    eo.target.parentElement.parentElement.remove();
  else if (eo.target.className == "fa-solid fa-face-angry myicon mergeicon") {
    eo.target.classList.add("change");
    const done = `<i class="fa-solid fa-check"></i>`;
    eo.target.parentElement.parentElement
      .getElementsByClassName("parg")[0].classList.add("lineFinish");
    eo.target.parentElement.innerHTML += done;
  }
  else if(eo.target.className == "fa-solid fa-check")
  { 
    eo.target.classList.add("change")
    const angry=`<i class="fa-solid fa-face-angry myicon mergeicon"></i>`
    eo.target.parentElement.parentElement
      .getElementsByClassName("parg")[0].classList.remove("lineFinish");
    eo.target.parentElement.innerHTML+=angry
  }
  else if(eo.target.className == "fa-solid fa-star myicon")
  {
    eo.target.classList.add("orange")
    containerText.prepend(eo.target.parentElement) 
  }
  else if(eo.target.className == "fa-solid fa-star myicon orange")
  {
    eo.target.classList.remove("orange")
    containerText.append (eo.target.parentElement) 
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const content = `<div class="item">
  <i class="fa-solid fa-star myicon"></i>
  <p class="parg">${input.value}</p>
<div class="merge">
    <i class="fa-solid fa-trash myicon mergeicon"></i>
    <i class="fa-solid fa-face-angry myicon mergeicon"></i>
</div>
</div>  `;

  containerText.innerHTML += content;
  input.value = "";
});
