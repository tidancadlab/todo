import {useState} from 'react'

const todo = ({props, fun, onTodoChangeSave, onTodoComplete}) => {
  const [edit, setEdit] = useState(false)
  const [editedTitle, setEditedTitle] = useState(props.title)
  const onEditTitle = e => {
    setEditedTitle(e.target.value)
  }
  const onSaveTitle = e => {
    e.preventDefault()
    onTodoChangeSave({...props, title: editedTitle})
    setEdit(false)
  }
  const onComplete = e => {
    onTodoComplete({...props, isDone: e.target.checked})
  }
  return !edit ? (
    <li className="flex justify-between items-center my-2 p-3 gap-2 rounded-2xl max-[542px]:flex-col max-[542px]:items-start bg-white ">
      <div className="flex gap-2 items-center">
        <input
          className="peer hidden"
          type="checkbox"
          name=""
          id={props.id}
          onChange={onComplete}
          checked={props.isDone}
        />
        <label
          htmlFor={props.id}
          className={`
          before:content-[''] before:w-4 before:h-4 before:border before:rounded before:bg-green-500 before:border-green-500 before:hidden before:peer-checked:block
          after:content-[''] after:w-4 after:h-4 after:block after:border after:rounded after:border-black after:peer-checked:hidden`}
        />
        <p className="peer-checked:line-through font-bold">{props.title}</p>
      </div>
      <div className="flex gap-2 self-end">
        <button
          type="button"
          disabled={props.isDone}
          className="bg-violet-500 disabled:bg-violet-500/50 text-white px-4 py-1 rounded-lg"
          onClick={() => {
            setEdit(true)
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-black/90"
          onClick={() => fun(props.id)}
        >
          Delete
        </button>
      </div>
    </li>
  ) : (
    <li className="max-w-2xl bg-white p-3 rounded-2xl w-full my-2">
      <form className="flex gap-4">
        <input
          className="w-full border border-black px-2 py-0.5 rounded-lg outline-none"
          placeholder="Todos"
          type="text"
          onChange={onEditTitle}
          value={editedTitle}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-1 rounded-lg"
          onClick={onSaveTitle}
        >
          Save
        </button>
      </form>
    </li>
  )
}
export default todo
