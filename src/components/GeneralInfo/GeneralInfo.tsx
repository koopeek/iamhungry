import React from 'react';
import { StepsOverview } from "../StepsOverview/StepsOverview";
import './GeneralInfo.scss';

type Props = { }

export const GeneralInfo: React.FC<Props> = (props: Props) => {
    return (
        <div className="generalInfo">
            <h1 className="generalInfo__logo">I AM HUNGRY</h1>
            <StepsOverview />
        </div>
    );
}

GeneralInfo.displayName = 'GenralInfo';