import ChairConfigurator from './components/CarConfigurator';
import VideoSection from './components/VideoSection';
import PictureGallery from './components/PictureGallery';
import { LinkPreviewDemo } from './components/linkPreviewComponent';
import EnhancedCircularMenu from './components/EnhancedCircularMenu';

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

          <EnhancedCircularMenu />

        </section>

        <VideoSection />
        <section className="py-12">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Iceland Gallery
          </h1>
          <PictureGallery />
        </section>
        <section className="h-screen">
          <h1 className="text-3xl font-bold text-center text-gray-800 pt-8 mb-4">
            Link Preview
          </h1>
          <LinkPreviewDemo />
        </section>

      </div>
    </main>
  );
}
