function printType(value) {
    console.log("The type of the value is:" + typeof value);
    return typeof value;
}
printType({name: "Ana"}); 
printType(true)
printType(42);
printType("Hello");
printType(undefined);

