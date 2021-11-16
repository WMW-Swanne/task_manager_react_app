import TaskList from './TaskList';

const Content = ({tasks, handleCheck, handleDelete}) => {

    return (
        <main>
            {tasks.length ? (
                <TaskList
                    tasks={tasks}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{marginTop: '2rem'}}>Well done you! There are 0 tasks</p>
            )}
        </main>
    )
}

export default Content