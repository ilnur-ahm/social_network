import Preloader from '../../Common/Preloader/Preolader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../accets/images/user.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return <div>
       {/* <div>
            <img src='https://cdn.tripster.ru/thumbs2/2a9a60e0-fcdb-11ed-bb0b-a25e06629b62.1220x600.jpeg' />
</div>*/}

        <div className= {s.descriptionBlock}>
            <img src = {props.profile.photos.large || userPhoto } />
            <ProfileStatusWithHooks status={props.status} updateStatus = {props.updateStatus} />
        </div>
    </div>
}

export default ProfileInfo; 