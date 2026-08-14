const range = document.getElementById("customRange2");
    const priceValue = document.getElementById("priceValue");

    range.addEventListener("input", function () {
        priceValue.textContent = "₹" + Number(this.value).toLocaleString("en-IN");
    });