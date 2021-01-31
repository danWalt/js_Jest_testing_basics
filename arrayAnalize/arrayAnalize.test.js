const arrayAnalize = require('./arrayAnalize')



it ('empty list', () => {
    expect(arrayAnalize([])).toBe(null)
})


it ('1 item list', () => {
    expect(arrayAnalize([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    })
})


it ('4 item list', () => {
    expect(arrayAnalize([1,2,3,4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    })
})


it ('negative items list item list', () => {
    expect(arrayAnalize([-5,-12,-20,100,3,6,12,-44,50,0])).toEqual({
        average: 9,
        min: -44,
        max: 100,
        length: 10
    })
})