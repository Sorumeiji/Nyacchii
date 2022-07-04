import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const PageTransitions = ({ children, route }) => {
	return (
		<>
			<TransitionGroup component={null}>
				<CSSTransition key={route} classNames={'page'} timeout={500}>
					<div>{children}</div>
				</CSSTransition>
			</TransitionGroup>
		</>
	);
};

export default PageTransitions;
