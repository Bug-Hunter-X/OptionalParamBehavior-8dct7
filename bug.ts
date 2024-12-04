function printName(name?: string): void {
  console.log(name);
}

printName(); // This will not throw an error, but will print 'undefined'.
printName(undefined); //This will print 'undefined'
printName(null); //This will print 'null'