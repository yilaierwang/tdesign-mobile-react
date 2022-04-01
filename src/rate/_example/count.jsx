import React, { useState } from 'react';
import { Rate } from 'tdesign-mobile-react/rate';
import TDemoBlock from '../../../site/mobile/components/DemoBlock';

export default function Base() {
  const [value, setValue] = useState(3);

  const RenderCard = (props) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: props.title ? '#fff' : null,
          padding: '12px 16px',
        }}
      >
        <div style={{ width: props.title ? '80px' : null, marginRight: '16px' }}>{props.title}</div>
        {props.children}
      </div>
    );
  };

  return (
    <>
      <TDemoBlock title="" summary="自定义数量">
        <RenderCard title="请点击评分">
          <Rate
            count={4}
            value={value}
            size={10}
            variant="outline"
            onChange={(value) => {
              setValue(value);
            }}
          />
        </RenderCard>

        <RenderCard title="请点击评分">
          <Rate
            value={value}
            count={4}
            size={30}
            variant="outline"
            onChange={(value) => {
              setValue(value);
            }}
          />
        </RenderCard>
      </TDemoBlock>
    </>
  );
}