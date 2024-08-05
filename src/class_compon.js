import React from "react";
export default class Calendar extends React.Component{
    getDate(){
        const dayname=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
        const monthname = ['january','february','march','april','may','june','july','august','september','october','november','december']
        const date = new Date()
        const weekDay = dayname[date.getDay()]
        const day = date.getDate()
        const month = monthname[date.getMonth()]
        const year = date.getFullYear()
        return `${weekDay} ${day} ${month} ${year}`
    }
    render(){
        return <div>{this.getDate()}</div>
    }
}