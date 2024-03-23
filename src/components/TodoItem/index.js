import './index.css'
const todo = ({props, fun}) => {
  return (
    <li>
      <p>{props.title}</p>
      <button onClick={() => fun(props.id)}>Delete</button>
    </li>
  )
}
export default todo
