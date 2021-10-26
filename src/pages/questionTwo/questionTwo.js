import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import { getCardDetails } from './api'
import styles from './styles'

class QuestionTwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: null,
			imgSrc: null,
			body: '',
			loading: true,
			error: null,
		};
	}

	componentDidMount() {
		this.fetchCardDetails();
	}

	fetchCardDetails = async () => {
		try {
			const cardDetails = await getCardDetails();

			this.setState({
				title: cardDetails.title,
				imgSrc: cardDetails.imgSrc,
				body: cardDetails.body,
				loading: false,
				error: null,
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: 'Oops something went wrong',
			});
		}
	}

	render() {
		const { classes } = this.props;
		const { title, imgSrc, body, loading, error } = this.state;

		if (loading) {
			return (
				<div className={classes.spinner}>
					<CircularProgress />
				</div>
			);
		}

		if (error) {
			return (
				<div className={classes.container}>
					<div className={classes.error}>
						<p>Error loading data: {error}</p>
						<button onClick={this.fetchCardDetails}>Try again</button>
					</div>
				</div>
			);
		}

		return (
			<div className={classes.container}>
				<Card className={classes.card}>
					<CardMedia
						className={classes.media}
						image={imgSrc}
						title={title}
					/>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<div
							className={classes.body}
							dangerouslySetInnerHTML={{ __html: body }}
						/>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(QuestionTwo);
