import '@/assets/style/style.css';
import Home from '@/pages/Home';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      {/* Header */}
      <main className="content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
