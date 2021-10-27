export interface ICardDetails {
	title: string;
	imgSrc: string;
	body: string;
}

export interface IQuestionTwoState {
	cardDetails?: ICardDetails;
	loading: boolean;
	error: string | null;
}

export interface IQuestionTwoProps {
	classes: Record<string, string>;
}