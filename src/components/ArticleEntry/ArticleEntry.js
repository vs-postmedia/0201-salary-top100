import React from 'react';

const ArticleEntry = (props) => {
	const data = props.data;

	return (
		<li className='step' data-index={data.id}>
			<p>{data.text}</p>
		</li>
	);
}

export default ArticleEntry;