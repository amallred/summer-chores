function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let totalTime = getRandomArbitrary(501, 10000);


function mowYard (name){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard`);
            resolve(name);
            totalTime -= 2000;
            // console.log(totalTime);
        } , 2000);
    })
};

function weedEat(name){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(totalTime > 1500){
                console.log(`${name} finished using the weed eater.`);
                resolve(name);
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
                console.log(`${name} finished trimming the hedges.`);
                resolve(name);
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
                console.log(`${name} finished collecting wood.`);
                resolve(name);
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
                console.log(`${name} finished watering the garden.`);
                resolve(name);
                totalTime -= 500;
                // console.log(totalTime);
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    })
};

function doSummerChores(name){
    console.log(`${name} finished all their chores!`);
};

mowYard('Amanda').then(name => weedEat(name))
                .then(name => trimHedges(name))
                .then(name => collectWood(name))
                .then(name =>  waterGarden(name))
                .then(name => doSummerChores(name))
                .catch(error => console.log(error));