// outside of my functions I will define,
//  sotred orders and incoming orders
let {type, quantity, price} = incomingOrders
let existingBook = {type, quantity, price}
// let storedOrders = existingBook.length

// let incomingOrders = incomingOrder.length
// let buyPrice = existingBook.price
// let buyQuanity = existingBook.quantity
// i will create a calculation function,
//  for parcially fullfilled orders
const partOrder
= (array) => {
// i will create a for loop,
// this will loop the orderbook
  for (let order = 0;
order < array.length;
order++) {
    let bookOrdertype = ex
    let bookOrderprice = existingBook[order].price
    let bookOrderquantity = existingBook[order].quantity
    let newOrdertype = incomingOrders[order].type
    let newOrderprice = incomingOrders[order].price
    let newOrderQuantity = incomingOrders[order].quantity
    //here i will say, if there is a new order to sell,
    // and an existingorder to buy,
    // and the quantities to buy are less
    // than the quantities to sell and
    // the price to but and sell are the same 
    // fulfull that order.
 if( newOrdertype === 'sell' &&
     bookOrdertype === 'buy' &&
     newOrderQuantity < bookOrderquantity &&
     newOrderprice <= bookOrderprice)
     return bookOrderquantity - newOrderQuantity &&
     bookOrderprice - {


     }
      

  

//i will want to use push to add orders to the end of the array
//i will no longer need to make an object.
    }
  }




//out side of this object I will create my reconsile function

//inside of this function I will deconstruct my orderbook to do all the right calculations
//i will want to let orderBook equal updatedBook
module.exports = reconcileOrder
