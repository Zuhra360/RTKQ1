import React, { useState } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { addtodo, deletetodo, edittodo} from '../../Redux/Slice/TodoSlice';

export const Todo = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [newTask,setNewTask] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);

  
    const handleAddOrEditTask = () => {
      if (!newTask) return;
  
      if (editingTaskId) {
        
        dispatch(edittodo({ id: editingTaskId, newTodo: newTask }));
        setEditingTaskId(null); 
      } else {
        
        dispatch(addtodo(newTask));
      }
  
      setNewTask(''); 
    };
  
    
    const handleEditTask = (id, currentTask) => {
      setEditingTaskId(id);
      setNewTask(currentTask); 
    };
    const handleDeleteTask = (id) => {
      dispatch(deletetodo(id));
    };

  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <div className='w-3/5 h-2/3 bg-white flex  flex-col'>
        <h1 className='text-4xl font-bold p-4  '>TODOLIST</h1>
        <div className='flex flex-row'>
            <input
             name="task"
             type="text"
             value={newTask}
             onChange={(e) => setNewTask(e.target.value)}
             placeholder='Your Task'
             className="border-2 border-black w-11/12 p-1 text-base rounded "
             
            />
            <button className='w-24 h-12 text-white bg-black rounded-lg '  onClick={handleAddOrEditTask}>
            {editingTaskId ? 'Edit' : 'Add'}
            </button>
        </div>

        <div>
        <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="p-2 flex justify-between">
                <label className='flex gap-2 text-xl font-semibold'>
                  <input type="checkbox" className='px-2 ' />
                  {todo.todo}
                </label>
                <div className='flex gap-2'>
                    <button
                      className="bg-gray-700 text-white text-md px-2 rounded"
                      onClick={() => handleEditTask(todo.id, todo.todo)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-700 text-white text-md px-2 rounded"
                      onClick={() => handleDeleteTask(todo.id)}
                    >
                      Delete
                    </button>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
          
      </div>
      
    </div>
  )
}


