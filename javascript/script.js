function calculateCircumference() {
    let sideA = parseFloat(document.getElementById("sideA").value);
    let sideB = parseFloat(document.getElementById("sideB").value);
    let sideC = parseFloat(document.getElementById("sideC").value);

    let circumference = sideA + sideB + sideC;
    document.getElementById("result").textContent = "Keliling segitiga adalah: " + circumference;
}

function calculateArea() {
    let base = parseFloat(document.getElementById("base").value);
    let height = parseFloat(document.getElementById("height").value);

    let area = 0.5 * base * height;
    document.getElementById("result").textContent = "luas segitiga adalah: " + area;
}