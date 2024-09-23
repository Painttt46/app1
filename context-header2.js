import React from "react";
import { userContext } from "./context";
import { render } from "@testing-library/react";

export default class Header2 extends React.Component{
    static contextType=userContext
    render(){
        let [user,setUser] = this.context

        const headerStyle={
            backgroundColor:'#cee',
            textAlign:'center',
            margin:10,
            padding:10



        }

        const onClickSignout=(event) => {
            event.preventDefault()
            setUser('')
        }

        const onClickSignin=(event) => {
            event.preventDefault()
            setUser('Rom Jerry')

        }

        return(
            <div style={headerStyle}>
                <a href="">Home</a>&nbsp;-&nbsp;
                <a href="">Product</a>&nbsp;-&nbsp;
                <a href="">Contact Us</a>&nbsp;-&nbsp;&nbsp;
                {
                    (user)
                    ?<span>[{user}&nbsp;:&nbsp;<a href="" onClick={onClickSignout}>Sigout</a>]</span>
                    :<span>[<a href="" onClick={onClickSignin}>Signin</a>]</span>
                }
            </div>
        )
    }
}