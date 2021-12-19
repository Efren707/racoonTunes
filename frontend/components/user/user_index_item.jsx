import React from "react";
import {Link} from "react-router-dom";

class UserIndexItem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const {user} = this.props;

        return(

            <li className="discover-users-li">
                <Link to={`/users/${user.id}`}><img className="discover-user-pic" src={user.profile_pic} alt="user profile photo" /></Link>
                <Link to={`/users/${user.id}`} className="discover-user-username"><h2>{user.username}</h2></Link>
            </li>            
            
        )
    }
}

export default UserIndexItem;