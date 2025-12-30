const btn=document.querySelector(".navBarButton");
const list=document.querySelector(".navBarList");
const items=document.querySelectorAll(".navBarItem");
btn.addEventListener("click",function(){
   btn.classList.toggle("navBarButton--active")
   list.classList.toggle("navBarList--active")
})
items.forEach(function(item){
  item.addEventListener("click",function(){
  btn.classList.remove("navBarButton--active")
   list.classList.remove("navBarList--active")



  })

})

const video=document.querySelector(".display");
const playbtn=document.querySelector(".video-btn i");
playbtn.addEventListener("click",function(){
  if(video.paused){
    video.play();
    playbtn.classList.replace("fa-play","fa-pause");
  }
  else{
    video.pause();
    playbtn.classList.replace("fa-pause","fa-play");
  }
})

const cards=document.querySelectorAll(".card");
const invoiceitems=document.querySelector(".invoice-items");
const total=document.querySelectorAll(".total");
let totalPrice=0;
const invoiceItems = {};
cards.forEach(card => {
    const minus=card.querySelector(".minus");
    const plus=card.querySelector(".plus");
    const quantity=card.querySelector(".quantity");
    const price=parseFloat(card.querySelector(".price-control p").textContent.replace("EGP",""));
    const subtotal=card.querySelector(".subtotal");
    const addchart=card.querySelector(".addchart");
    const title=card.querySelector("h3").textContent;

    let count=0;
  //function of total of items
 function updateInvoice() {
  if (!invoiceItems[title]) {
    const item = document.createElement("li");
    item.classList.add("invoice-item");
    invoiceitems.appendChild(item);
    invoiceItems[title] = { element: item, total: 0 };
  }

  if (count > 0) {
    const itemTotal = count * price;
    invoiceItems[title].total = itemTotal;
    invoiceItems[title].element.textContent =
      `${title} x${count} = EGP ${itemTotal.toFixed(2)}`;
  } else {
    invoiceitems.removeChild(invoiceItems[title].element);
    delete invoiceItems[title];
  }

  totalPrice = 0;
  for (let key in invoiceItems) {
    totalPrice += invoiceItems[key].total;
  }

  document.querySelectorAll(".total").forEach(el => {
    el.textContent = `Total: EGP ${totalPrice.toFixed(2)}`;
  });
}

    plus.addEventListener("click",function(){
      count++;
      quantity.textContent=count;
      subtotal.textContent=`Subtotal:EGP ${(price*count).toFixed(2)}`;
      updateInvoice();
    })
    minus.addEventListener("click",function(){
    if(count>0){
     count--;
     quantity.textContent=count;
     subtotal.textContent=`Subtotal:EGP ${(price*count).toFixed(2)}`;
     updateInvoice();
    }
    })
    addchart.addEventListener("click", () => {
    count++;
    quantity.textContent = count;
    subtotal.textContent = `Subtotal: EGP ${(count * price).toFixed(2)}`;
     updateInvoice();
  });


  const fav=card.querySelector("#fav");
fav.addEventListener("click", function(){
fav.classList.toggle("active");
});

});
const toggleCart=document.querySelector("#toggleCart");
const invoice=document.querySelector(".invoice");
toggleCart.addEventListener("click",function(){
 invoice.classList.toggle("active");
})





