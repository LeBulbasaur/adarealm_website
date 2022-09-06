import "./team.css";

export default function Member({photo, name, description, links }) {
  return (
    <div className="member__container">
      <div className="member__container__header">
        <div className="member__photo">
          <img src={photo} alt="member__photo"></img>
        </div>
        <h4>
          {name} - {links ? (links.discordName ? links.discordName : "") : null}
        </h4>
      </div>
      <p style={{ marginBottom: "10px" }}>{description}</p>
      {links ? (
        <p className="member__links">
          Contact: <br />
          {links.twitter ? (
            <a href={links.twitter} target="blank">
              <svg
                width="32"
                height="27"
                viewBox="0 0 32 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.6666 2C29.3898 2.90064 27.9761 3.58948 26.4799 4.04C25.6769 3.11668 24.6097 2.46225 23.4226 2.16523C22.2356 1.86821 20.9859 1.94293 19.8427 2.37927C18.6995 2.81561 17.7178 3.59253 17.0306 4.60495C16.3433 5.61738 15.9835 6.81645 15.9999 8.04V9.37333C13.6568 9.43409 11.335 8.91442 9.24126 7.86059C7.14758 6.80677 5.34701 5.25151 3.99992 3.33333C3.99992 3.33333 -1.33341 15.3333 10.6666 20.6667C7.92062 22.5306 4.64946 23.4652 1.33325 23.3333C13.3333 30 27.9999 23.3333 27.9999 8C27.9987 7.6286 27.963 7.25813 27.8933 6.89333C29.2541 5.55132 30.2144 3.85695 30.6666 2V2Z"
                  stroke="#F0F0F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : null}
          {links.linkedin ? (
            <a href={links.linkedin} target="blank">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3333 10.6667C23.455 10.6667 25.4898 11.5095 26.9901 13.0098C28.4904 14.5101 29.3333 16.5449 29.3333 18.6667V28H23.9999V18.6667C23.9999 17.9594 23.719 17.2811 23.2189 16.7811C22.7188 16.281 22.0405 16 21.3333 16C20.626 16 19.9477 16.281 19.4476 16.7811C18.9475 17.2811 18.6666 17.9594 18.6666 18.6667V28H13.3333V18.6667C13.3333 16.5449 14.1761 14.5101 15.6764 13.0098C17.1767 11.5095 19.2115 10.6667 21.3333 10.6667V10.6667Z"
                  stroke="#F0F0F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00008 12H2.66675V28H8.00008V12Z"
                  stroke="#F0F0F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.33341 8C6.80617 8 8.00008 6.80609 8.00008 5.33333C8.00008 3.86058 6.80617 2.66667 5.33341 2.66667C3.86066 2.66667 2.66675 3.86058 2.66675 5.33333C2.66675 6.80609 3.86066 8 5.33341 8Z"
                  stroke="#F0F0F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : null}
          {links.facebook ? (
            <a href={links.facebook} target="blank">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9999 2.66667H19.9999C18.2318 2.66667 16.5361 3.36905 15.2859 4.61929C14.0356 5.86953 13.3333 7.56522 13.3333 9.33333V13.3333H9.33325V18.6667H13.3333V29.3333H18.6666V18.6667H22.6666L23.9999 13.3333H18.6666V9.33333C18.6666 8.97971 18.8071 8.64057 19.0571 8.39053C19.3072 8.14048 19.6463 8 19.9999 8H23.9999V2.66667Z"
                  stroke="#F0F0F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : null}
          {links.discordLink ? (
            <a href={links.discordLink} target="blank">
              <svg
                width="41"
                height="32"
                viewBox="0 0 71 55"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    fill="#ffffff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="71" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          ) : null}
          {links.website ? (
            <a href={links.discordLink} target="blank">
              <svg
                fill="white"
                width="32"
                height="32"
                viewBox="-2 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                class="jam jam-world"
              >
                <path d="M2.252 8A8.014 8.014 0 0 0 2 10c0 .69.088 1.36.252 2H5.1a19.83 19.83 0 0 1 0-4H2.252zm.818-2h2.346c.266-1.217.65-2.307 1.121-3.214A8.035 8.035 0 0 0 3.07 6zm14.678 2H14.9a19.83 19.83 0 0 1 0 4h2.848c.164-.64.252-1.31.252-2s-.088-1.36-.252-2zm-.818-2a8.035 8.035 0 0 0-3.467-3.214c.472.907.855 1.997 1.121 3.214h2.346zM7.112 8A17.763 17.763 0 0 0 7 10c0 .685.038 1.355.112 2h5.776a17.763 17.763 0 0 0 0-4H7.112zm.358-2h5.06a10.758 10.758 0 0 0-.783-2.177C11.119 2.568 10.447 2 10 2c-.448 0-1.119.568-1.747 1.823-.315.632-.58 1.367-.783 2.177zm-4.4 8a8.035 8.035 0 0 0 3.467 3.214c-.472-.907-.855-1.997-1.121-3.214H3.07zm13.86 0h-2.346c-.266 1.217-.65 2.307-1.121 3.214A8.035 8.035 0 0 0 16.93 14zm-9.46 0c.203.81.468 1.545.783 2.177C8.881 17.432 9.553 18 10 18c.448 0 1.119-.568 1.747-1.823.315-.632.58-1.367.783-2.177H7.47zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
          ) : null}
        </p>
      ) : null}
    </div>
  );
}
