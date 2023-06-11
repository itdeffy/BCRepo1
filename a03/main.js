const rhombus = document.getElementById("rhombus");
const button = document.getElementById("submit");
const _size = document.getElementById("size");
const _col1 = document.getElementById("col1");
const _col2 = document.getElementById("col2");
const _symbol = document.getElementById("symbol");

button.addEventListener('click', drawRhombus)

function drawRhombus(e) {
    const size = _size.value;
    const color1 = _col1.value;
    const color2 = _col2.value;
    const symbol = _symbol.value;
    console.log(size, color1, color2, symbol);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            rhombus.innerHTML += "<span style='color:white;'>" + symbol + "</span>";
        }
        for (let h = 0; h < i + 1; h++) {
            if (h%2 == 1) {
                rhombus.innerHTML += "<span style='color:" + color1 + ";'>" + symbol + "</span>";
            } else {
                rhombus.innerHTML += "<span style='color:" + color2 + ";'>" + symbol + "</span>";
            }
        }
        for (let h = 0; h < i + 1; h++) {
            if (h%2 == 1) {
                rhombus.innerHTML += "<span style='color:" + color1 + ";'>" + symbol + "</span>";
            } else {
                rhombus.innerHTML += "<span style='color:" + color2 + ";'>" + symbol + "</span>";
            }
        }
        for (let j = 0; j < size - i - 1; j++) {
            rhombus.innerHTML += "<span style='color:white;'>" + symbol + "</span>";
        }
        rhombus.innerHTML += "<br>";
        
    }
    for (let i = size; i > 0; i--) {
        for (let j = size; j > i; j--) {
            rhombus.innerHTML += "<span style='color:white;'>" + symbol + "</span>";
        }
        for (let h = i; h > 0; h--) {
            if (h%2 == 1) {
                rhombus.innerHTML += "<span style='color:" + color1 + ";'>" + symbol + "</span>";
            } else {
                rhombus.innerHTML += "<span style='color:" + color2 + ";'>" + symbol + "</span>";
            }
        }
        for (let h = i; h > 0; h--) {
            if (h%2 == 1) {
                rhombus.innerHTML += "<span style='color:" + color1 + ";'>" + symbol + "</span>";
            } else {
                rhombus.innerHTML += "<span style='color:" + color2 + ";'>" + symbol + "</span>";
            }
        }
        for (let j = size; j > i; j--) {
            rhombus.innerHTML += "<span style='color:white;'>" + symbol + "</span>";
        }
        rhombus.innerHTML += "<br>";
    }
    


}