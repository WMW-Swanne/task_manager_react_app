import {FaTrashAlt} from 'react-icons/fa';

const TaskLine = ({task, handleCheck, handleDelete}) => {
    return (
        <li className="task">
            <input
                type="checkbox" 
                onChange={() => handleCheck(task.id)}
                checked={task.complete}
            />
            <label                            
                style={(task.complete) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(task.id)}
            >{task.description}</label>
            <FaTrashAlt
                onClick = {() => handleDelete(task.id)} 
                role="button" 
                tabIndex="0"
                aria-label={`Delete ${task.task}`}/>
        </li>
    )
}

export default TaskLine
