/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { generateId } from '@/helpers/generateId';
import { Mock } from '@/router';
import Contact from 'contactmui/Contact';
import React from 'react';
import { Link } from 'react-router-dom';

export type LinksProps = {};

const MenuList = React.lazy(() => import(/* webpackChunkName: 'MenuList' */ '@mui/material/MenuList/MenuList'))
const MenuItem = React.lazy(() => import(/* webpackChunkName: 'MenuItem' */ '@mui/material/MenuItem/MenuItem'))
const ListItemIcon = React.lazy(() => import(/* webpackChunkName: 'ListItemIcon' */ '@mui/material/ListItemIcon'))
const ListItemText = React.lazy(() => import(/* webpackChunkName: 'ListItemText' */ '@mui/material/ListItemText'))
const Typography = React.lazy(() => import(/* webpackChunkName: 'Typography' */ '@mui/material/Typography/Typography'))

type Menu = {
  icon: React.ReactNode
  to: string
  text: string,
  path: string,
  element: JSX.Element
}

const menus: Menu[] = [
  {
    icon: 'w',
    to: 'contact',
    text: 'Contact',
    path: "contact", element: <Contact />
  },
  {
    icon: 'w',
    to: 'org',
    text: 'Org',
    path: "org", element: <Mock title='org' />
  },
  {
    icon: 'w',
    to: 'cases',
    text: 'Cases',
    path: "cases", element: <Mock title='org' />
  },
  {
    icon: 'w',
    to: 'dashboard',
    text: 'Dashboard',
    path: "dashboard", element: <Mock title='org' />
  },
]

const Links: React.FC<LinksProps> = (props) => {
  return <MenuList key={generateId()}>{menus.map(({ icon, to, text }) => <Link to={to} key={generateId()}>
    <MenuItem key={generateId()}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText>
        {text}
      </ListItemText>
      <Typography variant="body2" color="text.secondary">
        nonoo
      </Typography>

    </MenuItem>
  </Link>
  )} </MenuList>
}

export default Links
