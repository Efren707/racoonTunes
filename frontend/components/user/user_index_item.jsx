import React from "react";
import {Link} from "react-router-dom";

class UserIndexItem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const {user} = this.props;
        let followerCount = 0;
        let songCount = 0;

        if(user.username === "LaFlame"){
            followerCount = "2.14M";
            songCount = "151";
        }
        if(user.username === "YoungThug"){
            followerCount = "1.13M";
            songCount = "404";
        }
        if(user.username === "FrankOcean"){
            followerCount = "803K";
            songCount = "26";
        }
        if(user.username === "MacMiller"){
            followerCount = "721K";
            songCount = "317";
        }

        return(

            <li className="discover-users-li">
                <Link to={`/users/${user.id}`}><img className="discover-user-pic" src={user.profile_pic} alt="user pic" /></Link>
                <div className="discover-user-names">
                    <Link to={`/users/${user.id}`} className="discover-user-username"><h2>{user.username}</h2></Link>
                    <div style={{display: "flex", alignItems: "center", paddingTop: "3px", paddingLeft: "10px"}}>
                        <img style={{height: "2.2vh", width: "2.2vh", paddingRight: "2px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+CiAgICA8cGF0aCBmaWxsPSJyZ2JhKDE1MywgMTUzLCAxNTMsIDAuNykiIGQ9Ik0xOC40IDE4LjVsMi41IDUgLjIuNWg2LjlsLTIuMS00LjMtNC4xLTEuNXYtMi41YzEuMi0xLjEgMS44LTMuMiAxLjgtNS4xIDAtMi4xLTItMy42LTMuNS0zLjZzLTMuNSAxLjYtMy41IDMuNmMwIDEuOS41IDQgMS44IDUuMXYyLjVoLS4xbC4xLjN6Ii8+CiAgICA8cGF0aCBmaWxsPSJyZ2IoMTUzLCAxNTMsIDE1MykiIGQ9Ik0xNy41IDE5bC01LTEuOHYtM2MxLjQtMS4yIDItMy44IDItNS45IDAtMi40LTIuMy00LjMtNC00LjMtMS43IDAtNCAxLjgtNCA0LjMgMCAyLjIuNiA0LjcgMiA1Ljl2M2wtNSAxLjgtMi41IDVoMTlsLTIuNS01eiIvPgo8L3N2Zz4K"/>
                        <h5 style={{fontSize: "11px"}}>{followerCount}</h5>&nbsp;
                        <img style={{height: "2.2vh", width: "2.2vh", paddingRight: "2px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+CiAgICA8cmVjdCB4PSI1IiB5PSIxMiIgZmlsbD0icmdiKDM0LCAzNCwgMzQpIiB3aWR0aD0iMiIgaGVpZ2h0PSI0Ii8+CiAgICA8cmVjdCB4PSIyMSIgeT0iMTIiIGZpbGw9InJnYigzNCwgMzQsIDM0KSIgd2lkdGg9IjIiIGhlaWdodD0iNCIvPgogICAgPHJlY3QgeD0iMTciIHk9IjEwIiBmaWxsPSJyZ2IoMzQsIDM0LCAzNCkiIHdpZHRoPSIyIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjkiIHk9IjgiIGZpbGw9InJnYigzNCwgMzQsIDM0KSIgd2lkdGg9IjIiIGhlaWdodD0iMTIiLz4KICAgIDxyZWN0IHg9IjEzIiB5PSI1IiBmaWxsPSJyZ2IoMzQsIDM0LCAzNCkiIHdpZHRoPSIyIiBoZWlnaHQ9IjE4Ii8+Cjwvc3ZnPgo="/>
                        <h5 style={{fontSize: "11px"}}>{songCount}</h5>
                    </div>
                </div>
            </li>            
            
        )
    }
}

export default UserIndexItem;