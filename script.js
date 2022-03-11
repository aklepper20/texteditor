function updateText() {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
}

function makeBold(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
}

function makeItalic(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
}

function makeUnderline(elem) {
  elem.classList.toggle("active");
  let output = document.getElementById("text-output");
  if (output.classList.contains("underline")) {
    output.classList.remove("underline");
  } else {
    output.classList.add("underline");
  }
}

function alignText(elem, alignType) {
  document.getElementById("text-output").style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName("align");
  for (let i = 0; i < alignButtons.length; i++) {
    alignButtons[i].classList.remove("active");
  }
  elem.classList.toggle("active");
}
