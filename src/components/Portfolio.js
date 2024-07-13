import Gallery from "./subcomponents/Gallery/Gallery";
import GalleryPhoto from "./subcomponents/Gallery/GalleryPhoto";
import Paragraph from "./subcomponents/Text/Paragraph";
import Title from "./subcomponents/Text/Title";
import information from "./subcomponents/Information/PortfolioInformation";

export default function Portfolio() {
  return (
    <section className="p-6">
      <div className="flex flex-col w-full items-center pb-4 text-center font-medium">
        <Title text="Our Portfolio" />
        <Paragraph text="Take a look through our long history of great client results." />
      </div>
      <Gallery
        items={information?.map((picture, id) => (
          <GalleryPhoto
            picture={picture.picture}
            pictureAlt={picture.pictureAlt}
            key={id}
          />
        ))}
      />
    </section>
  );
}
