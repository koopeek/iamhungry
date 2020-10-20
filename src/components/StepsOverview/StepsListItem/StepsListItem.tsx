import React from 'react';
import { Step } from "../../../types/types";
import { StepsListItemOrderNumber } from './StepsListItemOrderNumber/StepsListItemOrderNumber';
import { FaArrowRight } from "react-icons/all";
import './StepsListItem.scss';

type Props = {
    step: Step,
    currentStep: number;
};

export const StepsListItem: React.FC<Props> = ({ step, currentStep }) => {
    return (
        <div className="stepsListItem">
            <StepsListItemOrderNumber orderNumber={step.orderNumber} currentStep={currentStep} />
            <div className={step.orderNumber === currentStep ? 'stepsListItem__name stepsListItem__name--current' : 'stepsListItem__name'}>
                {step.name}
            </div>
            {
                step.orderNumber === currentStep
                ? <FaArrowRight className="stepsListItem__arrow" />
                : null
            }
        </div>
    );
}

StepsListItem.displayName = "StepsListItem";