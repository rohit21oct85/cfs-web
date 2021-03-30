import '../styles/bootstrap.css'
import '../styles/style.css'
import '../public/fonts/font.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { QueryClient, QueryClientProvider } from "react-query";
import  ErrorProvider  from '../context/error-provider'
import { Provider } from 'next-auth/client'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
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
