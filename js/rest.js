function Func(a, b, v, ...manyMoreArgs) {
  console.log("a, b, v =", a, b, v, manyMoreArgs)
  console.log("a, b, v =", a, b, v, ...manyMoreArgs)
}

Func(1, "два", true, 3, "чотири", false);