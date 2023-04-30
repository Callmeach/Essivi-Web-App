import "../styles/datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../data/datatableSource";
import { Link } from "react-router-dom";

const Datatable = ({label, data}) => {
      

  const handleDelete = (id) => {
    data.filter((item) => item.id !== id);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {label}
        <Link to="new" className="link">
          Ajouter Nouveau
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
