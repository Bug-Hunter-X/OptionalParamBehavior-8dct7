function printName(name?: string): void {
  if (name === undefined) {
    console.log('Name is undefined');
  } else if (name === null) {
    console.log('Name is null');
  } else {
    console.log(name);
  }
}

printName(); // Prints 'Name is undefined'
printName(undefined); // Prints 'Name is undefined'
printName(null); // Prints 'Name is null'
printName("John Doe"); // Prints 'John Doe' 