import './styles/main.css'
import TodoList from './Todo/TodoList'


function Main({children, ...props}) {
  return (
    <div {...props}>{children}</div>
  )
}

function Button({children}) {
  return (
    <div>{children}</div>
  )
}

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купити ячьміний свіжий хліб'},
    {id: 2, completed: false, title: 'Купити пшиничний свіжий хліб'},
    {id: 3, completed: false, title: 'Купити гречаний свіжий хліб'}
  ])

  function toggleTodo(id) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
    <div className="wrapper">
      <h1>React totoriol</h1>
      <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
    </div>
  )
}


export default App;
