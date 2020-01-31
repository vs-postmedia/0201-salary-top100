/*
	NOTE: props.embedID is the ID found at the end of a Flourish story URL or in the `data-src` attribute of the reponsive embed code. 
	ie: <div class="flourish-embed" data-src="story/90201"></div>
*/

// import Aux from '../Aux/Aux';
import React, { Fragment, useEffect } from 'react';

const FlourishEmbed = (props) => {
	const iframeStyle = {
			height: '400px',
			width: '100%'
		}

	useEffect(() => {
		const iframe = document.querySelector('iframe.flourish-embed');
		iframe.src = iframe.src.replace(/#slide-.*/, '') + '#slide-' + props.index;
	});
	
	return (
		<Fragment>
			<iframe title='flourish-embed' className='flourish-embed' src={`https://public.flourish.studio/story/${props.embedID}/embed`} frameBorder='0' scrolling='no' style={iframeStyle}></iframe>
		</Fragment>
		
	);
}

export default FlourishEmbed;


/*
// RESPONSIVE EMBED

	<div className='flourish-embed' data-src={`story/${props.embedID}`}></div>


// FLOURISH FOOTER

	const flourishLogoSytle = {
		width:'105px!important',
		height:'16px!important',
		border:'none!important',
		margin:'0!important'
	};
	const flourishFooterStyle = {
		width:'100%!',
		marginTop:'4px!important',
		textAlign:'right!important'
	};
	const flourishAnchorStyle = {
		'text-decoration':'none!important'
	};

	<div style={flourishFooterStyle}>
		<a class='flourish-credit' href='https://public.flourish.studio/story/90201/?utm_source=embed&utm_campaign=story/90201' target='_top' style={flourishAnchorStyle}>
			<img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style={flourishLogoSytle}/>
		</a>
	</div>
*/

