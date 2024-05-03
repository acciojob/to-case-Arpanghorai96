function toCase(text) {
  // write your code here
	let lo=text.toLowerCase();
	let up=text.toUpperCase();
	return `${lo}-${up}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
