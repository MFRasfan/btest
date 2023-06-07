// import { Inter } from '@next/font/google'
import React ,{Suspense} from "react";

import "../../public/assets/scss/style.scss";
import "../../public/assets/scss/basic/reset.scss";
import "../../public/assets/scss/basic/helper-class.scss";
import "../../public/assets/scss/basic/typography.scss";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// import {  I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

import Loader from "./components/loader";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Besanz',
  description: 'Besanz, 100% Cloud-based Business Phone Solution.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" /> 
      </head>

      {/* <body className={inter.className}> */}
      <body>
        <Suspense fallback={<Loader/>}>
            {/* <I18nextProvider i18n={i18n}> */}
              {children}
            {/* </I18nextProvider> */}
          
        </Suspense>
        {/* {children} */}
      </body>
    </html>
  )
}
