import { Routes, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routers";
import Layout from "./components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomDialog from "./components/customDialog";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          {PrivateRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Route>
        <Route path="auth">
          {PublicRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>

      <CustomDialog />
    </div>
  );
}

export default App;
