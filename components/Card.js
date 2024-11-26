import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ href, title, description, icon }) => (
  <a href={href} className="card">
    <h3>{title} &rarr;</h3>
    <p style={{color:'#c5c3c9'}}>{description} <FontAwesomeIcon size='sm' icon={icon} width="0.875em" /></p>
    <style jsx>{`
    .card {
        padding: 18px 18px 24px;
        width: 220px;
        min-height: 100px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 3px solid #9b9b9b;
      }
      .card:hover {
        border: 3px solid transparent;
        border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
        border-image-slice: 1;
      }
      .card h3 {
        margin: 0;
        color: #1b5982;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>    
  </a>
);

export default Card;