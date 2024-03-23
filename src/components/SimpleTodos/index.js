const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]
import Todo from '../TodoItem'
import {useState} from 'react'
import './index.css'

const SimpleTodos = () => {
  const [afterDelete, setAfterDelete] = useState(initialTodosList)
  const deleteTodo = e => {
    setAfterDelete(afterDelete.filter(v => v.id !== e))
  }
  return (
    <div className="main">
      <div className="container">
        <h1>Simple Todos</h1>
        <ul>
          {afterDelete.map(v => (
            <Todo props={v} key={v.id} fun={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SimpleTodos
