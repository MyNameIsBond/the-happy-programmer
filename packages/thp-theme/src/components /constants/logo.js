import { styled, keyframes } from "frontity";

export default () => {
  return (
    <>
      <LogoStyle
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="205"
        height="55"
        viewBox="0 0 1184 317"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            y1="-0.208"
            x2="0.5"
            y2="1.331"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#c668e6" />
            <stop offset="1" stopColor="#7e2be7" />
          </linearGradient>
        </defs>
        <g id="Group_56" data-name="Group 56" transform="translate(-316 -352)">
          <g id="Group_47" data-name="Group 47" transform="translate(17 -2)">
            <text
              id="THE_HAPPY_PROGRAMMER"
              data-name="THE HAPPY PROGRAMMER"
              transform="translate(657 399)"
              fontSize="101"
              fontFamily="SFProText-Black, SF Pro Text"
              fontWeight="800"
              letterSpacing="-0.062em"
            >
              <tspan x="0" y="96">
                THE HAPPY{" "}
              </tspan>
              <tspan x="0" y="189">
                PROGRAMMER
              </tspan>
            </text>
            <g
              id="Group_46"
              data-name="Group 46"
              transform="translate(-188 -159)"
            >
              <g id="Group_45" data-name="Group 45">
                <g
                  id="Group_44"
                  data-name="Group 44"
                  transform="translate(-9 19)"
                >
                  <g
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    transform="translate(496 494)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="56"
                  >
                    <circle cx="158.5" cy="158.5" r="158.5" stroke="none" />

                    <circle cx="158.5" cy="158.5" r="130.5" fill="none" />
                  </g>
                </g>
                <path
                  id="Path_52"
                  data-name="Path 52"
                  d="M72,0l72,125H0Z"
                  transform="translate(574 593)"
                  fill="url(#linear-gradient)"
                />
              </g>
            </g>
          </g>
        </g>
      </LogoStyle>
    </>
  );
};

const wiggleWiggle = keyframes`
  20%,
  100% {
    transform: translate(0, 2px); 
  }

  0% {
    transform: translate(0, 0px); 
  }
  10% {
    transform: translate(0, 2px); 
  }
`;

const LogoStyle = styled.svg`
  text {
    fill: var(--background-colour);
  }
  &:hover {
    text {
      transition: all 0.4s ease;

      display: block;
      fill: var(--text-colour);
    }
  }
`;
