function mowYard (name, callback){
    console.log(`${name} mowed the yard`);
    // callback stuff //
    // time is 2000 //
};

function weedEat(name, callback){
    // if chore is completed //
    console.log(`${name} finished using the weed eater.`);
    // else //
    console.log(`${name} fell asleep after mowing the yard.`);
    // callback stuff //
    // time is 1500 //
}

function trimHedges(name, callback){
    // if chore is completed //
    console.log(`${name} finished trimming the hedges.`);
    // else //
    console.log(`${name} fell asleep after weed eating the yard.`);
    // callback stuff //
    // time is 1000 //
}

function collectWood(name, callback){
    // if chore is completed //
    console.log(`${name} finished collecting wood.`);
    // else //
    console.log(`${name} fell asleep after weed trimming the hedges.`);
    // callback stuff //
    // time is 2500 //
}

function waterGarden(name, callback){
    // if chore is completed //
    console.log(`${name} finished watering the garden.`);
    // else //
    console.log(`${name} fell asleep after collecting wood.`);
    // callback stuff //
    // time is 500 //
}

function doSummerChores(name, callback){ //name needs to be a string literal? //
    // if chore is completed //
    console.log(`${name} finished all their chores!`);
}

