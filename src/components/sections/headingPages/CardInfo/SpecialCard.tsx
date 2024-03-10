import Swal from "sweetalert2";

interface ISpecialCardTypes {
  image: string;
  title: string;
  price: string;
  description: string;
  id: number;
}
export default function SpecialCard({
  image,
  title,
  price,
  description,
  id,
}: ISpecialCardTypes) {
  const handleOrder = (id: number) => {
    console.log(id, "id is clicked");

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Do you want to confirm order?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Yes, order it!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Orderd!",
            "Your order has been confirmed.",
            "success"
          );
        }
      });
  };
  return (
    <article className="menu-card">
      <img src={image} alt="Special Menu"></img>
      <section className="menu-card-content">
        <h1>{title}</h1>
        <h3>{price}</h3>
        <p>{description}</p>
        <button className="special-button" onClick={() => handleOrder(id)}>
          Order Now
        </button>
      </section>
    </article>
  );
}
