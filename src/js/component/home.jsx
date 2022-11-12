import React from "react";
import CollapsibleExample from "./navbar.jsx";
import JumbotronExample from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<CollapsibleExample/>
			<JumbotronExample/>

		</div>
	);
};


export default Home;
