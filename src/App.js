

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 
  return (
    <Router>
   <Header />
   {/* <MiniCart cartItems={cartItems} onRemoveItem={removeFromCart} onClearCart={clearCart} /> */}
   
      <main className="container mx-auto p-4">
        <AppRoutes />
      </main>
     <Footer/>
  </Router>
  );
}

export default App;

