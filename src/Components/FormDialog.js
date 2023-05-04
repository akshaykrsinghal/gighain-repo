import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { ReactSVG } from 'react-svg';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FormTitles, GiggerWrapper, TableHeader, TableRow, TableWrapper, TitleWrapper, Wrapper } from '../Assets/StyledComponents/TableStyles';

export default function FormDialog({ giggers }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <ReactSVG src="../Images/linkIcon.svg" onClick={handleClickOpen} style={{cursor:'pointer'}} />
      <Dialog open={open} onClose={handleClose}>
        <Wrapper>
          <TitleWrapper>
            <FormTitles>
              Giggers Assigned to Gig ID 13456543:-
              (Max 5 Giggers can be assigned)
            </FormTitles>
            <Button variant='contained' style={{}}>Add</Button>
            <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          </TitleWrapper>
          <GiggerWrapper>
            <TableWrapper>
              <TableHeader>
                Gigger ID
              </TableHeader>
              <TableHeader>
                Gigger Name
              </TableHeader>
              <TableHeader>
                Status
              </TableHeader>
            </TableWrapper>
            {giggers.map((gigger,index) => {
              return (<TableWrapper key={index}>
                <TableRow>
                  123
                </TableRow>
                <TableRow>
                  Rakesh
                </TableRow>
                <TableRow>
                  Assigned
                </TableRow>
              </TableWrapper>)
            })}
          </GiggerWrapper>
        </Wrapper>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' style={{
            marginRight: '39%',
            boxSizing: 'border-box',
            width: '96px',
            height: '39px',
            background: '#3344FF',
            border: '1px solid #3344FF',
            boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.025)',
            borderRadius: '10px'
          }}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}