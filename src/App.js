// import React, { useState } from 'react';

// const ExpensiveCalculation = ({ number }) => {
//     // Simulating an expensive calculation
//     const calculateFactorial = (n) => {
//         console.log('Calculating factorial...');
//         return n <= 0 ? 1 : n * calculateFactorial(n - 1);
//     };

//     // Directly calling the function without memoization
//     const factorial = calculateFactorial(number);

//     return (
//         <div>
//             <h2>Factorial of {number} is: {factorial}</h2>
//         </div>
//     );
// };

// import React, { useState, useMemo } from 'react';

// const ExpensiveCalculation = ({ number }) => {
//     // Simulating an expensive calculation
//     const calculateFactorial = (n) => {
//         console.log('Calculating factorial...');
//         return n <= 0 ? 1 : n * calculateFactorial(n - 1);
//     };

    
//     const factorial = useMemo(() => calculateFactorial(number), [number]);

//     return (
//         <div>
//             <h2>Factorial of {number} is: {factorial}</h2>
//         </div>
//     );
// };

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(1);
//     const changeNumber=(e)=>{
//       console.log('p')
//       setNumber(parseInt(e.target.value))
//     }

//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
//             <input 
//                 type="number" 
//                 value={number} 
//                 onChange={changeNumber}
//             />
//             <ExpensiveCalculation number={number} />
//         </div>
//     );
// };

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

