import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {id, title } = post;
    const navigate = useNavigate();

    const hanleShowDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h1>Post of Id:{id}</h1>
            <h4> {title}</h4>
            <Link to={`/post/${id}`}> show datails</Link>
            <Link to={`/post/${id}`}> <button>SHOW DETAILS</button></Link>

            <button onClick={hanleShowDetails}>click to see details</button>
        </div>
    );
};

export default Post;