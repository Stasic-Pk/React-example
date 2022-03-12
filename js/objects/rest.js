function Func(a, b, v, ...manyMoreArgs) {
  console.log("a, b, v =", a, b, v, "and", manyMoreArgs)
  console.log("a, b, v =", a, b, v, "and", ...manyMoreArgs)
}

let arr = [1, "два", true, 3, "чотири", false]

Func(...arr);
