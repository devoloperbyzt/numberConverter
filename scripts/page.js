const electron = require("electron"); // electron kütüphane tanımı

//elementlerin tanımı
const logo = document.getElementById("text");
const githubButton = document.getElementById("githublogo");
const LinkdinButton = document.getElementById("linkedinlogo");
const InputValue = document.getElementById("InputValue");
const result = document.getElementById("result");
const convertedNumber = document.getElementById("convertedNumber");
const convertingNumber = document.getElementById("convertingNumber");
const convertButton = document.getElementById("convertButton");

// 2lik sistemden 10luk sisteme çevirme
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// 2lik sistemden 16luk sisteme çevirme
function binaryToHex(binary) {
  return parseInt(binary, 2).toString(16).toUpperCase();
}

//10luk sistemden 2liğe çevirme
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

//10luk sistemden 16lığa çevirmeçevirme
function decimalToHex(decimal) {
  return parseInt(decimal, 10).toString(16).toUpperCase();
}

//16lık sistemden 10lukk çevirmeçevirme
function hexToDecimal(hexaDecimal) {
  return parseInt(hexaDecimal, 16);
}

//16lık sistemden 2liğe çevirme
function hexToBinary(hexaDecimal){
return decimalToBinary(hexToDecimal(hexaDecimal));
}

convertButton.addEventListener("click", () => {
  const value = InputValue.value;
  const select1 = convertingNumber.value;
  const select2 = convertedNumber.value;
  if (value != "") {
    if (select1 == "Two")
      if (select2 == "Two") result.innerHTML = value;
      else if (select2 == "Ten") result.innerHTML = binaryToDecimal(value);
      else if (select2 == "Sixteen") result.innerHTML = binaryToHex(value);

    if (select1 == "Ten")
      if (select2 == "Two") result.innerHTML = decimalToBinary(value);
      else if (select2 == "Ten") result.innerHTML = value;
      else if (select2 == "Sixteen") result.innerHTML = decimalToHex(value);
    
    if (select1 == "Sixteen")
      if (select2 == "Two") result.innerHTML = hexToBinary(value);
      else if (select2 == "Ten") result.innerHTML = hexToDecimal(value);
      else if (select2 == "Sixteen") result.innerHTML = value;

  } else if (value == "") {
    result.innerHTML = "Null";
  }
});

//inputa sadece rakamları ve 16lık sayı sisteminde bulunan A-F harflerinin girişine izin verme
InputValue.addEventListener("input", function (e) {
  const inputValue = e.target.value;
  const filteredValue = inputValue.replace(/[^0-9A-F]/g, "");
  e.target.value = filteredValue;
});

//buttona tıkalnınca linke gönderme
githubButton.addEventListener("click", () => {
  electron.shell.openExternal("https://github.com/devoloperbyzt");
});

LinkdinButton.addEventListener("click", () => {
  electron.shell.openExternal(
    "https://www.linkedin.com/in/ahmet-beyaz%C4%B1t-s%C3%BCleymano%C4%9Flu-906459263/"
  );
});
