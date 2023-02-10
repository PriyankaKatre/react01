
interface mobileProps {
    img:string,
    title:string,
    brand:string
}


const Mobile = ({ img, title, brand } : mobileProps) => {
  return (
    <article className='mobile'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{brand} </h4>
    </article>
  );
};

export default Mobile;
