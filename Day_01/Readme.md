# TypeScript Day_01


## What is TypeScript?

TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.


## How to install TypeScript?

`npm install -g typescript`

This installs the TypeScript Compiler tsc globally. You can use npx or similar tools if you’d prefer to run tsc from a local node_modules package instead.

Now let’s move to an empty folder and try writing our first TypeScript program: hello.ts

## How can we cpmpile the ts file

tsc hello.ts