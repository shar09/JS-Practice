const weather = true
const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };

    resolve(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});

const orderUber = function(dateDetails) {
    const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;
    return Promise.resolve(message)
}

// const myDate = function() {
//     date.then(orderUber)
//     .then(data => console.log(data));
// }

// myDate();

async function myDate() {
    try {
  
      let dateDetails = await date;
      let message     = await orderUber(dateDetails);
      console.log(message);
  
    } catch(error) {
      console.log(error.message);
    }
}

(async function() { 
    await myDate();
    console.log("hello");
})();





// ------------------------------------------------------
// function a() {
//     setTimeout(() => console.log("a"), 1000);
// }

// function b() {
//     console.log("b");
// }

// a();
// b();