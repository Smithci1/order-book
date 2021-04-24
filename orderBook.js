
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
  

}

module.exports = reconcileOrder



