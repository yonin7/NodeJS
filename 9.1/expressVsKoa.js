//! Pros
//1. It easier to write middleware because of the framework’s flexibility
//2. It uses ES6 async/await functions to eliminate the use of callbacks.
//3. It is very lightweight at around 500 lines of code.
//4. More modular

//! Cons
// 1. The open-source community is also much smaller in comparison meaning there is less support available
// 2. Although async/await eliminates the need for callbacks, multiple async calls at once can still result in async/await hell.
// 3. Koa specific middleware is also not compatible with other frameworks.
// 4.Koa does not provide any built-in routing middleware, so you have to install a module like koa-router.
