 //create reconsile function
 //with incomingorder, existingorder

 const reconsileOrder = (existingBook,incomingOrder) => {
  
  for(let i = 0; i < existingBook.length; i++)
  /* if the book is empty then input any incoming order,
     if the book is not empyty compare the order type 
     of the incoming order with all the orders in book 
     and see if there is a deal to be made.
  */
       if (existingBook === [])
       existingBook.push(incomingOrder) || 
         (existingBook[i].type !== 'buy' &&
           incomingOrder.type   === 'sell')
             existingBook.push(incomingOrder)  
             return existingBook
            }
    
    
 




module.exports = reconsileOrder