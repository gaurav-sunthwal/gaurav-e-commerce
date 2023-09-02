// All veriables

let burger = document.querySelector(".burger");
let MobileManu = document.querySelector(".MobileManu");
let close = document.querySelector(".close");
let userIco = document.querySelector(".userIco");
let wishlist = document.querySelector(".wishlist");
let wishlistSec = document.querySelector(".wishlistSec");
let backTopage = document.querySelector(".backTopage");
let prodCard = document.querySelector(".prodCard");
let massage = document.querySelector(".massage");
let delBtn = document.querySelectorAll(".delBtn i");
let wishlistItem = document.querySelector(".wishlistItem");
let icons = document.querySelectorAll(".wishIco i");
let loginPage = document.querySelector(".loginPage");
let onlyforAdmin = document.querySelector(".onlyforAdmin");
let AddItem = document.querySelector(".AddItem");
let AddItemPage = document.querySelector(".AddItemPage");

close.style = "display:none;";
// burger
burger.addEventListener("click", function () {
  MobileManu.style = "display:block;";
  close.style = "display:block;";
  burger.style = "display:none;";
});
// close
close.addEventListener("click", function () {
  MobileManu.style = "display:none;";
  close.style = "display:none;";
  burger.style = "display:block;";
});

icons.forEach(function (icon) {
  massage.style.display = "none";

  icon.addEventListener("click", function () {
    // Toggle between classes on each click
    icon.classList.toggle("fa-solid");

    var idName = this.closest(".product").id;
    var wishlistItem = document.querySelector(`.wishlistSec #${idName}`);

    if (icon.classList.contains("fa-solid")) {
      // Item is being added to the wishlist
      if (!wishlistItem) {
        const productTitle = document.querySelector(
          `#${idName} .tital h5`
        ).textContent;
        const prodImg = document.querySelector(
          `#${idName} .productImg img`
        ).src;
        let price = document.querySelector(`#${idName} p`).textContent;
        let sub = document.querySelector(`#${idName} sub del`).textContent;

        var newElement = document.createElement("div");
        // newElement.classList.add("wishlistItem");
        newElement.id = idName;

        newElement.innerHTML = `
        <div class="wishlistItem" id=${idName}>
                <a href="#">
                  <img class="productImg" src="${prodImg}" alt="macbook"/>
                </a>
                <div class="textCon">
                  <a href="#"><p class="tital">${productTitle}</p></a>
                    <a href="#">
                      <p class="price">${price} <sub><del>${sub}</del></sub></p>
                    </a>
                </div>
                <a href="#"><h3 class="itemNo">1</h3></a>
                <i class="fa-solid fa-trash delBtn"></i>
              </div>
              <hr>
    `;

        wishlistSec.appendChild(newElement);
      }
    } else {
      // Item is being removed from the wishlist
      if (wishlistItem) {
        wishlistItem.remove();
      }
    }
  });
});

// var wishlistItem = document.createElement('div');

wishlistSec.style = "display:none;";
// add classname fa-shake
wishlist.addEventListener("click", function () {
  wishlistSec.style = "display:block;";
  delBtn.forEach(function (delBtn) {
    document.querySelector(".delBtn").addEventListener("click", function () {
      alert("hi");
    });
  });
});
backTopage.addEventListener("click", function () {
  wishlistSec.style = "display:none;";
});

// Scrarching

function searchProducts() {
  // Get the search query from the input field
  var searchText = document.getElementById("searchInput").value.toLowerCase();

  // Get all the product titles
  var productTitles = document.querySelectorAll(".tital h5");

  // Loop through each product title and check if it contains the search query
  for (var i = 0; i < productTitles.length; i++) {
    var title = productTitles[i].textContent.toLowerCase();
    var parentDiv = productTitles[i].closest(".product");

    if (title.includes(searchText)) {
      // If the title contains the search query, show the product
      parentDiv.style.display = "block";
    } else {
      // If the title doesn't contain the search query, hide the product
      parentDiv.style.display = "none";
    }
  }
}

// Attach the searchProducts function to the input element's keyup event
document
  .getElementById("searchInput")
  .addEventListener("keyup", searchProducts);

// relode funthion

function reload() {
  window.location.reload();
}

// only for admin
document.querySelector(".name").addEventListener("click", function () {
  loginPage.style.display = "block";
});
document.querySelector(".loginBtn").addEventListener("click", function () {
  let emailInp = document.querySelector(".emailInp").value;
  let passwordInp = document.querySelector(".passwordInp").value;

  if (
    emailInp === "gauravsunthwal22005@gmail.com" &&
    passwordInp === "gaurav22005"
  ) {
    alert("You are Admin!!");
    loginPage.style.display = "none";
    onlyforAdmin.style.display = "block";
  } else {
    alert("sorry you are not resitered!!");
  }
});

// Add Item itemPageBack
let itemPageBack = document.querySelector(".itemPageBack");
let AddItemBtn = document.querySelector(".AddItemBtn");
let brand = document.querySelector(".brand");
let DisPrice = document.querySelector(".DisPrice");
let MainPrice = document.querySelector(".MainPrice");
let itemInfo = document.querySelector(".itemInfo");
let titalInp = document.querySelector(".titalInp");
let itemImg = document.querySelector(".itemImg");
AddItem.addEventListener("click", function () {
  AddItemPage.style.display = "block";
});

AddItemBtn.addEventListener("click", function () {
  // alert(brand.value)
  let brand = document.querySelector(".brand");
  let DisPrice = document.querySelector(".DisPrice");
  let MainPrice = document.querySelector(".MainPrice");
  let itemInfo = document.querySelector(".itemInfo");
  let titalInp = document.querySelector(".titalInp");
  let itemImg = document.querySelector(".itemImg");
  let secetionName = brand.value;
  let prodtital = titalInp.value;
  // let prodDecPrice = DisPrice.value;
  // let proMainPrice = MainPrice.value;
  // let prodInfo = itemInfo.value;
  // let prodImg = itemImg.value;
  alert(secetionName, prodtital)
  // console.log(
  //   `section name is ${secetionName} prodect tital is : ${prodtital} discount price is : ${prodDecPrice} main price is : ${proMainPrice} and prod info is ${prodInfo} and prod Img src is ${prodImg}`
  // );
  // alert(prodImg)

  //product build
});

itemPageBack.addEventListener("click", function () {
  AddItemPage.style.display = "none";
  // alert("hi")
});
