import "./team.css"

export default function Member({ name, description, links }) {
    return (
        <div className="member__container">
            <h4>{name}</h4>
            <p style={{ marginBottom: "10px" }}>{description}</p>
            {links ? (
                <p className="member__links">
                    Contact: <br />
                    {links.twitter ? (
                        <a href={links.twitter} target="blank">
                            <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.6666 2C29.3898 2.90064 27.9761 3.58948 26.4799 4.04C25.6769 3.11668 24.6097 2.46225 23.4226 2.16523C22.2356 1.86821 20.9859 1.94293 19.8427 2.37927C18.6995 2.81561 17.7178 3.59253 17.0306 4.60495C16.3433 5.61738 15.9835 6.81645 15.9999 8.04V9.37333C13.6568 9.43409 11.335 8.91442 9.24126 7.86059C7.14758 6.80677 5.34701 5.25151 3.99992 3.33333C3.99992 3.33333 -1.33341 15.3333 10.6666 20.6667C7.92062 22.5306 4.64946 23.4652 1.33325 23.3333C13.3333 30 27.9999 23.3333 27.9999 8C27.9987 7.6286 27.963 7.25813 27.8933 6.89333C29.2541 5.55132 30.2144 3.85695 30.6666 2V2Z" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                    ) : null}
                    {links.linkedin ? (
                        <a href={links.linkedin} target="blank">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.3333 10.6667C23.455 10.6667 25.4898 11.5095 26.9901 13.0098C28.4904 14.5101 29.3333 16.5449 29.3333 18.6667V28H23.9999V18.6667C23.9999 17.9594 23.719 17.2811 23.2189 16.7811C22.7188 16.281 22.0405 16 21.3333 16C20.626 16 19.9477 16.281 19.4476 16.7811C18.9475 17.2811 18.6666 17.9594 18.6666 18.6667V28H13.3333V18.6667C13.3333 16.5449 14.1761 14.5101 15.6764 13.0098C17.1767 11.5095 19.2115 10.6667 21.3333 10.6667V10.6667Z" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.00008 12H2.66675V28H8.00008V12Z" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.33341 8C6.80617 8 8.00008 6.80609 8.00008 5.33333C8.00008 3.86058 6.80617 2.66667 5.33341 2.66667C3.86066 2.66667 2.66675 3.86058 2.66675 5.33333C2.66675 6.80609 3.86066 8 5.33341 8Z" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    ) : null}
                    {links.facebook ? (
                        <a href={links.facebook} target="blank">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9999 2.66667H19.9999C18.2318 2.66667 16.5361 3.36905 15.2859 4.61929C14.0356 5.86953 13.3333 7.56522 13.3333 9.33333V13.3333H9.33325V18.6667H13.3333V29.3333H18.6666V18.6667H22.6666L23.9999 13.3333H18.6666V9.33333C18.6666 8.97971 18.8071 8.64057 19.0571 8.39053C19.3072 8.14048 19.6463 8 19.9999 8H23.9999V2.66667Z" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    ) : null}
                </p>
            ) : null
            }
        </div >
    )
}