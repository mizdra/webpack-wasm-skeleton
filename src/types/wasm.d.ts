declare module "@wasm" {
  export const memory: any
  export const rust_eh_personality: any
  export function add(a: number, b: number): number
}
