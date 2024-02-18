// Immediately invoked function expressions (IIFE)
// is used in order to avoid GLOBAL SCOPE pollution problems

(function chai() {
    // named IIFE
  console.log("DB connected");
})();
// first (Function Defination), Second() (Function Execution)

((name)=>{
    console.log(`DB connected TWO ${name}`)
})("usman")
// unname IIFE ⬆️