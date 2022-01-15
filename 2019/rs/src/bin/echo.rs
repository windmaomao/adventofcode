use clap::{App, Arg};

fn main() {
  let matches = App::new("echo")
    .version("0.1.0")
    .author("Fang Jin")
    .about("Rust echo")
    .arg(
      Arg::with_name("text")
       .value_name("TEXT")
       .help("Input text")
       .required(true)
       .min_values(1)
    )
    .get_matches();

  println!("{:#?} ", matches);
}
