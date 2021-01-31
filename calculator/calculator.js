const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => {
    return (b === 0) ? null: a/b;
}

module.exports = {
	add,
	sub,
	mult,
	div}