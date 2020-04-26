const JOURNAL = require('./journal.js');

// Takes Journal Returns all events
function allEvents(journal) {
    const events = [];
    for(let obj of journal) {
        for(let element of obj.events) {
            if(!events.includes(element)) {
                events.push(element);
            }
        }
    }
    return events;
}

console.log(allEvents(JOURNAL));

//Takes event from all events returns phi table by looping over JOURNAL
function phiTable(event, journal) {
    const phiParams = [0, 0, 0, 0];
        for(let obj of journal) {
            if(!obj.squirrel) {
                if(!obj.events.includes(event))   
                    phiParams[0]++;
                else
                    phiParams[1]++;
            }
            else {
                if(!obj.events.includes(event))  
                    phiParams[2]++;
                else
                    phiParams[3]++;    
            }
        }
    return phiParams;
} 

//console.log(phiTable('carrot', JOURNAL));

// Takes phi table of event returns phi value
function phi(phiParams) {
    let phiValue = ((phiParams[3] * phiParams[0]) - (phiParams[2] * phiParams[1])) / 
                   Math.sqrt((phiParams[2] + phiParams[3]) * 
                   (phiParams[0] + phiParams[1]) * 
                   (phiParams[0] + phiParams[2]) *
                   (phiParams[1] + phiParams[3]));
    return phiValue;               
}

//console.log(phi(phiTable('carrot', JOURNAL)))

//Write a function that loops over each event from allEvents function and print phi value of event
//In each loop call phi function takes phitable as param, phitable takes event from allEvents and JOURNAL as param

function solution(events, journal) {
   const phiValues = []; 
   let phiValue; 
   for(let item of events) {
       phiValue = {
                    [item] : phi(phiTable(item, journal))
                  };
       phiValues.push(phiValue);
   }
   return phiValues;
}

console.log(solution(allEvents(JOURNAL), JOURNAL));

const squirrel = solution(allEvents(JOURNAL), JOURNAL).filter(s => { 
    return ((s[Object.keys(s)] > 0.3) || (s[Object.keys(s)] < -0.3));
});
console.log(squirrel);

function check(journal) {
    for(let obj of journal) {
        if(obj.events.includes('peanuts') && !obj.events.includes('brushed teeth')) {
            obj.events.push('peanut teeth');
        }
    }
}

check(JOURNAL);
console.log(phi(phiTable('peanut teeth', JOURNAL)));