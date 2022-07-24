import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { DarkModeContext } from './contex/darkModeContext';
import { AuthContext } from './contex/AuthContext';

//styles
import './SCSS/App.scss';

import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import DashBoard from './components/DashBoard/DashBoard';
import Datatable from './components/datatable/DataTable';
import { userColumns } from './datatablesource';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route path="users">
              <Route index element={<Datatable columns={userColumns} />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New title="Add New User" />} />
            </Route>
            <Route path="hotels">
              <Route index element={<p>hotels</p>} />
              <Route path=":hotelId" element={<Single />} />
              <Route path="new" element={<New title="Add New Hotel" />} />
            </Route>
            <Route path="rooms">
              <Route index element={<p>rooms</p>} />
              <Route path=":roomId" element={<Single />} />
              <Route path="new" element={<New title="Add New Room" />} />
            </Route>
            <Route path="analytics" element={<p>analitics</p>} />
            <Route path="messages" element={<p>messages</p>} />
            <Route path="logout" element={<p>logout</p>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
