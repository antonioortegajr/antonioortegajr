const SadBunny = () => (
    <div>
        <code id='bunny' className="rainbow">
            |￣￣￣￣￣￣|<br/>
            |   404     |<br/>
            |  NOT      |<br/>
            |  HERE     |<br/>
            |＿＿＿＿＿_|<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|| <br/>
            (/__\) || <br/>
            (;ㅅ;) ||<br/>
            / 　 づ<br/>
        </code>
        <style jsx>{`
             #bunny {
                display: block;
                margin: 0 auto;
                text-align: left;
                width: 320px;
                color: #6b7280
            }
            .rainbow{
                background: -webkit-linear-gradient(left, red, orange , yellow, green, cyan, blue, violet);
                background: -o-linear-gradient(right, red, orange, yellow, green, cyan, blue, violet);
                background: -moz-linear-gradient(right, red, orange, yellow, green, cyan, blue, violet);
                background: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; 
            }
            @keyframes drain {
                from { filter: grayscale(0); }
                to { filter: grayscale(1); }
            }
            .rainbow {
                animation: drain 4s ease-in forwards;
            }
            .rainbow:hover, .rainbow:active {
                animation: none;
                filter: grayscale(0);
            }
            @media (prefers-reduced-motion: reduce) {
                .rainbow {
                    animation: none;
                }
            }
            @media only screen and (max-width: 400px) {
                #bunny {
                    width: 320px;
                }
            }
        `}</style>
    </div> 
)
export default SadBunny
