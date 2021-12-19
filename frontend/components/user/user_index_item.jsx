import React from "react";
import {Link} from "react-router-dom";

class UserIndexItem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const {user} = this.props;

        return(

            <li>
                <Link to={`/users/${user.id}`}><img className="discover-user-pic" src={user.profile_pic} alt="user profile photo" /></Link>
                <Link to={`/users/${user.id}`}><h1>{user.name}</h1></Link>
                <Link to={`/users/${user.id}`}><h2>{user.username}</h2></Link>
            </li>            
            
        )
    }
}

export default UserIndexItem;