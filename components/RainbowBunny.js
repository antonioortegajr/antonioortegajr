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
            .rainbow{
                background: red;
                background: -webkit-linear-gradient(left, red, orange , yellow, green, cyan, blue, violet);
                background: -o-linear-gradient(right, red, orange, yellow, green, cyan, blue, violet);
                background: -moz-linear-gradient(right, red, orange, yellow, green, cyan, blue, violet);
                background: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; 
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