import React from "react";
import "./nft3.css";

import n3 from "./img/n3.png";
import wallet from "./img/Wallet.png";
// import Discount from "./img/Discount.png";
import Profile from "./img/Profile.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import IconButton from "@mui/material/IconButton";

import ar1 from "./img/arrowl.png";
import ar2 from "./img/arrowr.png";
import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import { Element } from "react-scroll";
import Discount from "../Assets/Discount.png";
import diamond from "../Assets/diamnd.png";
import Star from "../Assets/Star.png";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  console.log("props", props);
  return (
    <Box style={{ position: "absolute", left: "-20px", top: "50%" }}>
      <img
        className={className}
        src={ar2}
        alt="prev"
        onClick={onClick}
        style={{ ...style, display: "block" }}
      />
    </Box>
  );
};
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box style={{ position: "absolute", right: "0%", top: "50%" }}>
      <img
        className={className}
        src={ar1}
        alt="Next"
        onClick={onClick}
        style={{ ...style, display: "block" }}
      />
    </Box>
  );
};
const settings1 = {
  // centerPadding: "100px",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 500,
      },
    },
    // {
    //   breakpoint: 720,
    //   settings: {
    //     slidesToShow: 1.0,
    //     slidesToScroll: 1,
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //   },
    // },
    {
      breakpoint: 600,
      settings: "unslick",
      // settings: {
      //   unslick: true,
      //   centerMode: true,
      //   slidesToShow: 1,
      //   variableWidth: false,
      //   infinite: false,
      //   vertical: true,

      // },
    },
  ],

  // centerMode: true,
};

const Nft3 = () => {
  return (
    <Element>
        <div className="dvv">
        <h1 className="button3">Utilities Explained</h1>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "4px",
            margin: "-2px",
          }}
        >
          <Slider
            className="sickSli"
            sx={{ display: "flex !important" }}
            {...settings1}
          >
            <div className="main-wrapper">
              <div className="card-wrapper">
                <div className="card-header">
                  <div className="card-image">
                    <img src={wallet} alt="" />
                  </div>
                  <div className="card-header-name">
                    <span>Play To Earn</span>
                  </div>
                </div>
                <div className="card-info-wrapper">
                  <span>Get free chips credited to you once a day. Play games, complete missions, climb the leaderboard, and get cash rewards every day</span>
                </div>
              </div>
              <div className="card-shadow-box"></div>
            </div>

            {/* Second Div  */}
            <div className="main-wrapper">
              <div className="card-wrapper">
                <div className="card-header">
                  <div className="card-image">
                    <img src={Discount} alt="" />
                  </div>
                  <div className="card-header-name">
                    <span>House %</span>
                  </div>
                </div>
                <div className="card-info-wrapper">
                  <span>
                    You get to earn a share! NFT holders will get 50% of the casino’s profits in $MGC on a monthly basis.
Each NFT will have a share of the casino profit as a utility in $MGC tokens
                  </span>
                </div>
              </div>
              <div className="card-shadow-box"></div>
            </div>

            {/*  third Div  */}
            <div className="main-wrapper">
              <div className="card-wrapper">
                <div className="card-header">
                  <div className="card-image">
                    <img src={Profile} alt="" />
                  </div>
                  <div className="card-header-name">
                    <span>Referral %</span>
                  </div>
                </div>
                <div className="card-info-wrapper">
                  <span>
                    Invite your friends or promote us as an affiliate, and you’ll get an x% commission in $MGC from the revenue generated by the players you bring to the casino
                  </span>
                </div>
              </div>
              <div className="card-shadow-box"></div>
            </div>
            {/* fourth Div  */}
            <div className="main-wrapper">
              <div className="card-wrapper">
                <div className="card-header">
                  <div className="card-image">
                    <img src={diamond} alt="" />
                  </div>
                  <div className="card-header-name">
                    <span>Rakeback %</span>
                  </div>
                </div>
                <div className="card-info-wrapper">
                  <span>
                    Get a certain amount of your coins back from every bet you make. Basically, just by playing as you normally do, you would get some coins back as a bonus
                  </span>
                </div>
              </div>
              <div className="card-shadow-box"></div>
            </div>
            {/* fifth Div  */}
            <div className="main-wrapper">
              <div className="card-wrapper">
                <div className="card-header">
                  <div className="card-image">
                    <img src={Star} alt="" />
                  </div>
                  <div className="card-header-name">
                    <span>Exclusive access </span>
                  </div>
                </div>
                <div className="card-info-wrapper">
                  <span>
                    Exclusive real-life and metaverse events for NFT holders. Receive invitations to special tournaments, parties, giveaways and more
                  </span>
                </div>
              </div>
              <div className="card-shadow-box"></div>
            </div>
          </Slider>
        </Box>
      </div>
    </Element>
  );
};
export default Nft3;
