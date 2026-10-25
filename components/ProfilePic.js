const ProfilePic = ({ img, alt = 'antonio ortega jr', creditName, creditUrl }) => (
  <figure>
    <img id="me" src={img} alt={alt} />
    {creditName && creditUrl && (
      <figcaption>
        Portrait by <a href={creditUrl}>{creditName}</a>
      </figcaption>
    )}
    <style jsx>{`
      figure {
        float: left;
        margin: 0;
      }
      #me {
        max-width: 270px;
        border-radius: 50%;
        border: none;
        margin: 0;
        padding: 0;
        display: block;
      }
      figcaption {
        text-align: center;
        font-size: 0.8em;
        color: #c5c3c9;
        margin-top: 0.5em;
      }
      figcaption a {
        color: inherit;
        text-decoration: underline;
      }
      figcaption a:hover {
        text-decoration: none;
      }
    `}</style>
  </figure>
)

export default ProfilePic
