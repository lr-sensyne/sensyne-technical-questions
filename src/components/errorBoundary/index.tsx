import React, { ErrorInfo } from 'react';

import { IErrorBoundaryProps, IErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    render() {
        const { question = DefaultQuestion } = this.props;

        if (this.state.errorInfo !== null) {
            // Error path
            return (
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                    <div style={{ flex: 1, margin: 24, textAlign: 'left' }}>
                        {question()}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flex: 1,
                        }}
                    >
                        <h2>Something went wrong.</h2>
                        <div
                            style={{
                                whiteSpace: 'pre-wrap',
                                maxWidth: 400,
                                textAlign: 'left',
                                alignSelf: 'center',
                            }}
                        >
                            {this.state.error !== null &&
                                this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

const DefaultQuestion = () => {
    return <div>Please add a question to the test</div>;
};

export default ErrorBoundary;
