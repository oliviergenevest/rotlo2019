import React from 'react'
import cx from 'classnames'
import styles from './Container.module.scss'

const Container = props => {
  const { children } = props;
  const classes = cx(styles.container,
   	{ [styles.text]: props.text },
    { [styles.first]: props.first },
    { [styles.footer]: props.footer }, 
    { [styles.sponsor]: props.sponsor }, 
    { [styles.newsletter]: props.newsletter }, 
    { [styles.grandBureau]: props.grandBureau},
    { [styles.wrapSponsor]: props.wrapSponsor},
    { [styles.fluid]: props.fluid }
    );
  return <div className={classes}>{children}</div>;
};

export default Container;
