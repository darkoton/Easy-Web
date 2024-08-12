import '@/style.css';
import Footer from '@/components/Footer';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';

function App() {
  return (
    <div className="wrapper w-full flex flex-col overflow-hidden">
      <main className="content flex-auto">
        <RouterProvider router={router()} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
