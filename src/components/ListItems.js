import React from "react";



const ListItems = (props) => {
    console.log("props",props.listItems)
        const listItems = props.listItems.map((item) => {
           return <li>{item}</li>
        });
        return  <ul>{listItems}</ul>

    }


export default ListItems