import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://flomaster.top/uploads/posts/2023-01/1673414155_flomaster-club-p-kvadratnie-koti-risunki-krasivo-3.jpg' />
        {props.message}
        <div>
            <span>like </span>
            {props.likes}
        </div>

    </div>
}

export default Post;