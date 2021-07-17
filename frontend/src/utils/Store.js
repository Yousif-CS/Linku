import React from 'react';

export const defaultUser = {
  user_id: -1,
  username: 'test username',
  first_name: 'test first name',
  last_name: 'test last name',
  email: 'test@test.com',
  token: '',
  role: 'student',
  socket_token: '',
  photoURL: '/static/mock-images/avatars/avatar_default.jpg'
}

export const boardData = {
  lanes: [
    {
      id: 'to_do',
      title: 'To-do',
      label: '2/2',
      cards: [
        {id: 0, title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', },
        {id: 1, title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', }
      ]
    },
    {
      id: 'in_progress',
      title: 'In Progress',
      label: '0/0',
      cards: []
    },
    {
      id: 'complete',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
  ]
}

const appContextDefaultValue = {
  user: defaultUser,
  setUser: () => {},
  board: boardData,
  setBoard: () => {},
};
  
export const AppContext = React.createContext(appContextDefaultValue);

export const AppProvider = (props) => {
  const [user, setUser] = React.useState(appContextDefaultValue.user);
  const [board, setBoard] = React.useState(appContextDefaultValue.board);

  const store = {
    user,
    setUser,
    board,
    setBoard
  }

  return (
    <AppContext.Provider value={store}>
      {props.children}
    </AppContext.Provider>
  );
};