import React from "react";
import "./Dashboard.css"
import { PrimaryButton, SearchBox } from "@fluentui/react";
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
interface DashboardProps {

}

interface DashboardState {
    location: string
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
            location: ""
        }
    }
    componentDidMount(): void {
        // this.getWeatherData();
    }
    getWeatherData = async (location:string) => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6e785234f113443582465107222504&q=${location}&aqi=no`);
        const movies = await response.json();
        console.log(movies);
    }
    render() {
        return (<div className="dashboard">

            <div className="leftPanel">
                <SearchBox placeholder="Search" onChanged={(newValue: string) => { this.setState({ location: newValue }) }} />
                <PrimaryButton text="Primary" onClick={() => {
                    console.log(this.state.location);
                    this.getWeatherData(this.state.location);
                }} />

            </div>
            <div className="rightPanel">right</div>

        </div>);
    }
}

export default Dashboard;