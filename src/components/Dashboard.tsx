import React from "react";
import "./Dashboard.css"
import { PrimaryButton, SearchBox } from "@fluentui/react";
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
interface DashboardProps {

}

interface DashboardState {
    location: string,
    currentTemperature: number|null
}

interface IPlacesData {
    locationName: string;
    currentTime: string;
    temperature: number;
    forecast: string;
    highTemp: number;
    lowTemp: number;
}

const placesData: IPlacesData[] = [{
    locationName: "Hyderabad",
    currentTime: "16:20",
    temperature: 29,
    forecast: "Mostly Coludy",
    highTemp: 30,
    lowTemp: 21
}, {
    locationName: "Hyderabad",
    currentTime: "16:20",
    temperature: 29,
    forecast: "Mostly Coludy",
    highTemp: 30,
    lowTemp: 21
}, {
    locationName: "Hyderabad",
    currentTime: "16:20",
    temperature: 29,
    forecast: "Mostly Coludy",
    highTemp: 30,
    lowTemp: 21
}]

class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
            location: "",
            currentTemperature: null
        }
    }
    componentDidMount(): void {
        // this.getWeatherData();
    }
    getWeatherData = async (location: string) => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6e785234f113443582465107222504&q=${location}&aqi=no`);
        const weatherData = await response.json();
        this.setState({
            currentTemperature:weatherData.current.temp_c
        })
        console.log(weatherData);
    }
    render() {
        let favourites = placesData.map((place: IPlacesData) => {
            return <div className="favouritePlace">
                <div className="leftFav">
                    <div>{place.locationName}</div>
                    <div className="currentTime">{place.currentTime}</div>
                    <div className="forecast">{place.forecast}</div>
                </div>
                <div className="rightFav">
                    <div className="temperature">{place.temperature}</div>
                    <div className="HLTemp">
                        <div>H:{place.highTemp}</div>
                        <div>L:{place.lowTemp}</div>
                    </div>
                </div>
            </div>
        })
        return (<div className="dashboard">

            <div className="leftPanel">
                {favourites}
            </div>
            <div className="rightPanel">
                <div className="searchBarParent">
                    <div></div>
                    <div className="searchBar">
                        <SearchBox placeholder="Search" onChanged={(newValue: string) => { this.setState({ location: newValue }) }} className="searchField" />
                        <PrimaryButton text="Search" onClick={() => {
                            console.log(this.state.location);
                            this.getWeatherData(this.state.location);
                        }} />
                    </div>
                </div>
                <div className="currentForecast">
                    <p>{this.state.location}</p>
                        <h1>
                            {this.state.currentTemperature}
                        </h1>
                </div>
            </div>

        </div>);
    }
}

export default Dashboard;