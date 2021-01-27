function dividing() {
  for (let a = 1; a <= 20; a++) {
    if (a % 3 == 0 && a % 5 == 0) {
      console.log("Apple Orange", a);
    } else if (a % 3 == 0 && a % 5 != 0) {
      console.log("Apple", a);
    } else if (a % 5 == 0 && a % 3 != 0) {
      console.log("Orange", a);
    } else {
      console.log("Looping... number ", a);
    }
  }
}
dividing();
