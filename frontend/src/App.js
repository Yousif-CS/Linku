// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import './components/_chat/Chat.css';
import ChatComponent from './components/_chat/ChatComponent';
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <div className="chatbois">
        <ChatComponent />
      </div>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
