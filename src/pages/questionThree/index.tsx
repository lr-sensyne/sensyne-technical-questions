import React from 'react';

import ErrorBoundary from '../../components/errorBoundary'

import QuestionThree from './questionThree';
import Question from './question'

const QuestionThreeWithBoundary = () => {
	return (
		<ErrorBoundary question={Question}>
			<QuestionThree/>
		</ErrorBoundary>
	)
}

export default QuestionThreeWithBoundary;