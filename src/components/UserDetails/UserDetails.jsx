import { useLoaderData } from "react-router-dom";
import './UserDetails.css'
const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div>
            <h2>Details about user:{name} </h2>
            <p>Website: <span className="web">{website}</span></p>
        </div>
    );
};

export default UserDetails;