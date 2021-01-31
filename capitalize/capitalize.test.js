const capitalize = require('./capitalize')


it ('capitalize returns empty string for an empty string', () => {
    expect(capitalize('')).toBe('')
})

it ('Capitalized one letter string', () => {
    expect(capitalize('a')).toBe('A')
})


it ('Capitalized word string', () => {
    expect(capitalize('antenna')).toBe('Antenna')
})

it ('capitalize all caps', () => {
    expect(capitalize('ANTENNA')).toBe('Antenna')
})