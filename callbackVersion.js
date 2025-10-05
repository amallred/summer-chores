function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let totalTime = getRandomArbitrary(501, 10000);


mowYard('Amanda', (name) => {
    weedEat(name, (name) => {
        trimHedges(name, (name) => {
            collectWood(name, (name) => {
                waterGarden(name, (name) => {
                    doSummerChores(name)
                })
            })
        })
    })
});


function mowYard (name, callback){
    setTimeout(() => {
        console.log(`${name} mowed the yard`);
        callback(name);
        totalTime -= 2000;
        // console.log(totalTime);
    } , 2000);
};

function weedEat(name, callback){
    setTimeout(() => {
        if(totalTime > 1500){
            console.log(`${name} finished using the weed eater.`);
            totalTime -= 1500;
            // console.log(totalTime);
            callback(name);
        } else {
            console.log(`${name} fell asleep after mowing the yard.`);}
        }, 1500);
};

function trimHedges(name, callback){
    setTimeout(() => {
        if (totalTime > 1000){
            console.log(`${name} finished trimming the hedges.`);
            callback(name);
            totalTime -= 1000;
            // console.log(totalTime);
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`);
        }
    }, 1000);
}

function collectWood(name, callback){
    setTimeout(() => { 
        if(totalTime > 2500){
            console.log(`${name} finished collecting wood.`);
            callback(name);
            totalTime -= 2500;
            // console.log(totalTime);
        } else {
            console.log(`${name} fell asleep after weed trimming the hedges.`);
        }
    }, 2500);
}

function waterGarden(name, callback){
    setTimeout(() => {
        if(totalTime > 500){
            console.log(`${name} finished watering the garden.`);
            callback(name);
            totalTime -= 500;
            // console.log(totalTime);
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
        }
}, 500);
}

function doSummerChores(name, callback){
    console.log(`${name} finished all their chores!`);
}
