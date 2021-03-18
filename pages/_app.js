import '../styles/bootstrap.css'
import '../styles/style.css'
import '../public/fonts/font.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from '../context/auth-provider'
import  ErrorProvider  from '../context/error-provider'
// import '../styles/owl.carousel.min.css'
// import '../styles/owl.theme.default.min.css'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return <AuthProvider>
				<ErrorProvider>
					<QueryClientProvider client={queryClient}>
						<Component {...pageProps} />
					</QueryClientProvider>
				</ErrorProvider>
			</AuthProvider>
	}

export default MyApp
