// // App.js 
//IP ADDRESS FINDER
// import { useEffect, useState } from 'react'; 
// import Axios from 'axios'; 
// import Map from './components/Map'; 
// import './App.css'; 

// function App() { 

// 	// Setting up the initial state variables 
// 	const [ipDetails, setIpDetails] = useState([]); 
// 	const [lat, setLat] = useState(22.5726); 
// 	const [lon, setLon] = useState(88.3832); 

// 	// Fetching the API once when the 
// 	// component is mounted 
// 	useEffect(() => { 
// 		Axios.get('https://ipapi.co/json/').then((res) => { 
// 			setIpDetails(res.data); 
// 			setLat(res.data.latitude); 
// 			setLon(res.data.longitude); 
// 		}); 
// 	}, []) 

// 	return ( 
// 		<> 
// 			<h1 className="heading">IP Address Finder</h1> 
// 			<div className="App"> 
// 				<div className="left"> 
// 					<h4>What is my IPv4 address?</h4> 
// 					<h1 id="ip">{ipDetails.ip}</h1> 
// 					<h4>Approximate location: </h4> 

// 					<p>{ipDetails.city}, {ipDetails.region}, 
// 						{ipDetails.country_name}.</p> 


// 					<h4>Internet Service Provider(ISP):</h4> 

// 					<p>{ipDetails.org}</p> 

// 				</div> 
// 				<Map lat={lat} lon={lon} /> 
// 			</div> 
// 		</> 
// 	); 
// } 

// export default App;
// // Map.js 

// import React, { useEffect, useState } from 'react'; 
// import ReactMapGL, { Marker } from 'react-map-gl'; 
// import { RiUserLocationFill } from 'react-icons/ri'; 

// const API_KEY = '<YOUR_API_KEY>'; 

// const Map = ({ lat, lon }) => { 

// 	// Setting up the initial viewport of the map 
// 	const [viewport, setViewport] = useState({ 
// 		latitude: lat, 
// 		longitude: lon, 
// 		zoom: 14, 
// 		bearing: 0, 
// 		pitch: 0, 
// 		width: '100%', 
// 		height: '100%', 
// 	}); 

// 	// Viewport re-renders whenever latitude 
// 	// and longitude changes 
// 	useEffect(() => { 
// 		const a = { ...viewport }; 
// 		a.latitude = lat; 
// 		a.longitude = lon; 
// 		setViewport(a); 
// 	}, [lat, lon]); 

// 	return ( 
// 		<div className="map"> 
// 			<ReactMapGL 
// 				mapboxApiAccessToken={API_KEY} 
// 				{...viewport} 
// 				onViewportChange={(viewport) => setViewport(viewport)} 
// 				mapStyle="mapbox://styles/mapbox/streets-v11"> 
// 				<Marker latitude={lat} longitude={lon}> 
// 					<div className="mark"> 
// 						<RiUserLocationFill size="25px" color="blue" /> 
// 					</div> 
// 				</Marker> 
// 			</ReactMapGL> 
// 		</div> 
// 	); 
// }; 

// export default Map;
