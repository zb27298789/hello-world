const timeArray = [3000, 2000, 1000];
function createPromise(time : number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
} 

async function run(t : number) {
    console.log(await createPromise(t));
};




//zb11 bugfix1 from test1




/* for (const ti of timeArray) {
    console.log('1111'+ti);
    run(ti);
    console.log('2222'+ti);
} */
async function test(){ 
for (const ti of timeArray) {
    console.log('1111'+ti);
    console.log(await createPromise(ti));
    console.log('2222'+ti);
}
}
test();