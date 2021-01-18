import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



export default function AddEmployee() {
return (
    <div>
    <Button variant="contained" color="primary" href="./AddEmployee"><Link to="/dashboard/datatable/formemployee">Add Employee</Link>
      </Button>
    </div>
  )
}