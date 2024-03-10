import Star from "../../../../assets/star.png";

export default function TestimonialCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <article className="testimonial-card" key={name}>
      <img src={Star} alt="delivery Icon"></img>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}
