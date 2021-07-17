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

const cardStyle = {
  backgroundColor: '#d5e7f5',
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
  color: '#4C4C4C', 
  fontWeight: 'bold'
}

const titleStyle = {
  color: '#4C4C4C', fontSize: 20, marginBottom: 10,
}

export const boardData = {
  lanes: [
    {
      id: 0,
      title: 'To-Do',
      label: '12/12',
      style: cardStyle,
      titleStyle: titleStyle,
      labelStyle: labelStyle,
      cards: [
        {
          title: 'test',
          description: 'yeet',
          label: 'xdxd',
          status: 'complete',
          mentee_id: 1,
          project_id: 2,
          cardColor: '#BD3B36',
          cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #BD3B36', marginBottom: 15},
          metadata: {id: 'Card1'},
          tags: [{title: 'Critical', color: 'white', bgcolor: 'red'}, {title: '2d ETA', color: 'white', bgcolor: '#0079BF'}]
        },
      ]
    },
    {
      id: 1,
      title: 'In Progress',
      cards: [],
      style: cardStyle,
      titleStyle: titleStyle,
      labelStyle: labelStyle,
    },
    {
      id: 2,
      title: 'Complete',
      cards: [],
      style: cardStyle,
      titleStyle: titleStyle,
      labelStyle: labelStyle,
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