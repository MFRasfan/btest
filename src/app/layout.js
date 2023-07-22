import React ,{Suspense} from "react";

import "../../public/assets/scss/style.scss";
import "../../public/assets/scss/basic/reset.scss";
import "../../public/assets/scss/basic/helper-class.scss";
import "../../public/assets/scss/basic/typography.scss";

import "../../public/assets/css/responsive.css";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Loader from "./components/loader";

// export const metadata = {
//   title: 'Cloud-Based Phone System Canada | Besanz.com',
//   description: 'Besanz offers reliable and affordable cloud-based phone system solutions in Canada with integration with CRM, 24/5 customer service, and the option to keep your own number',
// }



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
