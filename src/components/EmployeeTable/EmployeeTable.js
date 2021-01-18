import * as React from 'react';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';
import { ButtonLink } from '../common/Link';

class EmployeeTable extends  React.Component{

  render() {
    return (
      
      <div style={{ height: 800, width: '100%' }}>
        <ButtonLink url='/employee/add' name='Add Employee'/>
        <div style={{ paddingTop: '15'}}>
          <EmployeeDetails />
        </div>
      </div>
      
    );
  }
}

export default EmployeeTable;