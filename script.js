function convert() {
  let input = document.getElementById("textInput").value;
  let conversionType = document.getElementById("conversionType").value;
  let output = "";

  if (conversionType === "textToBinary") {
    output = input
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  } else {
    output = input
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
  }

  document.getElementById("output").value = output;
}
function clearInput() {
  document.getElementById("textInput").value = "";
  document.getElementById("output").value = "";
}

function copyOutput() {
  let outputText = document.getElementById("output");
  outputText.select();
  document.execCommand("copy");
}

console.log(67)