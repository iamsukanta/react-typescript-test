import { useRoutes } from 'react-router-dom';
import routes from './router';
import "./app.scss";

const App = () => {
  const content = useRoutes(routes);
  return (
    <div>
      {content}
    </div>
    
  );
}
export default App;

