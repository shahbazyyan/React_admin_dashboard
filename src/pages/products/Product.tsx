import Add from '../../components/add/Add';
import Datatabel from '../../components/dataTabelGrid/Datatabel';
import { products } from '../../data';
import './product.scss';
import { useState } from 'react';
import {GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

function Product() {

    const [open, setOpen] = useState(false);

    return (
      <div className="products">
          <div className="info">
          <h1>Products</h1>
          <button onClick={() => setOpen(true)}>Add new products</button>
          </div>
          <Datatabel slug="products" columns={columns} rows={products} /> 
          {open && <Add slug='prroducts' columns={columns} setOpen={setOpen}/>}
      </div>
    )
}

export default Product