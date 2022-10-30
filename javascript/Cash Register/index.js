let changeArray = [];

const currency = [
  ["ONE HUNDRED", 100],
  ["TWENTY", 20],
  ["TEN", 10],
  ["FIVE", 5],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
];

function checkCashRegister(price, cash, cid) {

  let change = cash - price;
  cid.reverse();

  
  for(let i = 0; i < currency.length; i++) {
    
    if((cid[i][1]) === 0) {
      cid.splice(i, 1);
      currency.splice(i, 1);
      return checkCashRegister(price, cash, cid.reverse())
    } else if(cid.length === 0) {
      let returnedObj = {
        status: "INSUFFICIENT_FUNDS",
        change: changeArray
      };
      return returnedObj;
    }


    if(change >= currency[i][1]) {
      
      if(cid[i][1] >= change) { 
        
        if(((change*100) % (currency[i][1]*100)) === 0) {
          
          changeArray.push([`${cid[i][0]}`, change])
          let returnedObj;

          if(cid[i][1] === change) {
            
            let closedCurrency = [
              ["PENNY", 0],
              ["NICKEL", 0],
              ["DIME", 0],
              ["QUARTER", 0],
              ["ONE", 0],
              ["FIVE", 0],
              ["TEN", 0],
              ["TWENTY", 0],
              ["ONE HUNDRED", 0],
            ];

            const newClosedCurrency = closedCurrency.map(item => {
              return item[0] === cid[i][0] ? item = cid[i] : item;
            })
            
            returnedObj = {
              status: "CLOSED",
              change: newClosedCurrency
            };
            return returnedObj;
          } else {
            console.log("za")

            returnedObj = {
              status: "OPEN",
              change: changeArray
            };
            return returnedObj;
          }
          

        } else {
          let newChange = (change % currency[i][1]).toFixed(2)
          changeArray.push([cid[i][0], ((Math.floor(change / currency[i][1]))*currency[i][1])])
          cid[i][1] = cid[i][1] - ((Math.floor(change / currency[i][1]))*currency[i][1])
          return checkCashRegister(0, newChange, cid.reverse())
        }

      } else if(cid[i][1] < change) {
      
        if(cid.length === 1 || cid[i][0] === "PENNY") {
          let returnedObj = {
            status: "INSUFFICIENT_FUNDS",
            change: changeArray
          };
          return returnedObj;
        } else {
          console.log("za")
          let newChange = (change - cid[i][1]).toFixed(2);
          changeArray.push(cid[i])
          cid.splice(i, 1);
          currency.splice(i,1);
          return checkCashRegister(0, newChange, cid.reverse())
        }
      }
    } 
  }
}


