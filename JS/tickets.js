const params = new URLSearchParams(window.location.search);
const eventName = params.get("title");
const singerName = params.get("artist");
const basePrice = Number(params.get("price"));

document.getElementById("eventName").innerText=eventName;
document.getElementById("singerName").innerText=singerName;

const qty=document.getElementById("qty");
const category=document.getElementById("category");
const total=document.getElementById("total");

function calculateTotal() {
    let price = basePrice;

    if(category.value==="vip"){
        price=basePrice*1.3; //VIP 30% me shue
    }

    const result = qty.value*price;
    total.innerText =result.toFixed(2);
}

calculateTotal();

qty.addEventListener("change", calculateTotal);
category.addEventListener("change", calculateTotal);
