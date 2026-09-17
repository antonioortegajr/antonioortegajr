const RainbowBunny = () => (
    <div>
        <code id='bunny' className="rainbow">
            |￣￣￣￣￣￣|<br/>
            |    What&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
            |    Do&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <br/>
            |  I DO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
            |＿＿＿＿＿_|<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|| <br/>
            (\__/)&nbsp;|| <br/>
            (•ㅅ•) ||<br/>
            / 　 づ<br/>
        </code>
        <style jsx>{`
             #bunny {
                float:right;
                width: 200px;
                padding-right:15%;
                color: #c5c3c9
            }
            @media only screen and (max-width: 600px) {
                #bunny {
                float: right;
                padding-right: 0%;
                width: 40%;
                }
            }
            @media only screen and (max-width: 337px) {
                #bunny {
                float: right;
                padding-right: 0%;
                }
            @media only screen and (max-width: 320px) {
                #bunny {
                display: none;
                }
            }
        `}</style>
    </div> 
)
export default RainbowBunny