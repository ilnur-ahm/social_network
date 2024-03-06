import React from "react";
import styles from './users.module.css';
import userPhoto from '../../accets/images/user.png'
import { NavLink } from "react-router-dom";
import * as axios from 'axios';



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div>
        <div>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile' + '/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5af616a0-36dd-4388-8deb-952ebeaeb2f1"
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                }); 
                            
                            
                            }}>Unfollow</button>
                            : <button onClick={() => { 
                                
                                
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5af616a0-36dd-4388-8deb-952ebeaeb2f1"
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                });
                                
                                }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div> {u.name} </div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {'u.location.country'} </div>
                        <div> {'u.location.city'} </div>
                    </span>

                </span>
            </div>)
        }

    </div>
}

export default Users;
