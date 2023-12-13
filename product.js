let elementsel=document.querySelector(".elements")
let elementsel1=document.querySelector(".elements1")
let elementsel2=document.querySelector(".elements2")
let elementsel3=document.querySelector(".elements3")
let cartitemsel=document.querySelector(".cartitems")
let subtotalel=document.querySelector(".subtotal")
let itemsincartel =document.querySelector(".btn-white sup")
const food=[
    {
        id:1,
        name:"Magnum Tiste",
        desc:"Lorem,deren,toret,ianum",
        price:5.95,
        stock:8,
        qty:0,
    },
    {
        id:2,
        name:"Aut luia",
        desc:"Lorem,deren,toret,ianum",
        price:14.95,
        stock:8,
        qty:0,
    },
    {
        id:3,
        name:"Est Eligendi ",
        desc:"Lorem,deren,toret,ianum",
        price:8.95,
        stock:8,
        qty:0,
    },
    
    {
        id:4,
        name:"Magnum Tiste",
        desc:"Lorem,deren,toret,ianum",
        price:5.95,
        stock:8,
        qty:0,
    },
    {
        id:5,
        name:"Magnum Tiste",
        desc:"Lorem,deren,toret,ianum",
        price:5.95,
        stock:8,
        qty:0,
    },
    {
        id:6,
        name:"Magnum Tiste",
        desc:"Lorem,deren,toret,ianum",
        price:3.95,
        stock:8,
        qty:0,
    }
]
function displayfood()
{
    food.forEach((item)=>{
       elementsel.innerHTML+=`
       <div class="col">
                      <div class="card h-100 border-0">
                        <img src=" ${item.id}.png" class="img-fluid mx-auto d-block h-75 w-75 " alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <p class="card-text text-muted">${item.desc}</p>
                          <h5 class="text-danger">$ ${item.price} <span class="ms-5"><button type="button" class="btn btn-danger " onclick=addtocart(${item.id})><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg>
                          </button></span></h5>
                        </div>
                      </div>
                    </div>
                    ` 
      
    })
}
displayfood()
function displayfood1()
{
    food.forEach((item)=>{
       elementsel1.innerHTML+=`
       <div class="col">
                      <div class="card h-100 border-0">
                        <img src=" ${item.id}.png" class="img-fluid mx-auto d-block h-75 w-75 " alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <p class="card-text text-muted">${item.desc}</p>
                          <h5 class="text-danger">$ ${item.price} <span class="ms-5"><button type="button" class="btn btn-danger " onclick=addtocart(${item.id})><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg>
                          </button></span></h5>
                        </div>
                      </div>
                    </div>
                    ` 
      
    })
}
displayfood1()
function displayfood2()
{
    food.forEach((item)=>{
       elementsel2.innerHTML+=`
       <div class="col">
                      <div class="card h-100 border-0">
                        <img src=" ${item.id}.png" class="img-fluid mx-auto d-block h-75 w-75 " alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <p class="card-text text-muted">${item.desc}</p>
                          <h5 class="text-danger">$ ${item.price} <span class="ms-5"><button type="button" class="btn btn-danger " onclick=addtocart(${item.id})><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg>
                          </button></span></h5>
                        </div>
                      </div>
                    </div>
                    ` 
      
    })
}
displayfood2()
function displayfood3()
{
    food.forEach((item)=>{
       elementsel3.innerHTML+=`
       <div class="col">
                      <div class="card h-100 border-0">
                        <img src=" ${item.id}.png" class="img-fluid mx-auto d-block h-75 w-75 " alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <p class="card-text text-muted">${item.desc}</p>
                          <h5 class="text-danger">$ ${item.price} <span class="ms-5"><button type="button" class="btn btn-danger"  onclick=addtocart(${item.id})><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg>
                          </button></span></h5>
                        </div>
                      </div>
                    </div>
                    ` 
      
    })
}
displayfood3()


let cart=JSON.parse(localStorage.getItem("CART")) || [];
updatecart();
function addtocart(id)
{
  // check if product alredy exist
  if(cart.some((item)=>item.id===id))
  {
    changeqty("plus",id)
  }
  else{
    const item=food.find((product)=>product.id===id)
    cart.push({
      ...item,
      qty:1
    });
  }
  updatecart();
}

function updatecart()
{
  rendercartitems();
  rendersubtotal();
  localStorage.setItem("CART",JSON.stringyfy(cart));
}
function rendercartitems()
{
    cartitemsel.innerHTML="";
    cart.forEach((item)=>{
cartitemsel.innerHTML+=`
                  <table class="table w-100">
                  <tbody>
                    <tr><td><img src="${item.id}.png" height=50 width=50></td>
                    <td><p style="font-size:13px;">${item.name}</p></td>
                    <td>$${item.price}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg> ${item.qty} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></td>
                    <td><i class="fa-solid fa-trash text-primary" onclick="removeitem(${item.id})"></i></td>
                  </tr></tbody></table>`

    })
}
function changeqty(action,id)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.id===id)
        {
            if(action==="minus" && qty>1)
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}

function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
    itemsincartel.innerHTML= totalitems;            
}
function removeitem(id)
{
    cart=cart.filter((item)=>item.id!==id);
    updatecart();
}
