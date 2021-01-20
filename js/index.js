// ITERATION 1

function updateSubtotal(product) {

  const price = parseInt(product.querySelector('.price span').innerHTML);
  console.log(price)

  const quantity = parseInt(product.querySelector('.quantity > input').value);
  console.log(quantity)
  
  let subtotal=price*quantity
  console.log(subtotal)

   const subT = product.querySelector('#cart > tbody > tr > td.subtotal > span')
   subT.innerHTML =`${subtotal}`
  return subtotal
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  //ITERATION 1 

  // const singleProduct = document.querySelector('.product');
  // console.log(singleProduct)
  // updateSubtotal(singleProduct);


    // ITERATION 2
   const allProducts = document.getElementsByClassName('product')
  
   console.log(allProducts);
   let total = 0
   for (let item of allProducts) {
     subtotal = updateSubtotal(item)
     total += subtotal  
     console.log(total)
    }

  // ITERATION 3
  const totalTarget = document.querySelector('#total-value > span')
  console.log(totalTarget)
  totalTarget.innerHTML =`${total}`  
  

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const firstP = target.parentNode
  const secondP = firstP.parentNode
  
  secondP.parentNode.removeChild(secondP)

  calculateAll ()

}


// ITERATION 5


function createProduct() {

const productName = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input').value
console.log(productName)

const productPrice = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input').value
//console.log(productPrice)

const newItem = document.querySelector('.product').cloneNode(true);
//console.log(newItem)

const firstP = document.querySelector('.product').parentNode;
// console.log(firstP)

firstP.append(newItem);

const numberProducts = document.querySelectorAll('.product').length

const nameTarget = document.querySelector(`#cart > tbody > tr:nth-child(${numberProducts}) > td.name > span`)
nameTarget.innerHTML =`${productName}`

const priceTarget = document.querySelector(`#cart > tbody > tr:nth-child(${numberProducts}) > td.price > span`)
priceTarget.innerHTML =`${productPrice}`

const inputs = document.querySelectorAll('.create-product > td > input') ;
inputs[0].value ='';
inputs[1].value ='';

const removeButtons = document.getElementsByClassName('btn-remove');
for (button of removeButtons) {
//  console.log(button)
  button.addEventListener('click',removeProduct);
    }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (button of removeButtons) {
  //  console.log(button)
    button.addEventListener('click',removeProduct);
      }
    
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});

