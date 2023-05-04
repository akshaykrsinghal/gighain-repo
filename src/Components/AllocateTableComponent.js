import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { AssignedGiggerWrapperr } from '../Assets/StyledComponents/AlocateStyles';
import FormDialog from './FormDialog';
import { LinearProgress } from '@mui/material';




export default function AllocateTableComponent() {
  const [rows, setrows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  function RenderDate(props) {
    const { value } = props;
      return <AssignedGiggerWrapperr>
          {value.length}
          <FormDialog giggers={rows}/>
        </AssignedGiggerWrapperr>
  }
  const columns = [
    { field: 'id', headerName: 'Gig ID', width: 100 },
    { field: 'gigtype', headerName: 'Gig Type', width: 130 },
    { field: 'attendance', headerName: 'Attendance', width: 130 },
    {
      field: 'location',
      headerName: 'Location',
      width: 200,
    },
    {
      field: 'giggersassigned',
      headerName: '#Giggers Assigned',
      width: 204,
      renderCell: RenderDate
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 204,
    },
  ];
  const getRowData = async()=>{
    let result = [];
    await axios.get('https://gigchainbetapro.onrender.com/getGiggers').then(data=>{
      data.data.data.map(gigerItem=>{
        result.push({
          id:gigerItem._id,
          gigtype:gigerItem.Type,
          attendance:gigerItem.Attendence,
          location:gigerItem.Location,
          giggersassigned:gigerItem.GiggersAssigned,
          status:gigerItem.Status
        })
        return result;
      })
      setrows(result);
      setIsLoading(false);
    })
  }
  
  React.useEffect(() => {
    getRowData();
  }, [])
  
  
  return (
    <div style={{ height: 400, width: '100%',backgroundColor:'#FFF',marginTop:'32px' }}>
      <DataGrid
        slots={{
          loadingOverlay: LinearProgress
        }}
        loading={isLoading}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}