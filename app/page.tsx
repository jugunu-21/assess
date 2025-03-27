import CircularMenu from './components/CircularMenu';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Interactive Menu
        </h1>
        <CircularMenu />
      </div>
    </main>
  );
}
