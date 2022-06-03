/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { factoryPromiseFuncNeverResolve, factoryPromiseFuncRejectIn, factoryPromiseFuncResolveIn } from "../src";


describe('Helpers Unit Testing', () => {

    it('promiseTimeOutDebounce() Should return function', async () => {
        const promiseFn = factoryPromiseFuncNeverResolve
        expect(typeof promiseFn).toBe('function');
    });

    it('promiseTimeOutDebounce() Should return call that resolve after 1000ms', async () => {
        const startTime = new Date().getTime();
        const promiseFn = factoryPromiseFuncResolveIn(1000)
        await promiseFn()
        const duration = new Date().getTime() - startTime

        expect(typeof promiseFn).toBe('function');
        expect(duration).toBeGreaterThanOrEqual(950);
        expect(duration).toBeLessThan(1050);
    });

    it('factoryPromiseFuncRejectIn() Should return call that rejects after 1000ms', async () => {
        const startTime = new Date().getTime();
        let promiseFn;
        try {
            promiseFn = factoryPromiseFuncRejectIn(1000)
            await promiseFn()
        } catch (err) {
            const duration = new Date().getTime() - startTime

            expect(typeof promiseFn).toBe('function');
            expect(duration).toBeGreaterThanOrEqual(950);
            expect(duration).toBeLessThan(1050);
        }

    });
});
