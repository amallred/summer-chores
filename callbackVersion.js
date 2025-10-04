mowYard('Amanda', (name) => {
    weedEat(name, (name) => {
        trimHedges(name, (name) => {
            collectWood(name, (name) => {
                waterGarden(name, (name) => {
                    doSummerChores(name, (name) => {

                    })
                })
            })

        })
    })
});


function mowYard (name, callback){
    setTimeout(() => {
        console.log(`${name} mowed the yard`);
        callback(name);
    } , 2000);
};

function weedEat(name, callback){
    setTimeout(() => { // if chore is completed
        console.log(`${name} finished using the weed eater.`);
        callback(name);
    }, 1500);
    // else
        // console.log(`${name} fell asleep after mowing the yard.`);
};

function trimHedges(name, callback){
    setTimeout(() => { // if chore is completed
        console.log(`${name} finished trimming the hedges.`);
        callback(name);
    }, 1000);
    // else 
        // console.log(`${name} fell asleep after weed eating the yard.`);
}

function collectWood(name, callback){
    setTimeout(() => { // if chore is completed
        console.log(`${name} finished collecting wood.`);
        callback(name);
    }, 2500);
    
    // else 
        // console.log(`${name} fell asleep after weed trimming the hedges.`);
}

function waterGarden(name, callback){
    setTimeout(() => { // if chore is completed
        console.log(`${name} finished watering the garden.`);
        callback(name);
    }, 500);
    
    // else 
        // console.log(`${name} fell asleep after collecting wood.`);
}

function doSummerChores(name, callback){ //name needs to be a string literal? 
    // if chore is completed 
    console.log(`${name} finished all their chores!`);
}
