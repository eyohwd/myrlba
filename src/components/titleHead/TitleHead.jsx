import './titleHead.css';

const TitleHead = ({subTitle, title}) => {
  return (
    <div className='titleHead' >
      <h2 >{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
}

export default TitleHead;
