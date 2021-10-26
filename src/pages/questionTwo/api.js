import axios from "axios";

async function getCardDetails() {
	return axios.get('http://localhost:3001/example').then((response) => response.data);
}

export { getCardDetails }