// database of words. needs to be 3 sources of pieces of data.
const subject = ["cow", "cat", "aligator", "person", "gorilla", "shovel", "diamond", "coal"]
const verb = ["draw", "poop", "kill", "observe", "dig", "shine", "coat", "dance"]


const beginnigOfJoke = ["why did the "]
const endOfJoke = [" cross the road? bacause it "]




// function that randomly generates a Number
const randGenerator = () => {
    randSubj = subject[Math.floor(Math.random()*subject.length)]
    randVerb = verb[Math.floor(Math.random()*verb.length)]

    console.log(beginnigOfJoke[0]+randSubj+endOfJoke[0]+randVerb+" a gorrila")
} 
randGenerator()
// articulate jokes so that it forms a coherent joke


// test


// fix bugs

// deploy

/*
-beginning-
why did the



-subject-
alagator
person
cow
cat


-end-
cross the road? bacause it

-verb-
needs
wants
has
had


to

-verb-
poop
fuck
pop
crack
kill

the

adjective
mega
giant
enourmous
small

-subject-


*/