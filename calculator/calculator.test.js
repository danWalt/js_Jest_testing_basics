const calculator = require('./calculator')



it ('sum 1+1', () => {
    expect(calculator.add(1,1)).toBe(2)
})


it ('sum float 1.5+8.7', () => {
    expect(calculator.add(1.5,8.7)).toBe(10.2)
})

it ('multiply 1*1', () => {
    expect(calculator.mult(1,1)).toBe(1)
})


it ('multiply 1*0', () => {
    expect(calculator.mult(1,0)).toBe(0)
})

it ('multiply float 1.5*8.7', () => {
    expect(calculator.mult(1.5,8.7)).toBeCloseTo(13.05)
})

it ('multiply negatives -6*-7', () => {
    expect(calculator.mult(-6,-7)).toBe(42)
})

it ('multiply negatives -6*7', () => {
    expect(calculator.mult(-6,7)).toBe(-42)
})


it ('divide 1/1', () => {
    expect(calculator.div(1,1)).toBe(1)
})


it ('divide 1/0', () => {
    expect(calculator.div(1,0)).toBe(null)
})

it ('divide float 1.5/8.7', () => {
    expect(calculator.div(1.5,8.7)).toBeCloseTo(0.172)
})

it ('divide negatives -6/-7', () => {
    expect(calculator.div(-6,-7)).toBeCloseTo(0.8571428571428571)
})

it ('divide negatives -6/7', () => {
    expect(calculator.div(-6,7)).toBeCloseTo(-0.8571428571428571)
})

it ('subtract 1-1', () => {
    expect(calculator.sub(1,1)).toBe(0)
})


it ('sum float 1.5-8.7', () => {
    expect(calculator.sub(1.5,8.7)).toBeCloseTo(-7.2)
})