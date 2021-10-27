import axios from 'axios';

import { ICardDetails } from './types';

async function getCardDetails() {
    return axios
        .get<ICardDetails | undefined>('http://localhost:3001/example')
        .then((response) => response.data);
}

export { getCardDetails };
