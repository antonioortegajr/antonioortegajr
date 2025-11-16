const ProfilePic = ({img}) => (
    <div>
        <img id="me"
            src={img}
            alt='antonio ortega jr'
        />
        <style jsx>{`
             #me {
                float:left;
                max-width: 200px;
                border-radius: 18%;
                border: none;
                margin:0;
            }
        `}</style>
    </div>
)
export default ProfilePic
