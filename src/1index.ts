function greet(name : string): string {
    return `Hello, ${name}`;
}


const username : string = "Chai aur Typescript";
console.log(greet(username));






/**
 * npm i -D typescript
 * npx tsc --init   -> tsconfig.json file create hoti hai
 * tsconfig.json me "outDir": "./dist" set karna hai
 * npx tsc - in dist folder js files generate hote hain
 * node dist/index.js - run karne ke liye -> set start/dev script in package.json
 * 
 */


// webpackbundleranalyzer

