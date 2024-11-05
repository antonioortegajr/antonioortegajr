const ProfilePic = ({img}) => (
    <div>
        <img id="me"
            src={img}
            alt='antonio ortega jr'
        />
        <style jsx>{`
             #me {
                float:left;
                max-width: 270px;
                border-radius: 50%;
                border: none;
                margin:0;
                padding:0;
            }
        `}</style>
    </div>
)
export default ProfilePic
