import React from 'react';

// Components
import Map from './maps/Map';

// Styles
import './App.scss';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { location: null }
	}

	render() {

		return <Map
					map_type="routing"
					api_key="y5uAo2qUpBPRjkN__l79sl5wLQ4JPeXMAJTdqKukvUQ"
					waypoint1="-26.202266,28.0608166"
					poix1="-26.202266,28.0608166;FF2C55;FF2C55;30"
					ppi="72"
					w="800"
					h="800"
					t="0"
					/>;
	}
}

export default App;
