import React from 'react';
import './socialNetwork.styles.sass'

const SocialNetwork = ({name, url}) => {
  return (
    <a
      href={url || 'https://github.com/francofle'}
      rel='noopener noreferrer'
      target='_blank'
      aria-label={name}
    >
      <i className={`fa fa-${name || 'refresh'} fa-inverse`}></i>
    </a>
  )
};

export default SocialNetwork;