import { useState } from "react"
import shortid from "shortid"

function TodoForm(props) {
    const [text, setText] = useState("")
    function handelSubmit(e) {
        e.preventDefault()
        props.onSubmit({
            id : shortid.generate(),
            text : text,
            complete : false,
        })
        setText("")
    }
  return (
    <form onSubmit={handelSubmit} action="">
      <input
        className="input-field"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="btn">Add Task</button>
    </form>
  )
}
export default TodoForm