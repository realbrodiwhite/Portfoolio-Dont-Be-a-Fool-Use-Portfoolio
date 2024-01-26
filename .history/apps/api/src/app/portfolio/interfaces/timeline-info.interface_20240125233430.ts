import { TimelinePeriod } from '@portfoolio/api/app/portfolio/interfaces/timeline-period.interface';
import Big from 'big.js';

export interface TimelineInfoInterface {
  maxNetPerformance: Big;
  minNetPerformance: Big;
  timelinePeriods: TimelinePeriod[];
}
