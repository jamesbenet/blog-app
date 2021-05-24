import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <>
            <Link className="post" to={`/posts/${props._id}`}>
                <img className="post-image" src={props.imgURL} alt={props.name} />
                <div className="post-name">{props.name}</div>
                <div className="price">{`$${props.price}`}</div>
            </Link>
        </>
    )
}
export default Post