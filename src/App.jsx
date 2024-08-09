import '@/assets/style/style.css';
import Footer from '@/components/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';

function App() {
  return (
    <div className="wrapper w-full ">
      {/* Header */}
      <main className="content">
        <RouterProvider router={router()} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
