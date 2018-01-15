import uniqNumber from './../index';
describe('UniqNumber', () => {
    it('should return 3 unique number in range of 0-10 in ascending order', () => {
        let uniqRan = uniqNumber(
            {
                min: 0,
                max: 10,
                count: 3,
                sort: 'asc'
            }
        );
        expect(uniqRan.length).toBe(3)

        for (let index = 0; index <= uniqRan.length - 1; index++) {
            if (index === uniqRan.length - 1) {
                expect(uniqRan[index] !== uniqRan[0]).toBeTruthy();
                expect(0 <= uniqRan[index] <= 10).toBeTruthy();
            } else {
                expect(uniqRan[index] !== uniqRan[index + 1]).toBeTruthy();
                expect(uniqRan[index] < uniqRan[index + 1]).toBeTruthy();
                expect(0 <= uniqRan[index] <= 10).toBeTruthy();
            }

        }
    });

    it('should return one number not array if count is not provided', () => {
        let uniqRan = uniqNumber(
            {
                min: 0,
                max: 10,
            }
        );
        expect(Array.isArray(uniqRan)).toBeFalsy()

    });

    it('should return array if count is provided', () => {
        let uniqRan = uniqNumber(
            {
                min: 0,
                max: 10,
                count: 2
            }
        );
        expect(Array.isArray(uniqRan)).toBeTruthy()

    });

    it('should return 3 unique number in range of 0-10 in descending order', () => {
        let uniqRan = uniqNumber(
            {
                min: 0,
                max: 10,
                count: 3,
                sort: 'desc'
            }
        );
        expect(uniqRan.length).toBe(3)

        for (let index = 0; index <= uniqRan.length - 1; index++) {
            if (index === uniqRan.length - 1) {
                expect(uniqRan[index] !== uniqRan[0]).toBeTruthy();
                expect(0 <= uniqRan[index] <= 10).toBeTruthy();
            } else {
                expect(uniqRan[index] !== uniqRan[index + 1]).toBeTruthy();
                expect(uniqRan[index] > uniqRan[index + 1]).toBeTruthy();
                expect(0 <= uniqRan[index] <= 10).toBeTruthy();
            }

        }
    });

    describe('should throw error when value of', () => {
        it('sort is not asc/desc', () => {
            expect(() => {
                uniqNumber(
                    {
                        sort: "SOME_STRING"
                    }
                );
            }).toThrowError("Value of `sort` should be either `asc` or `desc`");
        });

        it('min is not number', () => {
            expect(() => {
                uniqNumber(
                    {
                        min: "SOME_STRING"
                    }
                );
            }).toThrowError("Only number accepted");
        });

        it('max is not number', () => {
            expect(() => {
                uniqNumber(
                    {
                        max: "SOME_STRING"
                    }
                );
            }).toThrowError("Only number accepted");
        });

        it('count is not number', () => {
            expect(() => {
                uniqNumber(
                    {
                        count: "SOME_STRING"
                    }
                );
            }).toThrowError("Only number accepted");
        });

        it('min is gretear than max', () => {
            expect(() => {
                uniqNumber(
                    {
                        min: 10,
                        max: 2
                    }
                );
            }).toThrowError("Value of `min` should be greater than `max`");
        });

        it('count of less than diff of max and min', () => {
            expect(() => {
                uniqNumber(
                    {
                        min: 2,
                        max: 5,
                        count: 10
                    }
                );
            }).toThrowError("Value of `count` should not be lesser than `max-min`");
        });

        it('min is matching to default max value', () => {
            expect(() => {
                uniqNumber(
                    {
                        min: 100
                    }
                );
            }).toThrowError("Incorrect `min` value beacuse its matching with default value of `max`");
        });

    });

})