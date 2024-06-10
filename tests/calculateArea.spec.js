// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("should take 2 arguments", () => {
            expect(calculateArea.length).toBe(2)
        })
        it("should return a number representing the area of a rectangle", () => {
            expect(typeof calculateArea(20, 20)).toEqual("number")
        })
        it("should return the product of the two arguments", () => {
            expect(calculateArea(20, 20)).toEqual(400)
            expect(calculateArea(2.5, 2.5)).toEqual(6.25)
        })
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        })
        it("should return undefined if any of the two arguments is not a number", () => {
            const nonNumArgs = ['string', {}, [], true, null, undefined]

            nonNumArgs.forEach(arg => {
                expect(calculateArea(arg, 1)).toEqual(undefined);
                expect(calculateArea(1, arg)).toEqual(undefined);
            })
        });
    });

})