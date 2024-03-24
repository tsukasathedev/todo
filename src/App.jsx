import { useState , useRef } from 'react';
import '/src/Styles.css';
import useTodos from '/src/hooks/useTodos.jsx';

function App() {
  const { TodoValue, taches, AddTasks, DeleteTasks, ModifyTask, ChangeValue } = useTodos();
  const [editableIndex, setEditableIndex] = useState(null);
  const [editInputValue, setEditInputValue] = useState('');
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleModify = (index) => {
    setEditableIndex(index);
    setEditInputValue(taches[index]);
  };

  const handleSubmitEdit = () => {
    if (editInputValue.trim() !== '') {
      ModifyTask(editableIndex, editInputValue);
      setEditableIndex(null);
      setEditInputValue('');
    }
  };



  return (

    <div>
      <div className="square"></div>
    <h1>My <span className='simple'>Simple</span> To-Do-List.</h1>
    <h3>Here you can plan all your tasks simply. No login needed. Enjoy ! </h3>
    <div className='container'>
    <img src="src/media/todolistImg.webp" alt="" />
    <div className='arrow' onClick={scrollToBottom}></div>
    <div className='content'>
      <input type="text" value={TodoValue} onChange={ChangeValue}  placeholder='Your to-do thing here'/>
      <button onClick={AddTasks}  className='addtask'>Add a task</button>
      <ul ref={bottomRef} >
        {taches.map((todo, index) => (
          <li key={index}>
            {editableIndex === index ? (
              <>
                <input type="text" value={editInputValue} onChange={(e) => setEditInputValue(e.target.value)} />
                <button onClick={handleSubmitEdit}>Submit</button>
              </>
            ) : (
              <>
                {todo}
                <br />
                <button onClick={() => DeleteTasks(index)}>Delete this task</button>
                <button onClick={() => handleModify(index)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>

    </div>
  );
}

export default App;
