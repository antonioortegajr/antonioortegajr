import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { QRCode } from 'react-qrcode-logo'

const SocialLink = ({link, icon, isFirst, isLast}) => {
    const [showQR, setShowQR] = useState(false)
    const [qrPosition, setQrPosition] = useState("center")
    const linkRef = useRef(null)

    useEffect(() => {
        if (showQR && linkRef.current) {
        const rect = linkRef.current.getBoundingClientRect()
        const windowWidth = window.innerWidth

        if (isFirst && rect.left < 100) {
            setQrPosition("right")
        } else if (isLast && windowWidth - rect.right < 100) {
            setQrPosition("left")
        } else {
            setQrPosition("center")
        }
        }
    }, [showQR, isFirst, isLast])

    return (
        <div className="social-link-container">
            <li>
                <a 
                    className="social-link rainbow-hover" 
                    href={link}
                    onMouseEnter={() => setShowQR(true)}
                    onMouseLeave={() => setShowQR(false)}
                >
                    <FontAwesomeIcon size='lg' icon={icon} />
                </a>
            </li>
            {showQR && (
                <div className="qr-code">
                    <QRCode value={link} size={128} />
                </div>
            )}
            <style jsx>{`
                .social-link-container {
                    position: relative;
                }
                li {
                    display: flex;
                    padding: 6px 8px;
                }
                a {
                    color: #067df7;
                    text-decoration: none;
                }
                a:hover {
                    color: #fff;
                }
                .qr-code {
                    position: absolute;
                    top: 100%;
                    background: white;
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    z-index: 10;
                }
                .qr-code.center {
                    left: 50%;
                    transform: translateX(-50%);
                }
                .qr-code.left {
                    right: 0;
                }
                .qr-code.right {
                    left: 0;
                }
                @media (max-width: 768px) {
                    .qr-code {
                        display: none;
                    }
                }
            `}</style>
    
        </div>
    )
}

export default SocialLink
