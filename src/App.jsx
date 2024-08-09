import '@/assets/style/style.css';
import Footer from '@/components/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';

function App() {
  return (
    <div className="wrapper w-full ">
      {/* Header */}
      <main className="content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
