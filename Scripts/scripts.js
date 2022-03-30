// alert('PAOW!!');

const divideEl = document.querySelector('#divide');

let foo = 0;

let bar = 0;

divideEl.addEventListener('click', () => {
	console.log('divide');
});

if (isNaN(foo / bar)) {
	alert("You can't divide us!");
}

console.log(foo / bar);
