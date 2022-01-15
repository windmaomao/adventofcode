use clap::App;

fn main() {
  let matches = App::new("echo")
    .version("0.1.0")
    .author("Fang Jin")
    .about("Rust echo")
    .get_matches();

  println!("{:#?}", matches);
}
