import '../styles/bootstrap.css'
import '../styles/style.css'
import '../styles/dashboard/main.css'
// import '../styles/dashboard/authentication.css'
// import '../styles/dashboard/chatapp.css'
// import '../styles/dashboard/color_skins.css'
// import '../styles/dashboard/hm-style.css'
// import '../styles/dashboard/inbox.css'
// import '../styles/dashboard/rtl.css'
// import '../styles/dashboard/timeline.css'

import '../public/fonts/font.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/react-datepicker/dist/react-datepicker.min.css'

import { QueryClient, QueryClientProvider } from "react-query";
import  ErrorProvider  from '../context/error-provider'
import { Provider } from 'next-auth/client'
import { ReactQueryDevtools } from 'react-query/devtools'
import {useEffect} from 'react'
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	useEffect( () => { document.querySelector("body").classList.add("web_font1") } );

	return (
			// <AuthProvider>
			<Provider session={pageProps.session}>
				<ErrorProvider>
					<QueryClientProvider client={queryClient}>
						{/* <ReactQueryDevtools initialIsOpen={false} /> */}
						<Component {...pageProps} />
					</QueryClientProvider>
				</ErrorProvider>
			</Provider>
			// </AuthProvider>
		)
	}

export default MyApp
