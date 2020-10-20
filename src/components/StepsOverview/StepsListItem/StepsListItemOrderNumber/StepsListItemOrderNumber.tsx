import React from 'react';
import { FaCheck } from "react-icons/all";
import './StepsListItemOrderNumber.scss';

type Props = {
    orderNumber: number;
    currentStep: number;
}

type CurrentOrderNumberType = 'PASSED' | 'CURRENT' | 'UPCOMMING';

export const StepsListItemOrderNumber: React.FC<Props> = ({ currentStep, orderNumber }) => {

    const currentOrderNumberType: CurrentOrderNumberType = orderNumber < currentStep ? 'PASSED' : orderNumber === currentStep ? 'CURRENT' : 'UPCOMMING';

    switch (currentOrderNumberType) {
        case 'PASSED':
            return (
                <div className="stepsListItemOrderNumber stepsListItemOrderNumber--passed">
                    <div className="stepsListItemOrderNumber__number stepsListItemOrderNumber__number--passed">
                        <FaCheck />
                    </div>
                </div>
            );
        case 'CURRENT':
            return (
                <div className="stepsListItemOrderNumber stepsListItemOrderNumber--current">
                    <div className="stepsListItemOrderNumber__number stepsListItemOrderNumber__number--current">
                        {orderNumber}
                    </div>
                </div>
            );
        case "UPCOMMING":
            return (
                <div className="stepsListItemOrderNumber stepsListItemOrderNumber--upcomming">
                    <div className="stepsListItemOrderNumber__number stepsListItemOrderNumber__number--upcomming">
                        {orderNumber}
                    </div>
                </div>
            );
        default:
            return null;
    }
}

StepsListItemOrderNumber.displayName = 'StepsListItemOrderNumber';