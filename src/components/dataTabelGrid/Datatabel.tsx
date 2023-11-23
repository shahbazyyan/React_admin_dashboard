import { Link } from 'react-router-dom';
import './datatable.scss';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';

interface Props {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}


function Datatabel(props: Props) {

    function deleteItem (id: number) {
        console.log(id + "deleted");
        
    }

    const columnsforAction: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
         renderCell: (params) => {
            return (
                <div className="action">
                <Link to ={`/${props.slug}/${params.row.id}`}>
                 <img src="/view.svg" alt="view" />
                </Link>
                <div className="delete" onClick={() => {
                    deleteItem(params.row.id)
                }}>
                    <img src="/delete.svg" alt="" />
                </div>
                </div>
            )
         }
    }
   
    return (
        <div className='datatabel'>
                    <DataGrid className='data-grid'
                        rows={props.rows}
                        columns={[...props.columns, columnsforAction]}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        slots={{toolbar: GridToolbar}}
                        slotProps={{
                            toolbar: {
                                showQuickFilter: true,
                                quickFilterProps: {debounceMs: 500}
                            }
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
        </div>
    )
}

export default Datatabel