
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import ScrollUp from '../components/ScrollUp'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <ScrollUp/>
  <Component {...pageProps} />
    </>
  )
}
