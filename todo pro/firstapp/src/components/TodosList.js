import React from 'react'

const TodosList = ({todos, setTodos}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div>
        {todos.map((todo) => (
            <li className="list-items" key={todo.id}>
                <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />

                <div>
                    
                    <button className="button-delete" onClick={() => handleDelete(todo)} >
                        
                    <i><b>Delete</b></i>
                    </button>
                </div>
            </li>

        )
        
        )}
    </div>
  )
}

export default TodosList