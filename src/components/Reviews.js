import FAQ from "./subcomponents/FAQ";
import Gallery from "./subcomponents/Gallery/Gallery";
import information from "./subcomponents/Information/ReviewInformation";
import Review from "./subcomponents/Review";
import Paragraph from "./subcomponents/Text/Paragraph";
import Title from "./subcomponents/Text/Title";

export default function Reviews() {
  return (
    <section className="py-6 xl:py-12">
      <div className="flex flex-col w-full items-center pb-4 text-center font-medium px-6 xl:px-12">
        <Title text="Testimonials" />
        <Paragraph text="With more than 30 5-Star Google Reviews, this is what our customers have to say." />
      </div>
      <Gallery
        items={information?.map((review, id) => (
          <Review
            name={review.name}
            review={review.review}
            avatar={review.avatar}
            avatarAlt={review.avatarAlt}
            picture={review.picture}
            pictureAlt={review.pictureAlt}
            key={id}
          />
        ))}
      />
    </section>
  );
}
