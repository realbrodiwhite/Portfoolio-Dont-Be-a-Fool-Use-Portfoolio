import { Chart, TooltipPosition } from 'chart.js';

import { getBackgroundColor, getTextColor } from './helper';
import { ColorScheme } from './types';

export function getTooltipOptions({
  colorScheme,
  currency = '',
  locale = '',
  unit = ''
}: {
  colorScheme?: ColorScheme;
  currency?: string;
  locale?: string;
  unit?: string;
} = {}) {
  return {
    backgroundColor: getBackgroundColor(colorScheme),
    bodyColor: `rgb(${getTextColor(colorScheme)})`,
    borderWidth: 1,
    borderColor: `rgba(${getTextColor(colorScheme)}, 0.1)`,
    callbacks: {
      label: (context) => {
        let label = context.dataset.label || '';
        if (label) {
          label += ': ';
        }
        if (context.parsed.y !== null) {
          if (currency) {
            label += `${context.parsed.y.toLocaleString(locale, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })} ${currency}`;
          } else if (unit) {
            label += `${context.parsed.y.toFixed(2)} ${unit}`;
          } else {
            label += context.parsed.y.toFixed(2);
          }
        }
        return label;
      }
    },
    caretSize: 0,
    cornerRadius: 2,
    footerColor: `rgb(${getTextColor(colorScheme)})`,
    itemSort: (a, b) => {
      // Reverse order
      return b.datasetIndex - a.datasetIndex;
    },
    titleColor: `rgb(${getTextColor(colorScheme)})`,
    usePointStyle: true
  };
}

export function getTooltipPositionerMapTop(
  chart: Chart,
  position: TooltipPosition
) {
  if (!position || !chart?.chartArea) {
    return false;
  }
  return {
    x: position.x,
    y: chart.chartArea.top
  };
}

export function getVerticalHoverLinePlugin(
  chartCanvas,
  colorScheme?: ColorScheme
) {
  return {
    afterDatasetsDraw: (chart, x, options) => {
      const active = chart.getActiveElements();

      if (!active || active.length === 0) {
        return;
      }

      const color = options.color || `rgb(${getTextColor(colorScheme)})`;
      const width = options.width || 1;

      const {
        chartArea: { bottom, top }
      } = chart;
      const xValue = active[0].element.x;

      const context = chartCanvas.nativeElement.getContext('2d');
      context.lineWidth = width;
      context.strokeStyle = color;

      context.beginPath();
      context.moveTo(xValue, top);
      context.lineTo(xValue, bottom);
      context.stroke();
    },
    id: 'verticalHoverLine'
  };
}
