import '@/assets/style/style.css';
// import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <div className="wrapper w-full ">
      {/* Header */}
      <main className="content">
        {
          <Login />
          /* <Home /> */
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
