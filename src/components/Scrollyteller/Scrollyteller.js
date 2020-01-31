import React, { Component } from 'react';
import EnterView from 'enter-view';
import ArticleList from '../ArticleList/ArticleList';
import FlourishEmbed from '../FlourishEmbed/FlourishEmbed';

import './Scrollyteller.css';

export class Scrollyteller extends Component {
	state = {
		stepValue: 0
	};

	componentDidMount() {
		EnterView({
			// selector: stepSel.nodes(),
			selector: '.step',
			offset: 0.1,
			enter: el => {
				el.classList.add('entered');
				const index = el.getAttribute('data-index');
				
				this.updateGraphic(el, index);
				// console.log(`ENTER: ${index}`)

				this.togglePointerEvents(index);
			},
			exit: el => {
				let index = el.getAttribute('data-index');
				index = Math.max(0, index - 1);
				
				this.updateGraphic(el, index);
				// console.log(`EXIT: ${index}`)	
			},
			progress: function(el, progress) {
				// el.style.opacity = progress;
				// let p = el.querySelector('.progress');
  				// p.innerText = progress.toFixed(2);
			},
			once: false // trigger just once
		});
	}

	togglePointerEvents(index) {
		const container = document.querySelectorAll('.scroll-container');
		if (parseInt(index) === 6) {
			container[0].className += ' no-pointer';
		} else {
			// container[0].className = 'scroll-container';
		}
	}

	updateGraphic(el, index) {
		this.setState({
			stepValue: index
		});
	}

	// <p className='steps'>The 100 highest–paid public sector employees in 2017–18 earned more than $400,000.</p>
	render() {
		return (
			<div className='scrollyteller'>
				
				<figure className='sticky'>
					<FlourishEmbed index={this.state.stepValue}
						embedID='174657'
					></FlourishEmbed>
				</figure>

				<article className='scroll-container'>
					<ArticleList
						ArticleEntries={this.props.ArticleEntries}
					></ArticleList>
				</article>

			</div>
		);
	}
}

export default Scrollyteller;