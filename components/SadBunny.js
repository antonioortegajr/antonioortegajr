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
