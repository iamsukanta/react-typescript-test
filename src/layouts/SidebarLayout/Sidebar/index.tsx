import { useState } from "react";
const Sidebar = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <svg width="148" height="36" viewBox="0 0 148 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_109_73)">
                    <path d="M47.9681 11.9525C47.9681 11.9525 42.1396 11.9525 41.895 14.5406V21.4594C42.1396 24.0476 47.9681 24.0476 47.9681 24.0476C47.9681 24.0476 53.7813 24.0476 54.036 21.4594V20.201H51.2797V20.4455C50.7651 21.4135 47.963 21.4135 47.963 21.4135C47.963 21.4135 45.1608 21.4135 44.6462 20.4455V15.5545C45.1608 14.5865 47.963 14.5865 47.963 14.5865C47.963 14.5865 50.7651 14.5865 51.2797 15.5545V15.799H54.036V14.5406C53.7813 11.9525 47.9681 11.9525 47.9681 11.9525Z" fill="white"/>
                    <path d="M65.041 16.6142H58.8202V12.2225H56.0638V23.7877H58.8202V19.3858H65.041V23.7877H67.7973V12.2225H65.041V16.6142Z" fill="white"/>
                    <path d="M75.8929 11.9525C75.8929 11.9525 70.0644 11.9525 69.8199 14.5406V23.7928H72.5762V15.5545C73.0908 14.5865 75.8929 14.5865 75.8929 14.5865C75.8929 14.5865 78.6951 14.5865 79.2097 15.5545V17.1135H74.5632L76.6521 19.8851H79.2097V23.7928H81.966V14.5406C81.7214 11.9525 75.8929 11.9525 75.8929 11.9525Z" fill="white"/>
                    <path d="M91.0603 20.3844L86.9691 12.2225H83.9886V23.7877H86.7449V17.3988L89.9241 23.7877H92.176L95.3705 17.3988V23.7877H98.1116V12.2225H95.1311L91.0603 20.3844Z" fill="white"/>
                    <path d="M110.161 12.2225H100.139V23.7877H102.896V14.9941H109.738C110.222 14.9941 110.222 16.0691 110.222 16.0691C110.222 16.0691 110.222 17.1593 109.738 17.1135H104.877L106.905 19.8851H110.115C113.172 19.8851 113.172 16.0691 113.172 16.0691C113.172 16.0691 113.172 12.2225 110.161 12.2225Z" fill="white"/>
                    <path d="M128.232 16.0691C128.232 16.0691 128.232 12.2225 125.221 12.2225H115.2V23.7877H117.956V14.9941H124.798C125.282 14.9941 125.282 16.0691 125.282 16.0691C125.282 16.0691 125.282 17.1593 124.798 17.1135H119.938L124.844 23.7877H128.192L125.181 19.88C128.232 19.8851 128.232 16.0691 128.232 16.0691Z" fill="white"/>
                    <path d="M133.016 12.2225H130.26V23.7877H133.016V12.2225Z" fill="white"/>
                    <path d="M141.112 11.9525C141.112 11.9525 135.284 11.9525 135.039 14.5406V23.7928H137.795V15.5545C138.31 14.5865 141.112 14.5865 141.112 14.5865C141.112 14.5865 143.914 14.5865 144.429 15.5545V17.1135H139.782L141.871 19.8851H144.429V23.7928H147.185V14.5406C146.941 11.9525 141.112 11.9525 141.112 11.9525Z" fill="white"/>
                    <path d="M29.8761 3.97396C27.1962 1.52335 21.7702 0 15.7277 0C10.1234 0 5.11002 1.30427 1.59967 3.67846C0.0763088 4.7229 0.0457397 6.20549 0.00498091 7.92245C-0.0765367 11.6977 0.641837 24.7506 13.3739 34.3595C13.4095 34.39 13.4809 34.4461 13.5726 34.5072L14.4438 35.1339L15.6513 36L16.8129 35.0727L17.6281 34.4257L17.6688 34.3951C28.7145 26.0702 30.8033 15.3711 31.0632 9.7362C31.2415 5.94056 30.8033 4.81461 29.8761 3.97396ZM16.4308 32.8718L15.5952 33.5392L14.7291 32.9125C14.6425 32.8514 14.5813 32.8005 14.5813 32.8005C2.57279 23.7521 1.89007 11.499 1.9665 7.9632C2.00726 6.11888 2.12444 5.69601 2.69506 5.30371C5.88444 3.1486 10.5106 1.96151 15.7277 1.96151C21.2199 1.96151 26.2536 3.32182 28.5565 5.42089C28.8418 5.68072 29.2698 6.07303 29.1068 9.6445C28.8622 14.9329 26.8956 24.9799 16.497 32.8208L16.4308 32.8718Z" fill="#7FB8F4"/>
                    <path d="M27.609 6.46534C23.742 2.93464 10.419 1.7934 3.50528 6.46534C3.42376 6.52139 1.57942 21.2352 15.4629 31.6949C15.4629 31.6949 15.5036 31.7254 15.5546 31.7662C15.6106 31.7204 15.6463 31.6949 15.6463 31.6949C29.5247 21.2352 27.6752 6.53158 27.609 6.46534ZM16.9302 26.1364L15.5495 25.413L14.1688 26.1364L14.4337 24.5978L13.318 23.5075L14.8617 23.2833L15.5495 21.8874L16.2373 23.2833L17.781 23.5075L16.6653 24.5978L16.9302 26.1364ZM21.3016 11.3309H18.693V11.1016C18.2039 10.1846 15.5546 10.1846 15.5546 10.1846C15.5546 10.1846 12.9002 10.1846 12.4162 11.1016V15.7328C12.9053 16.6499 15.5546 16.6499 15.5546 16.6499C15.5546 16.6499 18.209 16.6499 18.693 15.7328V15.5035H21.3016V16.6957C21.057 19.1463 15.5546 19.1463 15.5546 19.1463C15.5546 19.1463 10.0369 19.1463 9.8076 16.6957V10.1387C10.0369 7.6881 15.5546 7.6881 15.5546 7.6881C15.5546 7.6881 21.057 7.6881 21.3016 10.1387V11.3309Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_109_73">
                    <rect width="147.18" height="36" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

            </div>
            <div className="sidebar-nav">
                <div className="nav-item">
                    Home
                </div>
                <div className="nav-item">
                    Scrim
                </div>
                <div className="nav-item">
                    Recruitment Tools
                </div>
                <div className="nav-item">
                    My Teams
                </div>
                <div className="nav-item">
                    Overview Data
                </div>
                <div className={ isActive ? 'nav-item nav-dropdown dropdown-active': 'nav-item nav-dropdown'} onClick={toggleClass} >
                    <div className="dropdown-label">
                        <div>Events</div>
                        <div className="dropdown-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="dropdown-list">
                        <div className="dropdown-list-item">Champria Chillin’</div>
                        <div className="dropdown-list-item">Champria Challenge</div>
                        <div className="dropdown-list-item">SoS Spring 2022</div>
                    </div>
                </div>
                <div className="nav-item">
                    About
                </div>
                <div className="nav-item">
                    Blog
                </div>
                <div className="nav-item">
                    Contact Us
                </div>
            </div>
        </div>
    )
}

export default Sidebar;