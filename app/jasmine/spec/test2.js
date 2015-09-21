/**
 * If you look at the console output for this page, you should see the output from this reporter
 */
describe('Top Level suite2', function () {
    it('spec2', function () {
        expect(1).toBe(1);
    });

    describe('Nested suite2', function () {
        it('nested spec2', function () {
            expect(false).toBe(true);
        });
    });
});