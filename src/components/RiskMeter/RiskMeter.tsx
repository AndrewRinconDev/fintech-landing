import React from 'react';
import { RiskLevel } from '@/types/Product';
import { MeterContainer, MeterBar, MeterLabel, RiskLevels } from './RiskMeter.styles';

interface RiskMeterProps {
  riskLevel: RiskLevel;
}

const RiskMeter = ({ riskLevel }: RiskMeterProps) => {
  return (
    <div>
      <MeterLabel>Nivel de riesgo: {riskLevel}</MeterLabel>
      <MeterContainer>
        <MeterBar 
          level={riskLevel} 
          role="meter"
          aria-valuenow={riskLevel === 'bajo' ? 1 : riskLevel === 'medio' ? 2 : 3}
          aria-valuemin={1}
          aria-valuemax={3}
        />
      </MeterContainer>
      <RiskLevels>
        <span>Bajo</span>
        <span>Medio</span>
        <span>Alto</span>
      </RiskLevels>
    </div>
  );
};

export default RiskMeter;