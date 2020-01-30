import React from 'react';
import Scrollyteller from '../Scrollyteller/Scrollyteller';
import ArticleEntries from '../../data/article-entries.json';
import './App.css';


function App() {
	return (
	  	<div className="App">
	  		<h1>React template</h1>
	  		<Scrollyteller
	  			ArticleEntries={ArticleEntries}
	  		></Scrollyteller>
	  	</div>
	);
}

export default App;
