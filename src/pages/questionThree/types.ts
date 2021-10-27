import { SvgIconProps } from '@material-ui/core/SvgIcon';

export interface IMockData {
    id?: string;
    species: string;
    name: string;
    icon: React.FC<SvgIconProps>;
    description: string;
}

export interface IQuestionListItemProps {
    divider?: boolean;
    item: IMockData;
}
