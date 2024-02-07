import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return <div>
        <div>
            <img src='https://cdn.tripster.ru/thumbs2/2a9a60e0-fcdb-11ed-bb0b-a25e06629b62.1220x600.jpeg' />
        </div>
        <div>
            ava + discription
        </div>
        <MyPosts />
    </div>
}

export default Profile; 