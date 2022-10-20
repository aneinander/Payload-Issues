import React from 'react';
import { Layout } from '../../collections/Page';
import { components } from '../../blocks';
import classes from './index.module.css';

type Props = {
  layout: Layout[]
  className?: string
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => (
  <div className={[
    classes.renderBlocks,
    className,
  ].filter(Boolean).join(' ')}
  >
  </div>
);

export default RenderBlocks;
