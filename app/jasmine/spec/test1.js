/**
 * If you look at the console output for this page, you should see the output from this reporter
 */
describe('Top Level suite1', function () {
    it('spec1', function () {
        expect(1).toBe(1);
    });

    describe('Nested suite1', function () {
        it('nested spec1', function () {
            expect(false).toBe(true);
        });
    });
});