const ProfilePic = () => (
    <div>
        <img id="me"
            src='/me.jpg'
            alt='my-face'
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
