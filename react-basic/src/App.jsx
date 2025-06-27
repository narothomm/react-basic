import logo from './assets/react.svg';
import ConditionalRendering from './components/ConditionalRendering';
import ParentComponent from './components/ParentComponent';
import ProductCart from './components/ProductCart';
import Counter from './components/Counter';
import UseWindowWidth from './hooks/UseWindowWidth';
import FormHandle from './components/FormHandle';
import CounterUsingReducer from "./components/CounterUsingReducer";
import UseRefComponent from './components/UseRefComponent';
import HookForm from './components/HookForm';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';



function App() {
const width=UseWindowWidth()
console.log('window width:', width);

  // useEffect(() => {           // Callback 1
  // fetch('data.json')          // ডেটা আনার চেষ্টা
  //   .then(res => res.json())    // Callback 2: JSON এ রূপান্তর
  //   .then(data => {              // Callback 3: JSON data দিয়ে কাজ
  //     setProductData(data);
  //     setLoading(false);
  //   })
  //   .catch(error => {          // Callback 4: সমস্যা হলে ধরে
  //     setError(error);
  //     setLoading(false);//চারটি callback functionমিলেই একটিchainতৈরি করে,যেখানে একটারoutputআরেকটারinput
  //   });

  return (
    <div className='p-5'>
      <Navbar/>
      {/* all child are stay inside Outlet */}
      <Outlet>
      </Outlet>
 
      {/* <ParentComponent>
        <h3>This is inside ParentComponent</h3>
      </ParentComponent>
      <UseRefComponent/> */}

       {/* <FormHandle/> */}

      {/* <UseWindowWidth/>
      <HookForm/>
      <ProductDetails/>
      <CounterUsingReducer/>
      <counter/> */}
     

      <div className='p-5 text-center'>
        <h2 className='text-xl font-bold'> window width{width}</h2>
        {
          width<786? 
          (<p className='text-red-700'> Mobile view </p>) :
          (<p className='text-green-600'>Destop view</p>)
        }
      </div>
     
    </div>
  )
}

export default App;
