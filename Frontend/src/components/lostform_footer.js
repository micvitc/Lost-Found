import LostForm from "./lostform";
import Footer from "./footer"

function App() {
    return (
<div className=" relative ">
      <div>
        {/* <Home></Home> */}
        {/* <LostAndFound></LostAndFound> */}
        <LostForm></LostForm>
      {/* <Lostform></Lostform>  */}
      <div className='py-60'>
        <div className='space'></div>
      <Footer></Footer>
      </div>

      </div>
  </div>
    );
  }
  export default App;