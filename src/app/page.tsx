import Header from '@organisms/Header';
import Slider from '@organisms/Slider';
import Footer from '@organisms/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Bienvenido a tu Starter Template</h1>
        <p className="mt-4 text-gray-600">Este es un diseño modular y escalable con Atomic Design.</p>
      </main>
      <Footer />
    </>
  );
}
