import Header from './Header';
import SearchTask from './SearchTask';
import AddTask from './AddTask';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';


function App() {

	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
	const [newTask, setNewTask] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        
    }, [tasks])

    const setAndSaveTasks = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem('taskList', JSON.stringify(newTasks));
    }

	const addTask = (description) => {
        //set the id value by checking if the list of tasks has any values. If so, then increment the id value, if not then id = 1
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        //define the new task
        const myNewTask = {id, complete: false, description };
        // create a new array to update the state list
        const listTasks = [...tasks, myNewTask]
        //update the state
        setAndSaveTasks(listTasks);
    }

    const handleCheck = (id) => {
        const listTasks = tasks.map((task) => task.id === id ? {...task, complete: !task.complete} : task);
        setAndSaveTasks(listTasks);
    }

    const handleDelete = (id) => {
        const listTasks = tasks.filter((task) => task.id !== id);
        setAndSaveTasks(listTasks);
    }

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent the default action of reloading the entire page
        if(!newTask) return; // validate for a value in the setnewTask field
        addTask(newTask);// addTask
        setNewTask(''); // set the input field value to blank again
	}


	return (
		<div className="App">
			<Header title="Task List" />
            <AddTask 
				newTask={newTask} 
				setNewTask={setNewTask} 
				handleSubmit={handleSubmit}	
			/>
            <SearchTask
                search={search}
                setSearch={setSearch}
            />
			<Content 
				tasks={tasks.filter(task => ((task.description).toLowerCase()).includes(search.toLocaleLowerCase()))}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer 
				length={tasks.length}
			/>
		</div>
		);
	}

export default App;
