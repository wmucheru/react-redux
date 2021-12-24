import axios from "../utils/axios";

axios.baseURL = 'https://swapi.dev/api/';

const SwapiService = {
    getPeople: () => { 
        return axios.get('people');
    },

    getPerson: (id) => {

    }
}

export default SwapiService;