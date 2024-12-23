import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import './PostDetails.css'

const PostDetails = () => {
    const post = useLoaderData();
    const {postid} = useParams();
    const {id,title,body} = post;
    const navigate = useNavigate();
    console.log(postid);
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div className="PostDetails">
            <h2>Post id: {id}</h2>
            <h3>Post Title: {title}</h3>
            <p><small>{body}</small></p>

            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;