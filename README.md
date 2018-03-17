# webpack-wasm-skeleton
WebAssemblyの素振り環境.

## Requirements
Rust 及び `wasm32-unknown-unknown` ターゲットを有効化する必要があります.
また `cargo-watch`, `wasm-bindgen-cli` のインストールが必要です.


```bash
# Rust のインストール
# ref: https://www.rust-lang.org/ja-JP/install.html
$ curl https://sh.rustup.rs -sSf | sh
$ export PATH="$HOME/.cargo/bin:$PATH"
$ rustc --version


## nightlyの有効化
$ rustup install nightly
$ rustup default nightly
$ rustc --version


# `wasm32-unknown-unknown` ターゲットの有効化
# ref: https://www.hellorust.com/news/native-wasm-target.html
$ rustup update
$ rustup target add wasm32-unknown-unknown --toolchain nightly


# `cargo-watch`, `wasm-bindgen-cli` のインストール
$ cargo install cargo-watch
$ cargo install wasm-bindgen-cli
```

## Usage
1. `mkdir new-project && cd $_`
1. `wget -O - https://github.com/mizdra/webpack-wasm-skeleton/archive/master.tar.gz | tar xzvf - --strip=1 --exclude LICENSE`
1. `npx npm-check-updates -a`
1. `yarn install --force`
1. `yarn run dev`


## Option
- `license MIT > LICENSE`
