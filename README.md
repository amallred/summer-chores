# Summer Chores

## Project 1 | ~~(Callback Hell!)~~ Callback Assignment 

## Takeaways / Challenges:
- Passing variables down the line of callbacks was tricky to solve and required a lot of guess and check. This seems like a clunky way to pass variables and I'd be interested to learn a more efficient way to do this.
- The solution to simulate the function timing out was a bit challenging as well. I ended up implementing a random number generator and tying it to a totalTime variable which affected each level of the callback pyramid.

### Notes to run this program
You will need to have node js installed to run this program on your computer.

### Exercise Description

Someone has a list of summer chores they have to do every Saturday. There are a lot of chores for them to do and naturally get more tired throughout completing their tasks. If they get too tired, they may fall asleep before completing all their chores.

They have a strict routine, which follows in order:

1. Mowing the yard
2. Weedeating the edges of the house and fence line
3. Trimming the hedges
4. Collect fallen wood for summer night fires
5. Water the garden

If they manage not to get tired and fall asleep while doing their chores, they have successfully completed their chores. Also, there's never a chance of the person falling asleep before mowing the yard.

### Requirements and Information

The time to complete each chore is an arbitrarily selected value for the purpose of the exercise. They are the following:

#### Time to Complete Chores
| Chore	| Time to Complete (milliseconds) |
| ----------- | ----------- |
| Time to mow the yard. |	2000 |
| Time to weed eat the yard. |	1500 |
| Time to trim the hedges. |	1000 |
| Time to collect wood. |	2500 |
| Time to water the garden. |	500 |

#### Required Functions
| Function Name | Description |
| ----------- | ----------- |
| mowYard	A function that will take in a person's name and a callback function. When the chore is complete, log "PERSON'S NAME mowed the yard." to the console.
| weedEat |	A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished using the weed eater." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after mowing the yard." to the console.|
| trimHedges |	A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished trimming the hedges." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after weed eating the yard." to the console.|
| collectWood |	A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished collecting wood." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after trimming the hedges." to the console.|
| waterGarden |	A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished watering the garden." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after collecting wood." to the console.|
| doSummerChores |	A function that will take in a person's name as an argument. The name passed in must be a string literal. This method will call the mowYard function, essentially wrapping your "callback hell." If all the chores are completed successfully, the function should log "PERSON'S NAME finished all their chores!"|

## Project Two: Promise Version

### Takeaways / Challenges: 
- The biggest challenge was once again how to pass the name down the line of promise functions. I solved this by shortening the `.then` statements considerably, which overall simplified the whole structure while passing the variable.