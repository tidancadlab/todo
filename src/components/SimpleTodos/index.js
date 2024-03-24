import {useState} from 'react'
import Todo from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    isDone: false,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    isDone: false,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    isDone: false,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    isDone: false,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    isDone: false,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    isDone: false,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    isDone: false,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const SimpleTodos = () => {
  const [afterDelete, setAfterDelete] = useState(initialTodosList)
  const [todoInput, setTodoInput] = useState('')
  const deleteTodo = e => {
    setAfterDelete(afterDelete.filter(v => v.id !== e))
  }
  const onInputChange = e => {
    setTodoInput(e.target.value)
  }
  const onAddTodo = e => {
    e.preventDefault()
    setAfterDelete(previous => [
      ...previous,
      {
        id: previous[previous.length - 1]?.id + 1 || 0,
        title: todoInput,
        isDone: false,
      },
    ])
    setTodoInput('')
  }
  const onTodoChangeSave = data => {
    const todo = afterDelete.map(v =>
      v.id === data.id ? {...v, title: data.title} : v,
    )
    setAfterDelete(todo)
  }
  const onTodoComplete = data => {
    const todo = afterDelete.map(v =>
      v.id === data.id ? {...v, isDone: data.isDone} : v,
    )
    setAfterDelete(todo)
  }
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center gap-3">
      <h1 className=" font-extrabold text-5xl text-center mb-4 text-white">
        Simple Todos
      </h1>
      <div className="max-w-2xl bg-white p-4 rounded-2xl w-full ">
        <form className="flex gap-4" onSubmit={onAddTodo}>
          <input
            className="w-full border border-black px-2 py-1 rounded-lg outline-none"
            placeholder="Todos"
            type="text"
            onChange={onInputChange}
            value={todoInput}
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-1 rounded-lg"
          >
            Add
          </button>
        </form>
      </div>
      {afterDelete.length > 0 && (
        <div className="container max-w-2xl">
          <ul className="overflow-auto max-h-[calc(100vh-200px)]">
            {afterDelete.map(v => (
              <Todo
                props={v}
                key={v.id}
                fun={deleteTodo}
                onTodoChangeSave={onTodoChangeSave}
                onTodoComplete={onTodoComplete}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default SimpleTodos
