import '@/style.css';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
// import Login from '@/pages/Login';
// import Signup from '@/pages/Signup';
// import Confirm from '@/pages/Confirm';

function App() {
  return (
    <div className="wrapper w-full flex flex-col overflow-hidden">
      {/* Header */}
      <main className="content flex-auto">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
