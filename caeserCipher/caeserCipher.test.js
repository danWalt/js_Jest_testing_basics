const caeserCipher = require('./caeserCipher')



it ('abcdefghijklmnopqrstuvwxyz', () => {
    expect(caeserCipher('abcdefghijklmnopqrstuvwxyz',1)).toBe('bcdefghijklmnopqrstuvwxyza')
})


it ('defend the east wall of the castle', () => {
    expect(caeserCipher('defend the east wall of the castle',1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

it ('ABCDEFGHIJKLMNOPQRSTUVWXYZ', () => {
    expect(caeserCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ',23)).toBe('XYZABCDEFGHIJKLMNOPQRSTUVW')
})

it ('The dog, Jumped over the FENCE!', () => {
    expect(caeserCipher('The dog, Jumped over the FENCE!',4)).toBe('Xli hsk, Nyqtih sziv xli JIRGI!')
})