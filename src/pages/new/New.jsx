import './new.scss';
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const New = ({ title }) => {
  const [file, setFile] = useState('');

  return (
    <div className="new">
      <SideBar />

      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://i5.walmartimages.com/asr/538e6ee9-b8ce-4c50-bb78-e0ef9ca3e5d7.d92a2e915d667614f121ea11f0d1ec7e.jpeg'
              }
              alt="avatar"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  image <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Jack_Sparrow"
                />
              </div>
              <div className="formInput">
                <label htmlFor="nameSurname">Name and Surname</label>
                <input
                  type="text"
                  name="nameSurname"
                  id="nameSurname"
                  placeholder="Jack Sparrow"
                />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Jacksparrow@gmail.com"
                />
              </div>
              <div className="formInput">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+123 45 67 890"
                />
              </div>
              <div className="formInput">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="formInput">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Elton St. 126 New York"
                />
              </div>
              <div className="formInput">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="USA"
                />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
