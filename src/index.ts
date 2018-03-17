import('./wasm/lib')
  .then(module => {
    const { add, greet } = module
    console.log(add(1, 2))
    greet('mizdra')
  })
