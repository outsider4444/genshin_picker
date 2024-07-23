import React from 'react';
import Icon from "../Icons/Icon";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

const Profile = () => {
    return (
        <div>
            <div>
                <div style={{height: "250px", border: "green solid 1px"}}>
                    <img
                        src="https://genshin-info.ru/upload/resize_cache/iblock/9a8/w4vrp5t2uh6px1u2ovpoloa6tsglw7gh/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Klorinda.webp"
                        alt="" style={{width: "200px", borderRadius: "50%", border: "5px solid black"}}/>
                </div>
                <div>Никнейм</div>
            </div>
            {/*<Icon size={100}/>*/}
            {/*<Icon size={100}/>*/}
            {/*<Icon size={100}/>*/}
            {/*<Icon size={100}/>*/}
        </div>
    );
};

export default Profile;
