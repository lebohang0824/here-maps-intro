import React from 'react';

class Map extends React.Component {

	constructor(props) {
		super(props);

		// Component state
		this.state = { url: null }
	}

	componentDidMount() {

		// Props
		const map_type = this.props.map_type;
		const api_key = this.props.api_key;

		// Conver object to array
		let props = Object.entries(this.props);

		// Constructing Url
		let url = `https://image.maps.ls.hereapi.com/mia/1.6/${map_type}?apiKey=${api_key}`;

		// Filter
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(loc => {
				// User's coordinates
				url +=`&waypoint0=${loc.coords.latitude},${loc.coords.longitude}`;
				url += `&poix0=${loc.coords.latitude},${loc.coords.longitude};00A6ED;00A6ED;18;.`

				// Rebuild url
				props.forEach(prop => {
					if (!prop.includes('map_type') && !prop.includes('api_key')) {
						url += `&${prop[0]}=${prop[1]}`;
						console.log(prop)
					}
				});

				this.setState({ url: url });

			}, err => console.log(err));
		}

	}

	render() {
		return <img src={this.state.url} alt='map' />;
	}
}

export default Map;