import React from 'react';
import { STEPS } from "../../constants/constants";
import { StepsListItem } from "./StepsListItem/StepsListItem";
import './StepsList.scss';

export const StepsList: React.FC = () => {
    return(
        <div className="stepsList">
            <ul className="stepsList__list">
                {STEPS.map(step => (
                    <li key={step.orderNumber}>
                        <StepsListItem step={step} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

StepsList.displayName = 'StepsList';