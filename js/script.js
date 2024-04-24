//Change the background color of the footer to #d7ddf3.
var footer = document.querySelector(".contact");
// console.log(footer.outerHTML);
footer.style.backgroundColor = "#d7ddf3";

//Change the color of the Instagram icon to #d45bb9
var instaIcon = document.querySelector(".fa-instagram");
instaIcon.style.color = "#d45bb9";

//Change the color of the Facebook icon to #6a99b5.
var fbIcon = document.querySelector(".fa-facebook");
fbIcon.style.color = "#6a99b5";

//Select the opening hours paragraph in the footer. Apply a 1px solid border with a color of #d45bb9 around the paragraph.
var storeHours = document.querySelector("footer p");
storeHours.style.border = "1px solid #d45bb9";

//Add 1em padding to the same opening hours paragraph.
storeHours.style.padding = "1em";
