import * as util from '../shared/utils';
//  might have many api routines, use seperate file

// export const makeRequest = () => (fetch(`http://localhost:3500/rappers`));


export async function makeRequest(sleepTime = 1000) { 
    await util.sleep(sleepTime);
    return fetch(`http://localhost:3500/rappers`);
}


