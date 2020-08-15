plugins {
  kotlin("jvm") version "1.3.72"
}

repositories {
  mavenCentral()
}

dependencies {
  implementation(kotlin("stdlib", "1.3.72"))
  testImplementation("junit:junit:4.12")
}