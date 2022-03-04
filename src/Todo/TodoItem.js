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

export default function TodoItem({todo, index}) {
  return (
   <li style={styles.li}>
     <span>
       <input type="checkbox" style={styles.input} />
       <strong> {index + 1} </strong>
        {todo.title}
     </span>
     <button className="rm">&times;</button>
    </li>
  )
}
