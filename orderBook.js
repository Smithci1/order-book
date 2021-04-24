
// const pusher = (existingBook, incomingOrder) => {
//  for (let i = 0;
//  i <existingBook.length;
//  i++)
//       if (existingBook === [])
//       existingBook.push(incomingOrder) || 
//          (existingBook[i].type !== incomingOrder.type)
//          existingBook.push(incomingOrder) }

const orderMatch =(existingOrder, incomingOrder) =>
 existingOrder.type !== 
 incomingOrder.type && 
 existingOrder.price >= 
 incomingOrder.price 
const reconcileOrder = (existingBook, incomingOrder) => {
  //i will loop through book
  for (let i = 0; i< existingBook.length; i++){
    if(orderMatch(existingBook[i], incomingOrder)&&
                  existingBook[i].quantity === incomingOrder.quantity){
                    return existingBook.slice(0, i).concat(existingBook[i])
                           .filter(worth => worth.quantity)
                  }else if (orderMatch(existingBook[i], incomingOrder) &&
                            existingBook[i].quantity > incomingOrder.quantity){
                              existingBook[i.quantity] - incomingOrder.quantity
                              return existingBook.slice(0, i).concat(existingBook[i]
                                      .concat([existingBook[i]]).filter(worth => worth.quantity))                            

   }else if (orderMatch(existingBook[i], incomingOrder) &&
    existingBook[i].quantity < incomingOrder.quantity){
    incomingOrder.quantity -= existingBook[i].quantity
    existingBook[i] = 0
  } 
} return existingBook.concat([incomingOrder]).filter(worth => worth.quantity)
}

module.exports = reconcileOrder



