// import { load } from '@infini-soft/lib-federation';
import React, { startTransition } from 'react';
import { themes } from '@storybook/theming';
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

addDecorator(withPropsTable);
// import(/*   */ 'store/createstore');

// /**
//  * --- WORKAROUND ---
//  * This loader is necessary to load createstore
//  * So far, cant find a way to use top-level await
//  */
// const Loader = ({ children }) => {
//   const [state, setState] = React.useState(false);
//   const createstore = React.useRef(null);
//   const store = React.useRef(null);

//   startTransition(async ()=>{
//     createstore.current = await load('store', 'createstore');
//     store.current = createstore.current(() => ['514-796-0626']);
//     setState(true);
//   })

//   return (
//     <>
//       {!state && <h1>Loading...</h1>}
//       {state && (
//         <>
//           {React.cloneElement(
//             children,
//             { ...children.props, createstore: createstore.current},
//             children?.children,
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export const decorators = [
//   (Story) => (
//     // <Loader>
//       <Story store={store} />
//     // </Loader>
//   ),
// ];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  // layout: 'centered',
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'darkmode',
    lightClass: 'lightmode',
    stylePreview: true,
  },
  options: {
    storySort: {
      order: ['Design System', ['Introduction', '*']],
    },
  },
};

const ThemeProvider = ({ children }) => <>{children}</>;

const knobDecorator = (storyFn) => {
  const colorScheme = 'dark';
  return React.createElement(ThemeProvider, {
    theme: themes.dark,
    colorScheme,
    children: [storyFn()],
  });
};

export const decorators = [knobDecorator];
