import('@wasm')
  .then(module => {
    const { memory, rust_eh_personality, add } = module
    console.log(add(1, 2))
  })
