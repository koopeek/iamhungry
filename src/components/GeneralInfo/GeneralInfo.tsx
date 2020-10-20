import React from 'react';
import { StepsOverview } from "../StepsOverview/StepsOverview";
import './GeneralInfo.scss';

type Props = {
    currentStep: number
}

export const GeneralInfo: React.FC<Props> = ({ currentStep }) => {
    return (
        <div className="generalInfo">
            <h1 className="generalInfo__logo">I AM HUNGRY</h1>
            <StepsOverview currentStep={currentStep} />
        </div>
    );
}

GeneralInfo.displayName = 'GenralInfo';