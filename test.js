async function test() {
    for(let i=1; i<6; i++) {
        await console.log(i);
        await console.log(2*i);
    }

}

test()