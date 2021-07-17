// routes
import Router from './routes';
import React from 'react';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import './components/_chat/Chat.css';
import ChatComponent from './components/_chat/ChatComponent';
import { AppContext } from './utils/Store';

// ----------------------------------------------------------------------

export default function App() {
  const user = React.useContext(AppContext).user;
  return (
    <ThemeConfig>
      { user.token !== '' ?
        <div className="chatbois">
          <ChatComponent />
        </div> : null
      }
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
