import Datatabel from '../../components/dataTabelGrid/Datatabel';
import { userRows } from '../../data';
import './users.scss';
import {GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];



function Users() {
  return (
    <div className="users">
        <div className="info">
        <h1>Users</h1>
        <button>Add new user</button>
        </div>
        <Datatabel slug="users" columns={columns} rows={userRows} /> 
    </div>
  )
}

export default Users