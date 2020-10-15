import React from 'react';
import './StepsOverview.scss';

type Props = { };

export const StepsOverview: React.FC<Props> = (props: Props) => {
    return (
        <div className="stepsOverview">
            <ul className="stepsOverview__steps-list">
                <li>XX</li>
            </ul>
        </div>

    );
}

StepsOverview.displayName = 'StepsOverview';