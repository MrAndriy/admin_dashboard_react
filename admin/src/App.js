import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Single from './components/single/Single';
import New from './components/new/New';
import { DarkModeContext } from './contex/darkModeContext';
import { AuthContext } from './contex/AuthContext';

//styles
import './SCSS/App.scss';

import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import DashBoard from './components/DashBoard/DashBoard';
import Datatable from './components/datatable/DataTable';
import { hotelColumns, roomColumns, userColumns } from './datatablesource';
import NewHotel from './components/NewHotel/NewHotel';
import NewRoom from './components/NewRoom/NewRoom';
import Chart from './components/chart/Chart';

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
              <Route path="find/:userId" element={<Single />} />
              <Route path="new" element={<New title="Add New User" />} />
            </Route>
            <Route path="hotels">
              <Route index element={<Datatable columns={hotelColumns} />} />
              <Route path="find/:hotelId" element={<Single />} />
              <Route path="new" element={<NewHotel />} />
            </Route>
            <Route path="rooms">
              <Route index element={<Datatable columns={roomColumns} />} />
              <Route path="find/:roomId" element={<Single />} />
              <Route path="new" element={<NewRoom />} />
            </Route>
            <Route path="analytics" element={<Chart aspect={2/1} title='Last 6 months' />} />
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
