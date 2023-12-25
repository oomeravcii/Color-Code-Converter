
// hex to rgb

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

document.getElementById("hexSubmit").onclick = function(){
    let hex_code = document.getElementById("hexInput").value;

    let hex_answer = hexToRgb(hex_code);
    document.getElementById("hexAnswer").innerHTML = "rgb(" + hex_answer.r + ", " + hex_answer.g + ", " + hex_answer.b + ")"
}




// rgb to hex

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }
  
document.getElementById("rgbSubmit").onclick = function(){
    let rgbR = document.getElementById("rgbR").value;
    let rgbG = document.getElementById("rgbG").value;
    let rgbB = document.getElementById("rgbB").value;

    let rgb_answer = rgbToHex(rgbR,rgbG,rgbB);
    document.getElementById("rgbAnswer").innerHTML = rgb_answer
    

}