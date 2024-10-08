
// person login: show name

// show laptoop
document.querySelectorAll('.userlogin')[0].innerHTML=localStorage.getItem('userLogin')
// show mobile
document.querySelectorAll('.userlogin')[1].innerHTML=localStorage.getItem('userLogin')

// btn logout (mobile,laptoop)
let btnsLogout=document.querySelectorAll('.logout')
for (let i = 0; i < btnsLogout.length; i++) {
    btnsLogout[i].addEventListener('click',()=>{
        localStorage.removeItem('userLogin')
        location.href='./login.html'
    })
    
}


// cart

let products= [
    {
      imgProduct: "./imgs/product1.webp",
      nameProduct: "laptoop",
      priceProoduct: 2000,
      counter: 1
    },{
      imgProduct: "./imgs/product2.webp",
      nameProduct: "sound",
      priceProoduct: 812,
      counter: 1
    },{
      imgProduct: "./imgs/product3.webp",
      nameProduct: "gaming",
      priceProoduct: 8412,
      counter: 1
    },{
      imgProduct: "./imgs/product4.webp",
      nameProduct: "camera",
      priceProoduct: 4200,
      counter: 1
    },{
      imgProduct: "./imgs/product5.webp",
      nameProduct: "router",
      priceProoduct: 5400,
      counter: 1
    },{
      imgProduct: "./imgs/product6.webp",
      nameProduct: "jaket",
      priceProoduct: 4810,
      counter: 1
    },{
      imgProduct: "./imgs/product7.webp",
      nameProduct: "hdoom",
      priceProoduct: 9500,
      counter: 1
    },{
      imgProduct: "./imgs/product8.webp",
      nameProduct: "shoes",
      priceProoduct: 2500,
      counter: 1
    },{
      imgProduct: "./imgs/product9.webp",
      nameProduct: "shoes",
      priceProoduct: 3600,
      counter: 1
    },{
      imgProduct: "./imgs/product10.webp",
      nameProduct: "shoes",
      priceProoduct: 4056,
      counter: 1
    },{
      imgProduct: "./imgs/product11.webp",
      nameProduct: "shoes",
      priceProoduct: 2700,
      counter: 1
    },{
      imgProduct: "./imgs/product12.webp",
      nameProduct: "shoes",
      priceProoduct: 1500,
      counter: 1
    },{
      imgProduct: "./imgs/product13.webp",
      nameProduct: "shoes",
      priceProoduct: 740,
      counter: 1
    },{
      imgProduct: "./imgs/product14.webp",
      nameProduct: "shrab",
      priceProoduct: 780,
      counter: 1
    },{
      imgProduct: "./imgs/product15.webp",
      nameProduct: "jaket",
      priceProoduct: 1500,
      counter: 1
    },{
      imgProduct: "./imgs/product16.webp",
      nameProduct: "jaket",
      priceProoduct: 2350,
      counter: 1
    },{
      imgProduct: "./imgs/product17.webp",
      nameProduct: "jaket",
      priceProoduct: 550,
      counter: 1
    },{
      imgProduct: "./imgs/product18.webp",
      nameProduct: "tr7aa",
      priceProoduct: 250,
      counter: 1
    },{
      imgProduct: "./imgs/product19.webp",
      nameProduct: "tr7aa",
      priceProoduct: 650,
      counter: 1
    },{
      imgProduct: "./imgs/product20.webp",
      nameProduct: "hdoom",
      priceProoduct: 612,
      counter: 1
    },
  ]
  
  let cart=[]
  
  
  
  
  
  displayProduct(products)
  
  if (localStorage.getItem('productsCart') != null) {
    cart=JSON.parse(localStorage.getItem('productsCart'))
    displayCart(cart)
    sumPrice()
  }
  
  
  function displayProduct(arr) {
   let cartona=''   
  for (let i = 0; i < arr.length; i++) {
    
     
      cartona+=`<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" >
        <div class="product">
          <img src=${arr[i].imgProduct} alt="imgproduct" class="w-100">
          <div class="content-product">
            <h2 class="h5 mt-2">${arr[i].nameProduct}</h2>
            <p class='my-2'>price : ${arr[i].priceProoduct} $</p>
            <button class="btn w-100 btn-outline-primary d-block m-auto"  onclick="addProduct(${i})"> Add to Cart </button>
  
          </div>
  
        </div>
      </div>`
  }
  
  document.getElementById('rowdata').innerHTML=cartona
  
  }
  
  // add product cart
   function addProduct(num){  
  
    if (cart.includes(products[num])) {
        return
    }  
    cart.push(products[num])
    localStorage.setItem('productsCart',JSON.stringify(cart))
    displayCart(cart)
    sumPrice()
  }
  
  
  
  // display cart
  function displayCart(arr) {
    let cartona=''   
   for (let i = 0; i < arr.length; i++) {
      
    cartona+=`
          <div class="row align-items-center border border-2 p-2 mb-3">
          <div class="col-4 col-lg-2">
            <img src=${arr[i].imgProduct} alt="imgproduct" class="w-100">
          </div>
          <div class="col-8 col-lg-9 offset-lg-1">
             <h2 class="h5">${  arr[i].nameProduct}</h2>
            <p>price :${  arr[i].priceProoduct}$</p>
            <div class='d-flex gap-2 align-items-center mb-2'> 
             <p class='m-0'>${arr[i].counter}</p>
             <button class="btn  btn-outline-secondary " onclick='munsCounter(${i})'  >-</button>
             <button class="btn  btn-secondary " onclick='plusCounter(${i})' >+</button>
            </div>
            <button class="btn w-100 btn-outline-danger d-block m-auto" onclick="removeProduct(${i})">remove Cart</button>
          </div>
  
        </div>`
   }
   
   document.getElementById('cartContent').innerHTML=cartona
   
   }
  
  
  // remove cart
  function removeProduct(num) {    
    cart.splice(num,1)
    localStorage.setItem('productsCart',JSON.stringify(cart))
    displayCart(cart)
    sumPrice()
  }
  
  
  //  update  
   function plusCounter(num) {
    cart[num].counter ++
    displayCart(cart)
    localStorage.setItem('productsCart',JSON.stringify(cart))
    sumPrice()
   }
   function munsCounter(num) {
    cart[num].counter --
    if (cart[num].counter <= 0) {
      removeProduct(num)
    }
    displayCart(cart)
    localStorage.setItem('productsCart',JSON.stringify(cart))
    sumPrice()
   }
  
  // sum price
   function sumPrice() {
  let sum=0
  cart.map((pro)=>{
    sum += pro.priceProoduct * pro.counter
  
   }) 
   document.getElementById('price').innerHTML=sum
   }