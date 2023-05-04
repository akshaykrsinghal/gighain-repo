import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { AssignedGiggerWrapperr } from '../Assets/StyledComponents/AlocateStyles';
import FormDialog from './FormDialog';
import styled from 'styled-components';
import { LinearProgress } from '@mui/material';



const ProofWrapper = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #808080;
`;

export default function TrackingTableComponent() {
  const [rows, setrows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  function RenderDate(props) {
      const { value } = props;
      return <AssignedGiggerWrapperr>
          {value?.length}
          <FormDialog giggers={rows}/>
        </AssignedGiggerWrapperr>
  }
  function RenderDateProof(props) {
    const { value } = props;
    return <ProofWrapper href={value}>
        Directory Link
      </ProofWrapper>
}
  const columns = [
    { field: 'id', headerName: 'Gig ID', width: 100 },
    { field: 'gigtype', headerName: 'Gig Type', width: 130 },
    {
      field: 'location',
      headerName: 'Location',
      width: 70,
    },
    {
        field:'proof',
        headerName:'Proof',
        width:130,
        renderCell: RenderDateProof
    },
    {
      field: 'giggersassigned',
      headerName: '#Giggers Assigned',
      width: 150,
      renderCell: RenderDate
    },
    {
        field: 'giggersaccepted',
        headerName: '#Giggers Accepted',
        width: 150,
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
          proof:gigerItem._id,
          attendance:gigerItem.Attendence,
          location:gigerItem.Location,
          giggersassigned:gigerItem.GiggersAssigned,
          giggersaccepted:gigerItem.GiggersAssigned,
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