import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div className>
            <img src='https://cdn.tripster.ru/thumbs2/2a9a60e0-fcdb-11ed-bb0b-a25e06629b62.1220x600.jpeg' />
            <img src='https://flomaster.top/uploads/posts/2023-01/1673414155_flomaster-club-p-kvadratnie-koti-risunki-krasivo-3.jpg' />
        </div>
        <div>
            ava + discription
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile; 