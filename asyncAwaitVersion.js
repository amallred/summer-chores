function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let totalTime = getRandomArbitrary(501, 10000);


function mowYard (name){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard`);
            totalTime -= 2000;
            // console.log(totalTime);
        } , 2000);
    })
};

function weedEat(name){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(totalTime > 1500){
                resolve(`${name} finished using the weed eater.`);
                totalTime -= 1500;
                // console.log(totalTime);
            } else {
                reject(`${name} fell asleep after mowing the yard.`);}
            }, 1500);
        })
    };
    
function trimHedges(name){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (totalTime > 1000){
                resolve(`${name} finished trimming the hedges.`);
                totalTime -= 1000;
                // console.log(totalTime);
            } else {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    })
};

function collectWood(name){
    return new Promise ((resolve, reject) => {
        setTimeout(() => { 
            if(totalTime >2500){
                resolve(`${name} finished collecting wood.`);
                totalTime -= 2500;
                // console.log(totalTime);
            } else {
                reject(`${name} fell asleep after weed trimming the hedges.`);
            }
        }, 2500);
    })
};

function waterGarden(name){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(totalTime > 500){
                resolve(`${name} finished watering the garden.`);
                totalTime -= 500;
                // console.log(totalTime);
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    })
};

async function doSummerChores(name){
    
    try{
        const taskOne = await mowYard(name);
        console.log(taskOne);
    
        const taskTwo = await weedEat(name);
        console.log(taskTwo);
    
        const taskThree = await trimHedges(name);
        console.log(taskThree);
    
        const taskFour = await collectWood(name);
        console.log(taskFour);
    
        const taskFive = await waterGarden(name);
        console.log(taskFive);    
        
        console.log(`${name} finished all their chores!`);
    } catch(error) {
        console.error(error);
    };
};

doSummerChores('Amanda');