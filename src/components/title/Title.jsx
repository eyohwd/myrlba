import './title.css';

const Title = ({subTitle, title, curricu}) => {
  return (
    <div className='title'>
      <h2 className={curricu}>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
}

export default Title;
