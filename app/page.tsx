import CircularMenu from './components/CircularMenu';
import ChairConfigurator from './components/CarConfigurator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <section className="h-screen">
          <h1 className="text-3xl font-bold text-center text-gray-800 pt-8 mb-4">
            3D Chair Configurator
          </h1>
          <ChairConfigurator initialColor="#FF0000" />
        </section>
        <section className="py-12 px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Interactive Menu
          </h1>
          <CircularMenu />
        </section>
      </div>
    </main>
  );
}
