const Header = () => {
    return (
        <div className="root-header">
            <div className="top-header">
                <div className="menu-bar">
                    <svg fill="#fff" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                    </svg>
                </div>
                <div className="header-menu">
                    <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="white"/>
                        </svg>
                    </button>
                    <button>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z" fill="white"/>
                        </svg>
                    </button>
                    <button>
                        <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white"/>
                            <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_2_664)"/>
                            <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.3"/>
                            <path d="M19.9804 10C21.4801 10.0204 22.9116 10.6169 23.9666 11.661C25.0216 12.705 25.6156 14.1131 25.6208 15.582C25.626 17.0508 25.0418 18.4629 23.9942 19.5141C22.9466 20.5652 21.5193 21.1713 20.0197 21.2019C16.8491 21.2019 14.2773 18.7131 14.2746 15.6351C14.268 14.8973 14.4107 14.1655 14.6945 13.482C14.9783 12.7984 15.3976 12.1768 15.9281 11.6528C16.4586 11.1289 17.0898 10.713 17.7854 10.4294C18.4809 10.1457 19.2269 9.99974 19.9804 10ZM20.0162 12.2416C19.1112 12.232 18.2394 12.5743 17.5918 13.1934C16.9442 13.8124 16.5738 14.6578 16.5618 15.544C16.5421 17.4174 18.0504 18.9471 19.9356 18.9629C21.8369 18.9796 23.3945 17.5173 23.4267 15.6886C23.4518 13.774 21.9622 12.2644 20.0162 12.2416Z" fill="white" fill-opacity="0.35"/>
                            <path d="M19.9875 23.2103C20.8584 23.2384 21.7348 23.2103 22.5995 23.305C25.2116 23.5776 27.4423 25.6422 27.9132 28.1704C27.9604 28.3959 27.9903 28.6244 28.0027 28.8542C28.0197 29.439 27.5748 29.943 27.018 29.9939C26.7357 30.0151 26.4549 29.9375 26.2255 29.7751C25.996 29.6127 25.8328 29.3759 25.7648 29.1067C25.7021 28.8288 25.6753 28.5421 25.6001 28.2686C25.3818 27.4743 24.9093 26.7694 24.252 26.2573C23.5948 25.7452 22.7872 25.4528 21.9479 25.423C20.6511 25.3868 19.3537 25.3868 18.0557 25.423C17.1244 25.4538 16.2344 25.8071 15.5439 26.4199C14.8534 27.0327 14.4072 27.8654 14.2844 28.7701C14.1949 29.3644 13.8037 29.7712 13.2604 29.8221C12.6982 29.8747 12.1943 29.5705 12.0483 29.0488C11.995 28.8371 11.9871 28.6168 12.0251 28.4019C12.2556 26.9712 12.9969 25.667 14.1171 24.7214C15.2372 23.7757 16.6637 23.2499 18.1426 23.2375C18.7575 23.2322 19.3725 23.2375 19.9884 23.2375L19.9875 23.2103Z" fill="white" fill-opacity="0.35"/>
                            <path d="M47.41 16.5898L52 21.1698L56.59 16.5898L58 17.9998L52 23.9998L46 17.9998L47.41 16.5898Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_2_664" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#646464"/>
                            <stop offset="1" stop-color="#444444"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bottom-header">
                <div className="title">
                    <h1>My Scrims</h1>
                </div>
                <div className="sorting-section">
                    <div className="select-root">
                        <div className="select-box">
                            <select>
                                <option>Select</option>
                                <option>Itme 1</option>
                                <option>Item 2</option>
                                <option>Item 3</option>
                            </select>
                        </div>
                    </div>
                
                    <button>Create Scrim</button>
                </div>
            </div>
        </div>
    )
}

export default Header;