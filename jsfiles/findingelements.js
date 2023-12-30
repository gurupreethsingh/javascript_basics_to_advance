console.log("finding elements");

// find my heading.
// querySelector()

// var heading = document.querySelector(".myheading");

// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.textContent);

// heading.style.color = "red";
// heading.style.backgroundColor = "lightblue";
// heading.style.padding = "20px";
// heading.style.border = "1px solid black";

// var paragraph = document.querySelector("#mypara");
// console.log(paragraph);

// paragraph.innerHTML = "Amrutha welcome to javascript";
// paragraph.textContent = "<span>Welcome</span>";

// events - click , double , mouseover, mouseout , mousein, mousewheel.

function changecssofheading() {
  var heading = document.querySelector(".myheading");

  console.log(heading);
  console.log(heading.innerHTML);
  console.log(heading.textContent);

  heading.style.color = "red";
  heading.style.backgroundColor = "lightblue";
  heading.style.padding = "20px";
  heading.style.border = "1px solid black";
}

function changetooriginal() {
  var heading = document.querySelector(".myheading");

  console.log(heading);
  console.log(heading.innerHTML);
  console.log(heading.textContent);

  heading.style.color = "";
  heading.style.backgroundColor = "";
  heading.style.padding = "";
  heading.style.border = "";
}
