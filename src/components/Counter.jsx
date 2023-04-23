import React from 'react'

const Counter = function () {
  const [count, setCount] = (0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {increment}>increment</button>
      <button onClick = {decrement}>decrement</button>
    </div>
  )
}

export default Counter