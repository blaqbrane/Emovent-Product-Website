import { About, Discount, Features, Feedback ,CTA, Footer, Hero, Navbar, Newsletter, Product, ProductCarousel, ProductDescription, Questions, Testimonials } from "./Components";
const App = () =>{
  return(
    <div className="App font-serif">
      <Navbar/>
      <div>
        <Hero/>
        <About/>
        <Features/>
        <Product/>
        <Discount/>
        <Testimonials/>
        <ProductCarousel/>
        <Questions/>
        <Newsletter/>
        <ProductDescription/>
        <CTA/>
        <Feedback/>
        <Footer/>
      </div>
    </div>
  )
}
export default App;




























































// import { FaCheck, FaTimes } from 'react-icons/fa'


// function App() {
//   const iconss = [
//     {
//       icon:<FaCheck/>,
//       name:"success",
//       id: 1
//     },
//     {
//       icon:<FaTimes/>,
//       name:"success",
//       id:2
//     }
//   ]

//   return (
//     <div className="App">
//       {
//         iconss.map((item) =>(
//           <div key={item.id}>
//             {item.icon}
//           </div>
//         )
//         )
//       }
//     </div>
//   )
// }

// export default App
