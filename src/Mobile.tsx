
interface bookProps {
    img:string,
    title:string,
    brand:string
}


const Book = ({ img, title, brand } : bookProps) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{brand} </h4>
    </article>
  );
};

export default Book;
