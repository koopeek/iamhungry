import React from 'react';
import {Step} from "../../../types/types";
import './StepsListItem.scss';

type Props = {
    step: Step;
}

export const StepsListItem: React.FC<Props> = ({ step }) => {
    return (
        <div>
            {step.name}
        </div>
    )
}

StepsListItem.displayName = 'StepsListItem';