import './App.css';
import Review from './Review';
function App() {
  return (
    <>
      <header>
        <h1 className="text-center mt-5">Our Reviews</h1> 
        <div className="mx-auto bg-info" style={{ width: '8%', height: 4,}}></div>
      </header>
      <main className="container">
        <Review />
      </main>
    </>
  );
}

export default App;
