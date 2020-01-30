import React from 'react';
import ArticleEntry from '../ArticleEntry/ArticleEntry'

const ArticleList = (props) => {
	return (
		<ul>
			{props.ArticleEntries.map((d,i) => {
				return (
					<ArticleEntry data={d} key={d.id}></ArticleEntry>
				);
			})}
		</ul>
	);
}

export default ArticleList;
