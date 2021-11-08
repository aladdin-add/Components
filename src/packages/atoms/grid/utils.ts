import { GridProps } from '@aw-web-design/styled-system';

export const getTemplate = (
  template: GridProps['gridTemplateColumns'] | GridProps['gridTemplateRows'],
) => {
  if (Array.isArray(template)) {
    return template.map((value) => (typeof value === 'number' ? `repeat(${template},1fr)` : value));
  }
  return typeof template === 'number' ? `repeat(${template},1fr)` : template;
};

export const getGrid = (edge: number, value: number): string | number => {
  if (edge && value) {
    return `${edge} / span ${value}`;
  } if (value) {
    return `span ${value}`;
  }
  return edge;
};
