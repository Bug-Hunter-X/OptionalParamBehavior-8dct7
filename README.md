# Unexpected Behavior of Optional Parameters with undefined and null in TypeScript

This code demonstrates unexpected behavior when using optional parameters in TypeScript with undefined and null values.  While TypeScript allows optional parameters, the default value of undefined might not always align with how developers expect null to be handled.

## Bug

The `printName` function accepts an optional `name` parameter. If the parameter is omitted, it defaults to `undefined`.  The issue arises because both omitting the parameter and explicitly passing `undefined` or `null` result in the same output: 'undefined' or 'null' printed to the console.  This might not be the intuitive behavior expected by developers.

## Solution

To address this, we can explicitly check for null or undefined values and handle them differently.
