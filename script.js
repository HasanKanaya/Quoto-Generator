// variables
let quotos = [
  "Remember, today is the tomorrow you worried about yesterday.",
  "If you are born poor, it's not your mistake, but if you die poor it's your mistake.",
  "You should learn how to code it's better for you and for your brain",
];
let authors = ["__Dale Carnegie", "__Bill Gates", "__Hasan Kanaya"];
let randomNum = Math.floor(Math.random() * 3);
let textQuoto = document.querySelector(".content .text p").children[1];
let authorQuoto = document.querySelector(".author");
// variables

// Changing the quoto
textQuoto.innerHTML = quotos[randomNum];
authorQuoto.innerHTML = authors[randomNum];
// Changing the quoto

// jQuery next button
$("button.next").on("click", function () {
  $(".content").fadeOut("slow", function () {
    randomNum = Math.floor(Math.random() * 3);
    textQuoto.innerHTML = quotos[randomNum];
    authorQuoto.innerHTML = authors[randomNum];
  });
  $(".content").fadeIn("slow");
});
// jQuery next button
