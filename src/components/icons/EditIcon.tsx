import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='100'
      height='100'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M18.4,2c-0.3,0-0.5,0.1-0.7,0.3l-2,2l-1.4,1.4L3,17v4h4L21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6C18.9,2.1,18.7,2,18.4,2z M18.4,4.4l1.2,1.2l-1.3,1.3l-1.2-1.2L18.4,4.4z M15.7,7.1l1.2,1.2L6.2,19H5v-1.2L15.7,7.1z'></path>
    </svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
