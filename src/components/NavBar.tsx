import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '@mui/material/Button';

interface NavBarItems {
  items: {
    name: string;
    id: string;
  }[];
}

function NavBar({ items }: NavBarItems) {
  return (
    <>
      {items.map((item) => (
        <AnchorLink
          key={item.id}
          href={'#' + item.id}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Button color="inherit">{item.name}</Button>
        </AnchorLink>
      ))}
    </>
  );
}

export default NavBar;
