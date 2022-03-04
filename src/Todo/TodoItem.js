import PropTypes from 'prop-types'
import React from "react"


const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    berderRadius: '4px',
    MarginBottom: '.5rem'
  },
  input: {
    MarginRight: '1rem'
  }
}

export default function TodoItem({todo, index, onChange}) {
  console.log('todo', todo)

  return (
   <li style={styles.li}>
     <span>
       <input type="checkbox" style={styles.input} onChange={() => console.log(todo.id)} />
       <strong> {index + 1} </strong>
       &nbsp;
        {todo.title}
     </span>
     <button className="rm">&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}
