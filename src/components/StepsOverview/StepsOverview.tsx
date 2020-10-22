import React from 'react';
import { STEPS } from "../../constants/constants";
import './StepsOverview.scss';
import {StepsListItem} from "./StepsListItem/StepsListItem";

type Props = {
    currentStep: number;
};

export const StepsOverview: React.FC<Props> = ({ currentStep }) => {
    return (
        <div className="stepsOverview">
            <ul className="stepsOverview__steps-list">
                {
                    STEPS.map(step => (
                        <li key={step.orderNumber} className="stepsOverview__steps-list-item">
                            <StepsListItem step={step} currentStep={currentStep} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

StepsOverview.displayName = 'StepsOverview';