import React from 'react';

export const defaultUser = {
  user_id: -1,
  username: 'test username',
  first_name: 'test first name',
  last_name: 'test last name',
  email: 'test@test.com',
  token: '',
  role: '',
  socket_token: '',
  photoURL: '/static/mock-images/avatars/avatar_default.jpg',
  industry: {},
  company: '',
}

const cardStyle = {
  backgroundColor: '#e1e9f2',
  flexGrow: 1,
  boxShadow: 10,
  borderRadius: 10,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 20,
  paddingBottom: 20,
  margin: 10,
  minHeight: 815,
  minWidth: 300,
}

const labelStyle = {
  color: '#2867b2', 
  fontWeight: 'bold'
}

const titleStyle = {
  color: '#2867b2', fontSize: 20, marginBottom: 10,
}

export const boardData = {
  lanes: [
    {
      id: "0",
      title: 'To-Do',
      label: '12/12',
      style: cardStyle,
      titleStyle: titleStyle,
      labelStyle: labelStyle,
      cards: []
    },
    {
      id: "1",
      title: 'In Progress',
      cards: [],
      style: cardStyle,
      titleStyle: titleStyle,
      labelStyle: labelStyle,
      editable: false,
    },
    {
      id: "2",
      title: 'Complete',
      cards: [],
      style: cardStyle,
      titleStyle: titleStyle,
      labelStyle: labelStyle,
      editable: false,
    },
  ]
}

const appContextDefaultValue = {
    user: defaultUser,
    setUser: () => {},
    board: boardData,
    setBoard: () => {},
    project: {},
    setProject: () => {},
    tasks: [],
    setTasks: () => {},
    mentees: [],
    setMentees: () => {},
    messages: [],
    setMessages: () => {},
  };
  
export const AppContext = React.createContext(appContextDefaultValue);

export const AppProvider = (props) => {
  const [user, setUser] = React.useState(appContextDefaultValue.user);
  const [board, setBoard] = React.useState(appContextDefaultValue.board);
  const [project, setProject] = React.useState(appContextDefaultValue.project);
  const [tasks, setTasks] = React.useState(appContextDefaultValue.tasks)
  const [mentees, setMentees] = React.useState(appContextDefaultValue.mentees)
  const [messages, setMessages] = React.useState(appContextDefaultValue.messages)

  const store = {
    user,
    setUser,
    board,
    setBoard,
    project,
    setProject,
    tasks,
    setTasks,
    mentees,
    setMentees,
    messages,
    setMessages
  }

  return (
    <AppContext.Provider value={store}>
      {props.children}
    </AppContext.Provider>
  );
};