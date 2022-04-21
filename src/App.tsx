import { useRoutes } from 'react-router-dom';
import routes from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
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

