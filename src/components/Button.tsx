import React from 'react';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

type buttonProps = {
  textOnButton: string;
  href?: string;
  marginRight?: boolean;
};

function GreyButton({ textOnButton, href, marginRight }: buttonProps) {
  return (
    <Button
      component={RouterLink}
      to={href ? href : ''}
      variant='contained'
      color='primary'
      style={{
        marginRight: marginRight ? '20px' : '',
        backgroundColor: '#282c34',
        width: '40%',
      }}
    >
      {textOnButton}
    </Button>
  );
}

export default GreyButton;
