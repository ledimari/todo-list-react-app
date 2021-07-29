import './styles.css';
import { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TaskList from 'pages/TaskList';
import CreateTask from "pages/CreateTask";

import Header from 'components/Header';

const initialState = {
  taskList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {taskList: [ ...state.taskList, action.data]};
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (value) => {
    dispatch({type: 'change', data: value});
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/create">
            <CreateTask addTask={handleChange} />
          </Route>
          <Route exact path="/">
            <TaskList data={state.taskList}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

