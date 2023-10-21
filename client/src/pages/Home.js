import axios from "axios"



export const Home = () => {
    const BASE_URL = "http://localhost:5000/";
    axios.get(BASE_URL+"getUser",{ withCredentials: true })
    .then(response => {
        console.log(response.data);
    }).catch((error) => {
        console.error('Error posting data', error);
      // Handle errors
    });

    return <>
        <div>
            <p>Hi </p>

        </div>
    </>
}