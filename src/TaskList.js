import TaskLine from './TaskLine';

const TaskList = ({tasks, handleCheck, handleDelete}) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskLine
                    key={task.id}
                    task={task}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default TaskList
