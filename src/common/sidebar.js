import React from 'react';
import './sidebarStyle.css';



export default function Sidebar(props){

    {/*All of the possible navigation links on the sidebar*/}
    const sidebarnavItems=["1rm calculator","Progress Tracker","Todays workout","News"]

    return(
        <div className="sidebar">
            <div className="sidebar-profile">
                {/*Would need to pass a profile image*/}
                <img src={props.pfp} alt="Profile picture"></img>
                <h1>{props.name}</h1>
            </div>
            <div className="sidebar-nav">
                <ul>
                    {sidebarnavItems.map((item)=>
                        <li key={item}>
                            <a href="">{item}</a>
                        </li>

                    )}
                </ul>
            </div>
        </div>
    )
}