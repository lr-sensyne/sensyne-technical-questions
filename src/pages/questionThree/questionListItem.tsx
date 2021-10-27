import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import { IQuestionListItemProps } from './types';

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
	},
	label: {
		display: 'inline',
	},
	listItemContainer: {
		display: 'block',
	}
}));

function QuestionListItem(props: IQuestionListItemProps) {
	const { divider, item } = props;
	const { icon, name, species, id, description } = item;
	const Icon = icon;
	const classes = useStyles();

	return (
		<>
			<ListItem alignItems="flex-start" >
				<ListItemAvatar>
					<Avatar>
						<Icon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={`${name}: ${species ? species : 'Other'}`}
					secondary={
						<>
							<span className={classes.listItemContainer}>
								<Typography
									variant="subtitle2"
									component="span"
									className={classes.header}
								>
									Description:
								</Typography>
								<Typography
									variant="body2"
									component="span"
									className={classes.label}
								>
									{description}
								</Typography>
							</span>
							<span className={classes.listItemContainer}>
								<Typography
									variant="subtitle2"
									component="span"
									className={classes.header}
								>
									Guid:
								</Typography>
								<Typography
									variant="body2"
									component="span"
									className={classes.label}
								>
									{id ? id : 'ERROR '}
								</Typography>
							</span>
						</>
					}
				/>
			</ListItem>
			{divider && <Divider variant="middle" />}
		</>
	);
}

export default QuestionListItem;