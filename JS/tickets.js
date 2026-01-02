// lidhja me music page
const params = new URLSearchParams(window.location.search);
const eventName = params.get("title");
const singerName = params.get("artist");
const startPrice = Number(params.get("price"));

document.getElementById("eventName").innerText = eventName;
document.getElementById("singerName").innerText = singerName;

const qty = document.getElementById("qty");
const category = document.getElementById("category");
const total = document.getElementById("total");

function calculateTotal() {
    let price = startPrice;

    if (category.value === "vip") {
        price = startPrice * 1.3; //VIP 30% me shume
    }

    const result = qty.value * price;
    total.innerText = result.toFixed(2);
}

calculateTotal();
qty.addEventListener("change", calculateTotal);
category.addEventListener("change", calculateTotal);

// jquery kur behet "purchase" bileta
$(document).ready(function () {
    $("#button").click(function () {
        $("#alert").show(150);
    });
    $("#alert").click(function () {
        $(this).hide(150);
    });
});

