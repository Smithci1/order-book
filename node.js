const existingBook = [{ type: 'buy', quantity: 10, price: 6150 },{ type: 'buy', quantity: 10, price: 6250 }, { type: 'sell', quantity: 12, price: 6250 },{ type: 'sell', quantity: 14, price: 62540 }]
const incomingOrder = { type: 'sell', quantity: 10, price: 6250 }


      const orderMatch = (existingBook, bookOrder, incomingOrder) => {
       (existingBook.findIndex((deal) 
           => {deal.type !==  
          incomingOrder.type &&
          bookOrder.type === 'buy' &&
          existingBook.price <= 
          incomingOrder.price ||
          existingBook.price >=
          incomingOrder.price}))
           return existingBook  
      }
    
      console.log(orderMatch())