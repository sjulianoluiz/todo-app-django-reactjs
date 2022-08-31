import { useState } from 'react';
import './App.css';

const todoItems = [
  {
    id: 1,
    title: "task 1",
    description: "task 1",
    completed: true,
  },
];

function App() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState(todoItems);

  const renderTabList = () => {
    return (
      <div className='nav nav-tabs'>
        <span
          className={viewCompleted ? 'nav-link active' : 'nav-link'}
          onClick={() => setViewCompleted(true)}
        >
          Complete
        </span>
        <span
          className={viewCompleted ? 'nav-link' : 'nav-link active'}
          onClick={() => setViewCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  const renderItems = () => {
    const newItems = todoList.filter(item => item.completed == viewCompleted);

    return newItems.map(item => (
      <li
        key={item.id}
        className='list-group-item d-flex justify-content-between align-items-center'
      >
        <span
          className={`todo-title mr-2 ${viewCompleted ? 'completed-todo' : ''}`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button className='btn btn-secondary mr-2'>
            Edit
          </button>
          <button className='btn btn-danger'>
            Delete
          </button>
        </span>
      </li>
    ));
  };

  return (
    <div className="App">
      <main className='container'>
        <h1 className='text-white text-uppercase text-center my-4'>Todo app</h1>
        <div className='row'>
          <div className='col-md-6 col-sm-10 mx-auto p-0'>
            <div className='card p-3'>
              <div className='mb-4'>
                <button className='btn btn-primary'>
                  Add task
                </button>
              </div>
              {renderTabList()}
              <ul className='list-group list-group-flush border-top-0'>
                {renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
