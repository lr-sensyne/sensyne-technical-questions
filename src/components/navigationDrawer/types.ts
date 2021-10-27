import { RouteComponentProps } from 'react-router';

export interface INavigationDrawerProps extends RouteComponentProps {
    toggleDrawer: (isOpen: boolean) => void;
    open: boolean;
    history: RouteComponentProps['history'];
}
