function wrapInArray<T>(value: T): T[]{
    return [value];
}

wrapInArray(10);
wrapInArray("Masala");
wrapInArray({flavor: "Ginger"});

//
function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b];
}

pair(10, "Masala");
pair("Masala", 10);
pair("masala", "ginger");
pair("masala", {flavour: "ginger"})


//* Generic Interfaces
interface Box<T> {
    content: T;
}

// const numberBox: Box<number> = {content: 10}
const numberBox: Box<string> = {
    content: "Masala"
}

//* Note - In generic -- partial, pick, omit are also available in TS
// Partial<T>

//* Generic real world use case -- use in API response, form state of react, 
interface ApiPromise<T>{
    status: number;
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "Masala"}
}
