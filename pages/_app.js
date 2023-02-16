import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
    <div className="py-4 px-12 lg:px-48 font-latoBold">
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
