// 1. Declare variables and capture input.
let adjective = prompt ("Enter an Adjective : ");
let noun = prompt ("Now enter a Noun: ");
let verb = prompt ("Finally enter your Verb: ");


// 2. Combine the input with other words to create a story. 
//there once was a cool programmer who wanted to use JavaScript to make coffee. 
let story = `<p> There once was a ${adjective} programmer who wanted to ${verb} JavaScript to make ${noun} </p>`;
console.log (story);


// 3. Display the story as a <p> inside the <main> element.
document.querySelector ('main').innerHTML = story;