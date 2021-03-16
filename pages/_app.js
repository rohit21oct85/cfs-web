import '../styles/bootstrap.css'
import '../styles/style.css'
import '../public/fonts/font.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { QueryClient, QueryClientProvider } from "react-query";
// import '../styles/owl.carousel.min.css'
// import '../styles/owl.theme.default.min.css'
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return <QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
  
}

export default MyApp
