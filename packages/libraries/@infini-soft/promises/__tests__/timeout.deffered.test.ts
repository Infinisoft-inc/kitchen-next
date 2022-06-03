/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { factoryPromiseFuncNeverResolve, promiseTimeOutDeffered } from "../src";


describe('promiseTimeOutDeffered() Unit Testing', () => {

    it('Should resolve', async () => {
        const actual = promiseTimeOutDeffered({
            request: () => Promise.resolve("success")
        })

        expect(actual).resolves.toMatch("success");
    });

    it('Should reject', async () => {
        const actual = promiseTimeOutDeffered({
            request: () => Promise.reject("rejected")
        })

        expect(actual).rejects.toMatch("rejected");
    });

    it('Should reject gentle error', async () => {
        const actual = promiseTimeOutDeffered({
            request: () => Promise.resolve("Gentle Error"),
            gentleError: () => true
        })

        expect(actual).rejects.toMatch("Gentle Error");
    });

    it('Should timeout, debounce and reject after 4000ms', async () => {
        const startTime = new Date().getTime();
        try {
            await promiseTimeOutDeffered({
                request: factoryPromiseFuncNeverResolve,
                timeout: 2000,
                delay: 2000
            })

        } catch (actual) {
            const duration = new Date().getTime() - startTime
            expect(actual).toStrictEqual("timeout");
            expect(duration).toBeGreaterThanOrEqual(3950);
            expect(duration).toBeLessThan(4050);
        }
    });
});
