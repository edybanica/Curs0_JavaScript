let nr = 277, i = 5, a = 0, b = 0;

if (nr <= 1) {
    console.log(`${nr} nu este prim.`); a = 1;
} else if (nr <= 3) {
    console.log(`${nr} este prim.`); a = 1;
} else if (nr % 2 === 0 || nr % 3 === 0) {
    console.log(`${nr} nu este prim.`); a = 1;
}

if (!a) {
    while (i * i <= nr) {
        if (nr % i === 0 || nr % (i + 2) === 0) {
            console.log(`${nr} nu este prim.`); b = 1;
        }
        i += 6;
    }
    if (!b) console.log(`${nr} este prim.`);
}
