import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryState {
	hasError: false;
}

export default class ErrorBoundary extends Component<Record<string, unknown>, ErrorBoundaryState> {
	constructor(props:Record<string, unknown>) {
		super(props);

		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError() {
		return {
			hasError: true
		};
	}

	override componentDidCatch(error: Error, info: ErrorInfo) {
		console.error(error);

		console.table(info);
	}

	override render() {
	if (this.state.hasError) {
			
			this.state
			return <div aria-label="error-message">Somethng went wrong</div>;
		}

		return this.props.children;
	}
}
