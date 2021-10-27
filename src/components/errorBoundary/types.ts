import { ErrorInfo } from "react";

export interface IErrorBoundaryProps {
	question?: () => JSX.Element;
}

export interface IErrorBoundaryState {
	error: Error | null;
	errorInfo: ErrorInfo | null;
}
