 //create reconsile function
 //with incomingorder, existingorder

 const reconsileOrder = (existingBook,incomingOrder) => {
  //  existingBook = []
  //  if (existingBook.push(incomingOrder)){ 
     
  //  }
  // existingBook = existingBook.push(incomingOrder)
  for(let i = 0; i < existingBook.length; i++)
       if (existingBook === [])
       existingBook.push(incomingOrder) || 
         (existingBook[i].type !== 'buy' &&
           incomingOrder.type   === 'sell')
             existingBook.push(incomingOrder)  
             return existingBook
            }
    
    
 




module.exports = reconsileOrder