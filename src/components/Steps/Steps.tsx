import React from 'react';

type Props = {
    currentStep: number
};

export const Steps: React.FC<Props> = ( {currentStep} ) => {
    return(
      <p>s</p>
    );
}

Steps.displayName = 'Steps';