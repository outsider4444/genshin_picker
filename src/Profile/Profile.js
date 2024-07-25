import React from 'react';
import styles from './Profile.module.css'

const Profile = ({userInfo, setUserInfo}) => {
    if (!userInfo) {
        return <div>Loading...</div>;
    }
    console.log(userInfo)
    return (
        <div>
            <div>
                <div style={{height: "250px"}} className={styles.profile}>
                    <div></div>
                    <div>
                        <img
                            src="https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp"
                            alt="" style={{width: "200px", borderRadius: "50%", border: "5px solid black"}}/>
                        <div>{userInfo.username}</div>
                    </div>
                    <div>
                        <button className={styles.changeBtn}>Изменить профиль</button>
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyItems: "center"}}>
                    <div style={{height: "1px", width: "60%", background: "black", marginLeft: "384px"}}></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
