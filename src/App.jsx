import '@/style.css';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
// import Login from '@/pages/Login';

function App() {
  return (
    <div className="wrapper w-full flex flex-col overflow-hidden">
      {/* Header */}
      <main className="content flex-auto">
        <Home />
        {/* <Login /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
