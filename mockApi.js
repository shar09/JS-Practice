var https = require('https');

async function getUserTransaction(uid, txnType, monthYear) {
  let userId = uid;
  let tranxType = txnType;
  let monYr = monthYear;
  let data;
  if(userId === 'undefined' || tranxType === 'undefined' || monYr === 'undefined') 
      return [];
  async function getUser(uid, txnType, monthYear, pageNo) { 

    let dataOnDate = [];

    const apiUrl = `https://jsonmock.hackerrank.com/api/transactions/search?txnType=${txnType}&userId=${uid}`;     
    return new Promise((resolve, reject) => {
      https.get(apiUrl+`&page=${pageNo}`, (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        if (statusCode !== 200) {
          error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
          error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
        }
        if (error) {
          console.error(error.message);
          // Consume response data to free up memory
          res.resume();
          return;
        }
  
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            //console.log(parsedData);
            for(let i=0; i<parsedData.data.length; i++) {
              //console.log(parsedData.data[i].timestamp);

              // Accessing timestamp and converting milliseconds to mm-yyyy format
              let findDate = new Date(parsedData.data[i].timestamp);
              //console.log(findDate);
              let month = (findDate.getUTCMonth()+1).toString();
              while(month.length < 2) {
                month = "0" + month;
              }
              let year = (findDate.getUTCFullYear()).toString();
                //console.log(month);
                //console.log(year);
                let dateString = `${month}-${year}`;
                //console.log("line 1: "+dateString);
      
                //Filtering data with matched date
                if(dateString === monthYear) {
                  //console.log("line 0:" ,parsedData.data[i]);
                  dataOnDate.push(parsedData.data[i]);
                }
            }
            resolve(dataOnDate);
          }catch (e) {
            console.error(e.message);
          }
        });
      }).on('error', (e) => {
        reject(e);
        console.error(`Got error: ${e.message}`);
      })
    });
  };

  const allPages = async function(pageNo = 1) {
    const results = await getUser(userId, tranxType, monYr, pageNo);
    //console.log("Retreiving data from API for page : " + pageNo);
    // if (results.data.length) {
    //   return results.concat(await allPages(pageNo+1));
    // } else {
    //   return results;
    // }
    while(pageNo < 16) {
      return results.concat(await allPages(pageNo+1));
    }
  } 

  async function run() {
    data = await allPages();
    //await cb(result);
  }

  await run(); 
  //console.log(data);

  return new Promise((resolve, reject) => {
    
    //console.log("line 1: ", data);
    //console.log(data.length);
    let totalAmount = 0;
    let arrAmounts = [];
    for(let j=0;j<data.length-1;j++) {
      let newAmount = parseFloat(data[j].amount.replace('$','').replace(/,/g, ''));
      arrAmounts.push(newAmount);
      totalAmount += newAmount;    
    }
    //console.log(totalAmount);
    let average = totalAmount/arrAmounts.length-1;
    //console.log(average);
    //console.log(arrAmounts);
    let maxArr = [];
    for(let element of arrAmounts) {
      if(element > average) {
        maxArr.push(element);
      }
    }
    //console.log(maxArr);
    let idArr = [];
    for(let k=0;k<data.length-1;k++) {
      for(let element of maxArr) {
        if(element === parseFloat(data[k].amount.replace('$','').replace(/,/g, ''))) {
          idArr.push(data[k].id);
        }
      }
    }
    //console.log(idArr);
    resolve(idArr);  
  });
}

(async () => {
console.log(await (getUserTransaction(1,'debit','05-2019')));
}) ();