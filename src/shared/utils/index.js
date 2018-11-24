
// usage to sleep for two seconds: await sleep(2000);  
export const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)));

export async function sleepTest(ms, name = '') { 
    console.log(`${name} sleeping for ${ms} milliseconds`);
    await sleep(ms);
    console.log(`${name} awoke`);
}

// return array of unique numbers between 1 and length (inclusive) in random order
export const randomArray = (length) => {
    let arr = []
    while(arr.length < length){
        //  +1 here because first value in array is 1, not zero
        var randomnumber = Math.floor(Math.random()*length) + 1;
        if(arr.indexOf(randomnumber) > -1) 
          continue;
        arr[arr.length] = randomnumber;
    }
    return arr;
  }
