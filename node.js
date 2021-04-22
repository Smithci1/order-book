const existingBook = [{ type: 'sell', quantity: 10, price: 6150 }]
      const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }

      const work = () => {
        for(let i = 0; i < existingBook.length; i++)
        if(existingBook[i].type !== 'buy' &&
           incomingOrder.type   === 'sell'){
             existingBook.push(incomingOrder)
             return existingBook
             
           }
        }
    
      console.log(work())