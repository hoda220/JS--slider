// Get Slider Items | Array.from[ES6 Features]
let slideImg = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number Of Slides
let slideCount = slideImg.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.querySelector(".slide-number");

// Previous And Next Buttons
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

// Handle Click on previous and next
prev.onclick = prevSlide;
next.onclick =  nextSlide;

// Create The Main UL Element
let paginationElement = document.createElement("ul");

// Set On Created UL Element
paginationElement.setAttribute("id","pagination-ul");

// Create LI Item Based On Slides Count 
for(let i=1;i<=slideCount;i++) {

    // Crrate The LI 
    let paginationitem = document.createElement("li");

    // Set Custom Attribute
    paginationitem.setAttribute("data-index",i);

    // set Item Content
    paginationitem.appendChild(document.createTextNode(i));

    // append Items To The main UL List
    paginationElement.appendChild(paginationitem);
}

    // Add The Element UL Element To The page
    document.getElementById("indicators").appendChild(paginationElement)

    // Get The New Created UL
    let paginationCreatedUL = document.getElementById("pagination-ul");

    // Get Pagination Items | Array.from[ES6 Features]
    let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

    // Loop through All Bullets Items
    for(let i=0;i<paginationBullets.length;i++) {
        paginationBullets[i].onclick = function () {
            currentSlide = parseInt(this.getAttribute("data-index"));
            theChecker();

        }
    }

    // Trigger The Checker Function
    theChecker();


   // Next Slide Function 
    function prevSlide() {
        if(prev.classList.contains("disabled")) {
 
            return false

        }else {

      currentSlide--;
      theChecker();
        
    }
 }
   // prev Slide Function 
    function nextSlide() {

        if(next.classList.contains("disabled")) {
 
            return false

        }else {

      currentSlide++;
      theChecker();
        
    }
}

// Created The Checker Function
    function theChecker() {

        // Set T he Slide Number
        slideNumberElement.textContent = `Slide #` + (currentSlide) + ` of ` + (slideCount);

        // Remove All Active Classes
        removeAllActive()

        // Set Active Class On Current Slide
        slideImg[currentSlide - 1].classList.add("active");

        // Set Active Class On Current Pagination Item
        paginationCreatedUL.children[currentSlide - 1].classList.add("active");

        // Check if Current Slide Is The First
        if(currentSlide === 1) {
            
            // Add Disabled Class On Previous
            prev.classList.add("disabled");
        }else {
            // Remove Disabled Class On Previous
             prev.classList.remove("disabled");
        }

        // Check if Current Slide Is The Next
        if(currentSlide === slideCount) {
            
            // Add Disabled Class On Next
            next.classList.add("disabled");

         }else {
           // Remove Disabled Class On Previous
           next.classList.remove("disabled");
            }

            // Click on Bullots


        
    }

    // Remove All Active Classes From Images And Pagination Buttons
    function removeAllActive() {
        
        // Loop Through Images 
        slideImg.forEach(function (img) {
            img.classList.remove("active");
        });

        // Loop Through Bullets
        paginationBullets.forEach(function (bullet) {
            bullet.classList.remove("active");
        });
    }
