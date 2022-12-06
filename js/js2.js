//dynamic memory game in javascript?
// the array to hold clicked flag
var flagQueue = [];
function pickFlag(event){ //the event argument gets passed by default
    // event.target signifies the target of the event fired
    flagQueue.push(event.target.className); // push the class string to array
    if(flagQueue.length==2){                // if it has 2 elements,
        if(flagQueue[0]==flagQueue[1]){     // compare them
            alert('Congratulations');
        }
        else {
            alert('Try again');
        }
        // whatever happens, reset the flagQueue array
        flagQueue.length = 0;
    }
}

// Now we select all HTML elements with class flag
var flags = document.querySelectorAll('.flag');
// And we add an eventListener to each of them.
for(var i=0; i<flags.length; i++){
    flags[i].addEventListener('click',pickFlag);
}


// create array to keep the html elements
var flagElements = [];
// put country names into an array
var countries = ['usa','japan','sweden','finland'];
// create new elements for each of the country names
for(var i=0;i<countries.length;i++){
    // first create a div element for the flag
    var flag1 = document.createElement('div');
    // set the class to 'flag <country>'
    flag.className = 'flag '+countries[i];
    //push it to the array
    flagElements.push(flag1);
    //then create a second flag, I will just use the same code
    var flag2 = document.createElement('div');
    flag2.className = 'flag '+countries[i];
    flagElements.push(flag2);
}
// Now you have an array holding all of the divs for you.
// All you need to do is shuffle them and append to DOM.
// You can find info about shuffling on stackoverlow, just implement something
myShufflingAlogirthm(flagElements);
// to append the elements just loop over them and append to body
for(var i=0;i<flagElements.length;i++){
    document.body.appendChild(flagElements[i]);
}


