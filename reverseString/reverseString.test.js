const reverseString = require('./reverseString.js')

it ('reverseString returns empty string for an empty string', () => {
    expect(reverseString('')).toBe('')
})

it ('reverseString works on a one letter string', () => {
    expect(reverseString('a')).toBe('a')
})


it ('reverseString works on a word string', () => {
    expect(reverseString('antenna')).toBe('annetna')
})

it ('reverseString works on a sentence with special characters', () => {
    expect(reverseString('The fox, the !!cat and the #dog.')).toBe('.god# eht dna tac!! eht ,xof ehT')
})