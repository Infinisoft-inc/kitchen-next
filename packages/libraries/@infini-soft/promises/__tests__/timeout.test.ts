/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { factoryPromiseFuncNeverResolve, factoryPromiseFuncResolveIn, promiseTimeout } from "../src";


describe('promiseTimeout() Unit Testing', () => {

    it('Should resolve', async () => {
        const actual = promiseTimeout({
            request: () => Promise.resolve("success")
        })

        expect(actual).resolves.toMatch("success");
    });

    it('Should reject', async () => {
        const actual = promiseTimeout({
            request: () => Promise.reject("rejected")
        })

        expect(actual).rejects.toMatch("rejected");
    });

    it('Should reject gentle error', async () => {
        const actual = promiseTimeout({
            request: () => Promise.resolve("Gentle Error"),
            gentleError: () => true
        })

        expect(actual).rejects.toMatch("Gentle Error");
    });

    it('Should timeout and reject after 2000ms', async () => {
        const startTime = new Date().getTime();
        try {
            await promiseTimeout({
                request: factoryPromiseFuncNeverResolve,
                timeout: 2000
            })

        } catch (actual) {
            const duration = new Date().getTime() - startTime
            expect(actual).toStrictEqual("timeout");
            expect(duration).toBeGreaterThanOrEqual(1950);
            expect(duration).toBeLessThan(2050);
        }
    });

    it('Should timeout and reject after 1000ms', async () => {
        const startTime = new Date().getTime();
        try {
            await promiseTimeout({
                request: factoryPromiseFuncResolveIn(3000),
                timeout: 1000
            })

        } catch (actual) {
            const duration = new Date().getTime() - startTime
            expect(actual).toStrictEqual("timeout");
            expect(duration).toBeGreaterThanOrEqual(950);
            expect(duration).toBeLessThan(1050);
        }
    });

    it('Should timeout, call cancel and reject after 1000ms', async () => {
        const cancel = jest.fn()
        const startTime = new Date().getTime();
        try {
            await promiseTimeout({
                request: factoryPromiseFuncResolveIn(3000),
                timeout: 1000,
                cancel
            })

        } catch (actual) {
            const duration = new Date().getTime() - startTime
            expect(actual).toStrictEqual("timeout");
            expect(cancel).toBeCalled();
            expect(duration).toBeGreaterThanOrEqual(950);
            expect(duration).toBeLessThan(1050);
        }
    });

});
