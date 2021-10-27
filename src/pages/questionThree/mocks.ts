import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import AcUnit from '@material-ui/icons/AcUnit';
import { v4 } from 'uuid';

import { IMockData } from './types';

interface ICreateRowDataParams {
    species: string | null;
    name: string | null;
    Icon: React.FC<SvgIconProps> | null;
    description: string | null;
}

/*
 * Please do not add all the mock data statically here.
 * While you would solve the problem, you would not be solving the bug ;)
 * */

const defaultMock: IMockData = {
    species: 'Human',
    name: 'Jon Snow',
    icon: AcUnit,
    description: 'You know nothing, Jon Snow.',
};

const createRowData = ({
    name,
    species,
    Icon,
    description,
}: ICreateRowDataParams): IMockData => {
    let rowData = { ...defaultMock };

    rowData.id = v4();
    rowData.name = name ? name : rowData.name;
    rowData.species = species ? species : rowData.species;
    rowData.icon = Icon ? Icon : rowData.icon;
    rowData.description = description ? description : rowData.description;

    return rowData;
};

export { createRowData };
