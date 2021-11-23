import { Fragment } from 'react';

import MaterialsSummary from './MaterialsSummary';
import AvailableMaterials from './AvailableMaterials';

const Materials = () => {
  return (
    <Fragment>
      <MaterialsSummary />
      <AvailableMaterials />
    </Fragment>
  );
};

export default Materials;