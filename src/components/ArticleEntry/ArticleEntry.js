import React from 'react';
import './ArticleEntry.css';

const ArticleEntry = (props) => {
	const data = props.data;

	return (
		<li className='step' data-index={data.id}>
		{ data.text.length > 0 &&
			<p>{data.text}</p>
		}
		</li>
	);
}

export default ArticleEntry;