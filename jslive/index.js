function test() {
  var a = "shu";

  function test2() {
    var a = "ayu";
  }
  test2();
  console.log(a);
}
test();
