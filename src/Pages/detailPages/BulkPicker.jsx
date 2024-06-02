import React from 'react';

import Details from './Details';
import { detailsData } from '../../Constants/data/projectDetails/bulkPicker';


function BulkPicker() {
  return (
    <Details data = { detailsData }/> 
  )
}

export default BulkPicker