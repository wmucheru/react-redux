import { useFetch } from '../utils/useFetch';

const SWAPI_URL = 'https://swapi.dev/api/people';

export default function Swapi() {
    const [data] = useFetch(SWAPI_URL);

    const listPeople = () => {
        console.log(data);

        if (data.results) {
            return (
                data.results.map((r, i) => {
                    return <li key={i}>{r.name}</li>
                })
            )
        }
    }

    return (
        <>
            <h4>People</h4>
            { listPeople() }
        </>
    )
}