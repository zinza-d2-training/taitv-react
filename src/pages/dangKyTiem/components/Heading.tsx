import React from 'react';

type Props = {
  title: string;
};

const Heading = (props: Props) => {
  const headingStyle = {
    margin: '0px -36px',
    padding: '13.5px 36px',
    backgroundColor: '#F5F5F5',
    lineHeight: '37px',
    fontSize: '28px',
    color: 'rgba(0,0,0,0.87)',
    fontWeight: '400',
    marginBottom: '46px'
  };
  return <div style={headingStyle}>{props.title}</div>;
};
export { Heading };
