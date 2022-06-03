/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { promiseDeffered } from "../src";


describe('promiseDeffered() Unit Testing', () => {

    it('Should resolve', async() =>{
        const actual = promiseDeffered({
            request: () => Promise.resolve("success")
        })

        expect(actual).resolves.toMatch("success");
    });

    it('Should reject', async() =>{
        const actual = promiseDeffered({
            request: () => Promise.reject("rejected")
        })

        expect(actual).rejects.toMatch("rejected");
    });

    it('Should resolve after 2000ms', async() =>{
        const startTime = new Date().getTime();
        const actual = await promiseDeffered({
            request: () => Promise.resolve("success"),
            delay: 2000
        })
        const duration = new Date().getTime() - startTime

        expect(actual).toStrictEqual("success");
        expect(duration).toBeGreaterThanOrEqual(1950);
        expect(duration).toBeLessThan(2050);
    });

    it('Should reject after 2000ms', async() =>{
        const startTime = new Date().getTime();
        try{
            await promiseDeffered({
                request: () => Promise.reject("rejected"),
                delay: 2000
            })
        } catch(context){
            const duration = new Date().getTime() - startTime
            expect(context).toStrictEqual("rejected");
            expect(duration).toBeGreaterThanOrEqual(1950);
            expect(duration).toBeLessThan(2050);
        }
    });
});
