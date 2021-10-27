import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import DOMPurify from 'dompurify';

import { getCardDetails } from './api';
import { IQuestionTwoProps, IQuestionTwoState } from './types';
import styles from './styles';

class QuestionTwo extends Component<IQuestionTwoProps, IQuestionTwoState> {
    constructor(props: IQuestionTwoProps) {
        super(props);
        this.state = {
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
                cardDetails,
                loading: false,
                error: null,
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: 'Oops something went wrong',
            });
        }
    };

    render() {
        const { classes } = this.props;
        const { cardDetails, loading, error } = this.state;

        if (loading) {
            return (
                <div className={classes.spinner} data-testid="LoaderContainer">
                    <CircularProgress />
                </div>
            );
        }

        if (error) {
            return (
                <div className={classes.container} data-testid="ErrorContainer">
                    <div className={classes.error}>
                        <p>Error loading data: {error}</p>
                        <button onClick={this.fetchCardDetails}>
                            Try again
                        </button>
                    </div>
                </div>
            );
        }

        if (!cardDetails) {
            return (
                <div
                    className={classes.container}
                    data-testid="NotFoundContainer"
                >
                    <div className={classes.error}>
                        <p>Card not found</p>
                    </div>
                </div>
            );
        }

        const { title, imgSrc, body } = cardDetails;

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
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(body),
                            }}
                        />
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(QuestionTwo);
