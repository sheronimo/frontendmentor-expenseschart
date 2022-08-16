import { data } from './data.js';

const chart = document.querySelector('#bar-chart');

const amounts = data.map((d) => {
	return d.amount;
});

const max = Math.max(...amounts);

console.log(max);

data.forEach((d) => {
	// Create list item
	let listItem = document.createElement('li');

	// Create bar
	let bar = document.createElement('div');
	bar.classList.add('bar');

	if (d.amount === max) {
		bar.style.height = 'var(--bar-highest)';
	} else {
		bar.style.height = `${(150 / max) * d.amount}px`;
	}

	bar.setAttribute('data-tooltip', `$${d.amount}`);

	if (d.day === 'wed') {
		bar.classList.add('bar-secondary');
	}

	// Create day
	let day = document.createElement('p');
	day.classList.add('text-sm', 'clr-neutral');
	day.textContent = d.day;

	// Append to list
	listItem.appendChild(bar);
	listItem.appendChild(day);

	// Append to chart
	chart.appendChild(listItem);
});
