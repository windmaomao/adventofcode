plugins {
  kotlin("jvm") version "1.3.61"
}

repositories {
  mavenCentral()
}

dependencies {
  implementation(kotlin("stdlib", "1.3.61"))
  testImplementation("junit:junit:4.12")
}