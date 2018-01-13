import uniqNumber from './../index';
describe('UniqNumber', () => {
    it('ge', () => {
        let x = uniqNumber(
            {
                min : 0,
                max: 10,
                count : 3
            }
        );
        expect(x.length).toBe(3)
    })
})