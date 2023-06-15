import React from "react";
import "./App.css";
import { useWindowWidth } from "../src/breakpoints";
import { Logo } from "../src/component/Logo/Logo";

function App() {
  const screenWidth = useWindowWidth();

  return (
    <div className="element">
      <div
        className="index"
        style={{
          height:
            screenWidth < 722
              ? "3858px"
              : screenWidth >= 722 && screenWidth < 1024
              ? "4579px"
              : screenWidth >= 1024 && screenWidth < 1440
              ? "3654px"
              : screenWidth >= 1440
              ? "6162px"
              : undefined,
          transition: screenWidth < 722 ? "all 0.2s ease-in-out" : undefined,
          width:
            screenWidth < 722
              ? "375px"
              : screenWidth >= 722 && screenWidth < 1024
              ? "722px"
              : screenWidth >= 1024 && screenWidth < 1440
              ? "1024px"
              : screenWidth >= 1440
              ? "1440px"
              : undefined,
        }}
      >
        {screenWidth < 722 && (
          <footer className="footer">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper">Rios Partners 2023</div>
            </div>
          </footer>
        )}

        {(screenWidth >= 1440 ||
          (screenWidth >= 722 && screenWidth < 1024)) && (
          <>
            <div
              className="content-left-image"
              style={{
                alignItems:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "center"
                    : undefined,
                backgroundColor:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "#ffffff"
                    : screenWidth >= 1440
                    ? "#1d3d78"
                    : undefined,
                display:
                  screenWidth >= 722 && screenWidth < 1024 ? "flex" : undefined,
                gap:
                  screenWidth >= 722 && screenWidth < 1024 ? "91px" : undefined,
                height:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "800px"
                    : screenWidth >= 1440
                    ? "1024px"
                    : undefined,
                justifyContent:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "center"
                    : undefined,
                top:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "3250px"
                    : screenWidth >= 1440
                    ? "0"
                    : undefined,
                width:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "722px"
                    : screenWidth >= 1440
                    ? "1439px"
                    : undefined,
              }}
            >
              {screenWidth >= 722 && screenWidth < 1024 && (
                <>
                  <div className="frame" />
                  <img
                    className="image"
                    alt="Image"
                    src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-5.png"
                  />
                </>
              )}

              <div
                className="title_card"
                style={{
                  height:
                    screenWidth >= 1440
                      ? "910px"
                      : screenWidth >= 722 && screenWidth < 1024
                      ? "347px"
                      : undefined,
                  left:
                    screenWidth >= 1440
                      ? "82px"
                      : screenWidth >= 722 && screenWidth < 1024
                      ? "0"
                      : undefined,
                  position:
                    screenWidth >= 1440
                      ? "relative"
                      : screenWidth >= 722 && screenWidth < 1024
                      ? "absolute"
                      : undefined,
                  top:
                    screenWidth >= 1440
                      ? "30px"
                      : screenWidth >= 722 && screenWidth < 1024
                      ? "453px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "1275px"
                      : screenWidth >= 722 && screenWidth < 1024
                      ? "726px"
                      : undefined,
                }}
              >
                {screenWidth >= 1440 && (
                  <img
                    className="scroll-down-arrow"
                    alt="Scroll down arrow"
                    src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/scroll-down-arrow-3@2x.png"
                  />
                )}

                <div
                  className="div"
                  style={{
                    height:
                      screenWidth >= 1440
                        ? "356px"
                        : screenWidth >= 722 && screenWidth < 1024
                        ? "290px"
                        : undefined,
                    left:
                      screenWidth >= 1440
                        ? "0"
                        : screenWidth >= 722 && screenWidth < 1024
                        ? "31px"
                        : undefined,
                    top:
                      screenWidth >= 1440
                        ? "397px"
                        : screenWidth >= 722 && screenWidth < 1024
                        ? "57px"
                        : undefined,
                    width:
                      screenWidth >= 1440
                        ? "1275px"
                        : screenWidth >= 722 && screenWidth < 1024
                        ? "658px"
                        : undefined,
                  }}
                >
                  <div
                    className="title-text"
                    style={{
                      alignItems:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "flex-end"
                          : undefined,
                      backgroundColor:
                        screenWidth >= 1440 ? "#1d3d78" : undefined,
                      border:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "3px solid"
                          : undefined,
                      borderColor:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "#2a5096"
                          : undefined,
                      borderRadius:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "15px"
                          : undefined,
                      display:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "flex"
                          : undefined,
                      gap:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "10px"
                          : undefined,
                      height:
                        screenWidth >= 1440
                          ? "180px"
                          : screenWidth >= 722 && screenWidth < 1024
                          ? "32px"
                          : undefined,
                      justifyContent:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "center"
                          : undefined,
                      left:
                        screenWidth >= 1440
                          ? "70px"
                          : screenWidth >= 722 && screenWidth < 1024
                          ? "279px"
                          : undefined,
                      top:
                        screenWidth >= 1440
                          ? "0"
                          : screenWidth >= 722 && screenWidth < 1024
                          ? "226px"
                          : undefined,
                      width:
                        screenWidth >= 1440
                          ? "1140px"
                          : screenWidth >= 722 && screenWidth < 1024
                          ? "100px"
                          : undefined,
                    }}
                  >
                    {screenWidth >= 722 && screenWidth < 1024 && (
                      <div className="learn-more">
                        <span className="span">Learn</span>
                        <span className="text-wrapper-2">&nbsp;</span>
                        <span className="text-wrapper-3">MOre</span>
                      </div>
                    )}
                  </div>
                  <div
                    className="title-frame"
                    style={{
                      gap:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "11px"
                          : undefined,
                      height:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "290px"
                          : undefined,
                      top:
                        screenWidth >= 1440
                          ? "4px"
                          : screenWidth >= 722 && screenWidth < 1024
                          ? "0"
                          : undefined,
                      width:
                        screenWidth >= 1440
                          ? "1275px"
                          : screenWidth >= 722 && screenWidth < 1024
                          ? "658px"
                          : undefined,
                    }}
                  >
                    {screenWidth >= 1440 && (
                      <>
                        <h1 className="h-1">
                          Transforming organizations through human centered
                          design.
                        </h1>
                        <div className="CT-as">
                          <div className="button">
                            <div className="learn-more-2">LEARN MORE</div>
                          </div>
                          <div className="contact-us-wrapper">
                            <div className="contact-us">CONTACT US</div>
                          </div>
                        </div>
                      </>
                    )}

                    {screenWidth >= 722 && screenWidth < 1024 && (
                      <>
                        <div className="text">
                          <span className="text-wrapper-4">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum
                            aliquam lacus lacinia massa blandit nascetur nullam
                            elit nunc. Integer gravida accumsan rhoncus velit
                            volutpat viverra at eleifend aliquet. Feugiat odio
                            arcu faucibus vestibulum porta sem pellentesque
                            ullamcorper. Dui mauris pellentesque hendrerit
                            adipiscing egestas sit dolor.
                            <br />
                          </span>
                        </div>
                        <div className="span-wrapper">
                          <span className="text-wrapper-5">
                            Vulputate at fermentum cras facilisi varius sagittis
                            habitant nunc. Auctor luctus justo commodo posuere
                            nibh nulla mi duis. Feugiat nunc lectus tellus sem
                            molestie. Ultrices massa vitae adipiscing sit dui
                            amet vel. Tempus varius tellus neque magna sapien
                            dui. Integer nulla maecenas nisl non. Imperdiet amet
                            vestibulum est nisl leo non diam semper.
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {screenWidth >= 1440 && (
                  <header className="header">
                    <Logo
                      style="white"
                      styleOverride={{
                        backgroundImage:
                          "url(https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/logo-3@2x.png)",
                        minWidth: "191px",
                        position: "relative",
                        width: "unset",
                      }}
                    />
                    <div className="menu">
                      <div className="menu-toggle">
                        <div className="text-wrapper-6">Menu</div>
                        <div>
                          <img
                            className="hamburger"
                            alt="Hamburger"
                            src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/hamburger-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </header>
                )}

                {screenWidth >= 722 && screenWidth < 1024 && (
                  <div className="text-wrapper-7">Heading</div>
                )}
              </div>
            </div>
            <div
              className="element-px"
              style={{
                alignItems:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "center"
                    : undefined,
                backgroundColor:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "#2a5096"
                    : screenWidth >= 1440
                    ? "#ffffff"
                    : undefined,
                display:
                  screenWidth >= 722 && screenWidth < 1024 ? "flex" : undefined,
                gap:
                  screenWidth >= 722 && screenWidth < 1024 ? "91px" : undefined,
                height:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "800px"
                    : screenWidth >= 1440
                    ? "1024px"
                    : undefined,
                justifyContent:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "center"
                    : undefined,
                left:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "-1px"
                    : screenWidth >= 1440
                    ? "1px"
                    : undefined,
                top:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "2450px"
                    : screenWidth >= 1440
                    ? "1024px"
                    : undefined,
                width:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "722px"
                    : screenWidth >= 1440
                    ? "1439px"
                    : undefined,
              }}
            >
              {screenWidth >= 722 && screenWidth < 1024 && (
                <>
                  <div className="frame-2" />
                  <img
                    className="img"
                    alt="Image"
                    src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-6.png"
                  />
                  <div className="content">
                    <div className="overlap-group-2">
                      <div className="learn-more-wrapper">
                        <div className="learn-more-3">
                          <span className="text-wrapper-8">Learn</span>
                          <span className="text-wrapper-9">&nbsp;</span>
                          <span className="text-wrapper-10">MOre</span>
                        </div>
                      </div>
                      <div className="flex-container">
                        <div className="text-2">
                          <span className="text-wrapper-11">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum
                            aliquam lacus lacinia massa blandit nascetur nullam
                            elit nunc. Integer gravida accumsan rhoncus velit
                            volutpat viverra at eleifend aliquet. Feugiat odio
                            arcu faucibus vestibulum porta sem pellentesque
                            ullamcorper. Dui mauris pellentesque hendrerit
                            adipiscing egestas sit dolor.
                            <br />
                          </span>
                        </div>
                        <div className="text-3">
                          <span className="text-wrapper-12">
                            Vulputate at fermentum cras facilisi varius sagittis
                            habitant nunc. Auctor luctus justo commodo posuere
                            nibh nulla mi duis. Feugiat nunc lectus tellus sem
                            molestie. Ultrices massa vitae adipiscing sit dui
                            amet vel. Tempus varius tellus neque magna sapien
                            dui. Integer nulla maecenas nisl non. Imperdiet amet
                            vestibulum est nisl leo non diam semper.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-13">Heading</div>
                  </div>
                </>
              )}

              {screenWidth >= 1440 && (
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur. Eu ultrices molestie
                  tempus a odio. Nibh nisi massa semper interdum. Aenean
                  elementum mi lacus vitae amet feugiat. Magnis vitae vulputate
                  nunc vestibulum a lacinia rutrum id risus
                </p>
              )}
            </div>
            <div
              className="frame-wrapper"
              style={{
                gap: screenWidth >= 1440 ? "10px" : undefined,
                height:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "850px"
                    : screenWidth >= 1440
                    ? "1024px"
                    : undefined,
                padding: screenWidth >= 1440 ? "50px 55px" : undefined,
                top:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "1600px"
                    : screenWidth >= 1440
                    ? "2048px"
                    : undefined,
                width:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "722px"
                    : screenWidth >= 1440
                    ? "1439px"
                    : undefined,
              }}
            >
              <div
                className="frame-3"
                style={{
                  alignItems: screenWidth >= 1440 ? "center" : undefined,
                  display: screenWidth >= 1440 ? "flex" : undefined,
                  gap: screenWidth >= 1440 ? "24px" : undefined,
                  height:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "786px"
                      : undefined,
                  justifyContent: screenWidth >= 1440 ? "center" : undefined,
                  marginLeft: screenWidth >= 1440 ? "-6.50px" : undefined,
                  marginRight: screenWidth >= 1440 ? "-6.50px" : undefined,
                  minWidth:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "600px"
                      : undefined,
                  overflow:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "hidden"
                      : undefined,
                  width: screenWidth >= 1440 ? "1342px" : undefined,
                }}
              >
                <div
                  className="feature_block"
                  style={{
                    flex: screenWidth >= 1440 ? "1" : undefined,
                    height:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "246px"
                        : screenWidth >= 1440
                        ? "432px"
                        : undefined,
                    left:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "70px"
                        : undefined,
                    minWidth: screenWidth >= 1440 ? "431.33px" : undefined,
                    position:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "absolute"
                        : screenWidth >= 1440
                        ? "relative"
                        : undefined,
                    top:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "0"
                        : undefined,
                    width:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "480px"
                        : undefined,
                  }}
                >
                  <div
                    className="overlap-group-3"
                    style={{
                      height:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "222px"
                          : screenWidth >= 1440
                          ? "442px"
                          : undefined,
                      left:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "-4px"
                          : screenWidth >= 1440
                          ? "66px"
                          : undefined,
                      top: screenWidth >= 1440 ? "-11px" : undefined,
                      width:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "488px"
                          : screenWidth >= 1440
                          ? "300px"
                          : undefined,
                    }}
                  >
                    <img
                      className="icon"
                      style={{
                        height:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "44px"
                            : screenWidth >= 1440
                            ? "114px"
                            : undefined,
                        left:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "216px"
                            : screenWidth >= 1440
                            ? "119px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "55px"
                            : screenWidth >= 1440
                            ? "61px"
                            : undefined,
                      }}
                      alt="Icon"
                      src={
                        screenWidth >= 722 && screenWidth < 1024
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon-3@2x.png"
                          : screenWidth >= 1440
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon-9@2x.png"
                          : undefined
                      }
                    />
                    <img
                      className="image-2"
                      style={{
                        height:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "158px"
                            : screenWidth >= 1440
                            ? "300px"
                            : undefined,
                        top:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "25px"
                            : screenWidth >= 1440
                            ? "95px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "488px"
                            : screenWidth >= 1440
                            ? "300px"
                            : undefined,
                      }}
                      alt="Image"
                      src={
                        screenWidth >= 722 && screenWidth < 1024
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-7.png"
                          : screenWidth >= 1440
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-15.svg"
                          : undefined
                      }
                    />
                    <p
                      className="text-wrapper-14"
                      style={{
                        fontSize:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "12px"
                            : screenWidth >= 1440
                            ? "20px"
                            : undefined,
                        left:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "4px"
                            : screenWidth >= 1440
                            ? "13px"
                            : undefined,
                        textDecoration:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "underline"
                            : undefined,
                        textShadow:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "0px 4px 4px #00000040"
                            : undefined,
                        top:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "174px"
                            : screenWidth >= 1440
                            ? "394px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "480px"
                            : screenWidth >= 1440
                            ? "274px"
                            : undefined,
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
                <div
                  className="feature_block"
                  style={{
                    flex: screenWidth >= 1440 ? "1" : undefined,
                    height:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "246px"
                        : screenWidth >= 1440
                        ? "378px"
                        : undefined,
                    left:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "70px"
                        : undefined,
                    minWidth: screenWidth >= 1440 ? "431.33px" : undefined,
                    position:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "absolute"
                        : screenWidth >= 1440
                        ? "relative"
                        : undefined,
                    top:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "270px"
                        : undefined,
                    width:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "480px"
                        : undefined,
                  }}
                >
                  <div
                    className="overlap"
                    style={{
                      height:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "233px"
                          : screenWidth >= 1440
                          ? "388px"
                          : undefined,
                      left:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "-4px"
                          : screenWidth >= 1440
                          ? "49px"
                          : undefined,
                      width:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "488px"
                          : screenWidth >= 1440
                          ? "333px"
                          : undefined,
                    }}
                  >
                    <img
                      className="icon-2"
                      style={{
                        height:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "55px"
                            : screenWidth >= 1440
                            ? "60px"
                            : undefined,
                        left:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "216px"
                            : screenWidth >= 1440
                            ? "135px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "55px"
                            : screenWidth >= 1440
                            ? "61px"
                            : undefined,
                      }}
                      alt="Icon"
                      src={
                        screenWidth >= 722 && screenWidth < 1024
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon-4@2x.png"
                          : screenWidth >= 1440
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon-10@2x.png"
                          : undefined
                      }
                    />
                    <img
                      className="image-3"
                      style={{
                        height:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "158px"
                            : screenWidth >= 1440
                            ? "300px"
                            : undefined,
                        left:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "0"
                            : screenWidth >= 1440
                            ? "16px"
                            : undefined,
                        top:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "36px"
                            : screenWidth >= 1440
                            ? "41px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "488px"
                            : screenWidth >= 1440
                            ? "300px"
                            : undefined,
                      }}
                      alt="Image"
                      src={
                        screenWidth >= 722 && screenWidth < 1024
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-7.png"
                          : screenWidth >= 1440
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-16.svg"
                          : undefined
                      }
                    />
                    <p
                      className="text-wrapper-15"
                      style={{
                        fontSize:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "12px"
                            : screenWidth >= 1440
                            ? "20px"
                            : undefined,
                        left:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "4px"
                            : screenWidth >= 1440
                            ? "0"
                            : undefined,
                        textDecoration:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "underline"
                            : undefined,
                        textShadow:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "0px 4px 4px #00000040"
                            : undefined,
                        top:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "185px"
                            : screenWidth >= 1440
                            ? "340px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "480px"
                            : screenWidth >= 1440
                            ? "333px"
                            : undefined,
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
                <div
                  className="feature_block"
                  style={{
                    flex: screenWidth >= 1440 ? "1" : undefined,
                    height:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "246px"
                        : screenWidth >= 1440
                        ? "378px"
                        : undefined,
                    left:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "70px"
                        : undefined,
                    minWidth: screenWidth >= 1440 ? "431.33px" : undefined,
                    position:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "absolute"
                        : screenWidth >= 1440
                        ? "relative"
                        : undefined,
                    top:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "541px"
                        : undefined,
                    width:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "480px"
                        : undefined,
                  }}
                >
                  <div
                    className="overlap-2"
                    style={{
                      height:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "233px"
                          : screenWidth >= 1440
                          ? "388px"
                          : undefined,
                      left:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "-4px"
                          : screenWidth >= 1440
                          ? "66px"
                          : undefined,
                      width:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "488px"
                          : screenWidth >= 1440
                          ? "300px"
                          : undefined,
                    }}
                  >
                    <img
                      className="icon-3"
                      style={{
                        height:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "55px"
                            : screenWidth >= 1440
                            ? "60px"
                            : undefined,
                        left:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "216px"
                            : screenWidth >= 1440
                            ? "119px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "56px"
                            : screenWidth >= 1440
                            ? "61px"
                            : undefined,
                      }}
                      alt="Icon"
                      src={
                        screenWidth >= 722 && screenWidth < 1024
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon@2x.png"
                          : screenWidth >= 1440
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon-11@2x.png"
                          : undefined
                      }
                    />
                    <img
                      className="image-4"
                      style={{
                        height:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "158px"
                            : screenWidth >= 1440
                            ? "300px"
                            : undefined,
                        top:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "36px"
                            : screenWidth >= 1440
                            ? "41px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "488px"
                            : screenWidth >= 1440
                            ? "300px"
                            : undefined,
                      }}
                      alt="Image"
                      src={
                        screenWidth >= 722 && screenWidth < 1024
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-7.png"
                          : screenWidth >= 1440
                          ? "https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-17.png"
                          : undefined
                      }
                    />
                    <p
                      className="text-wrapper-16"
                      style={{
                        fontSize:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "12px"
                            : screenWidth >= 1440
                            ? "20px"
                            : undefined,
                        left:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "4px"
                            : screenWidth >= 1440
                            ? "11px"
                            : undefined,
                        textDecoration:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "underline"
                            : undefined,
                        textShadow:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "0px 4px 4px #00000040"
                            : undefined,
                        top:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "185px"
                            : screenWidth >= 1440
                            ? "340px"
                            : undefined,
                        width:
                          screenWidth >= 722 && screenWidth < 1024
                            ? "480px"
                            : screenWidth >= 1440
                            ? "278px"
                            : undefined,
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="element-px-2"
              style={{
                alignItems:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "flex-start"
                    : screenWidth >= 1440
                    ? "center"
                    : undefined,
                flexDirection:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "column"
                    : undefined,
                gap:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "10px"
                    : screenWidth >= 1440
                    ? "26px"
                    : undefined,
                height:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "800px"
                    : screenWidth >= 1440
                    ? "1024px"
                    : undefined,
                justifyContent: screenWidth >= 1440 ? "center" : undefined,
                left:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "2px"
                    : screenWidth >= 1440
                    ? "0"
                    : undefined,
                padding:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "116px 264px"
                    : undefined,
                top:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "800px"
                    : screenWidth >= 1440
                    ? "3072px"
                    : undefined,
                width:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "722px"
                    : screenWidth >= 1440
                    ? "1440px"
                    : undefined,
              }}
            >
              {screenWidth >= 722 && screenWidth < 1024 && (
                <div className="p-wrapper">
                  <p className="text-wrapper-17">
                    Lorem ipsum dolor sit amet consectetur. Eu ultrices molestie
                    tempus a odio. Nibh nisi massa semper interdum. Aenean
                    elementum mi lacus vitae amet feugiat. Magnis vitae
                    vulputate nunc vestibulum a lacinia rutrum id risus
                  </p>
                </div>
              )}

              {screenWidth >= 1440 && (
                <>
                  <div className="content-2">
                    <div className="text-wrapper-18">Heading</div>
                    <div className="div-wrapper">
                      <div className="learn-more-4">LEARN MORE</div>
                    </div>
                    <div className="flex-container-2">
                      <div className="text-4">
                        <span className="text-wrapper-19">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum
                          aliquam lacus lacinia massa blandit nascetur nullam
                          elit nunc. Integer gravida accumsan rhoncus velit
                          volutpat viverra at eleifend aliquet. Feugiat odio
                          arcu faucibus vestibulum porta sem pellentesque
                          ullamcorper. Dui mauris pellentesque hendrerit
                          adipiscing egestas sit dolor.
                          <br />
                        </span>
                      </div>
                      <div className="text-5">
                        <span className="text-wrapper-20">
                          Vulputate at fermentum cras facilisi varius sagittis
                          habitant nunc. Auctor luctus justo commodo posuere
                          nibh nulla mi duis. Feugiat nunc lectus tellus sem
                          molestie. Ultrices massa vitae adipiscing sit dui amet
                          vel. Tempus varius tellus neque magna sapien dui.
                          Integer nulla maecenas nisl non. Imperdiet amet
                          vestibulum est nisl leo non diam semper.
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-5"
                    alt="Image"
                    src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-18.png"
                  />
                </>
              )}
            </div>
            <div
              className="title-card"
              style={{
                alignItems: screenWidth >= 1440 ? "center" : undefined,
                backgroundColor: screenWidth >= 1440 ? "#ffffff" : undefined,
                display: screenWidth >= 1440 ? "flex" : undefined,
                gap: screenWidth >= 1440 ? "20px" : undefined,
                height:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "742px"
                    : screenWidth >= 1440
                    ? "1024px"
                    : undefined,
                justifyContent: screenWidth >= 1440 ? "center" : undefined,
                top:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "30px"
                    : screenWidth >= 1440
                    ? "4096px"
                    : undefined,
                width:
                  screenWidth >= 722 && screenWidth < 1024
                    ? "724px"
                    : screenWidth >= 1440
                    ? "1440px"
                    : undefined,
              }}
            >
              {screenWidth >= 722 && screenWidth < 1024 && (
                <>
                  <img
                    className="scroll-down-arrow-2"
                    alt="Scroll down arrow"
                    src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/scroll-down-arrow-1@2x.png"
                  />
                  <div className="CT-as-2">
                    <div className="button-2">
                      <div className="learn-more-5">LEARN MORE</div>
                    </div>
                    <div className="button-3">
                      <div className="contact-us-2">CONTACT US</div>
                    </div>
                  </div>
                  <div className="overlap-3">
                    <div className="title-text-2" />
                    <h1 className="text-wrapper-21">
                      Transforming organizations through human centered design.
                    </h1>
                  </div>
                  <header className="header-2">
                    <div className="logo-wrapper">
                      <img
                        className="logo-2"
                        alt="Logo"
                        src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/logo-1@2x.png"
                      />
                    </div>
                    <div className="menu-toggle-wrapper">
                      <div className="menu-toggle-2">
                        <div className="text-wrapper-22">Menu</div>
                        <img
                          className="hamburger-2"
                          alt="Hamburger"
                          src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/hamburger@2x.png"
                        />
                      </div>
                    </div>
                  </header>
                </>
              )}

              {screenWidth >= 1440 && (
                <>
                  <img
                    className="image-6"
                    alt="Image"
                    src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-19.png"
                  />
                  <div className="content-3">
                    <div className="text-wrapper-23">Heading</div>
                    <div className="button-4">
                      <div className="learn-more-6">LEARN MORE</div>
                    </div>
                    <div className="flex-container-3">
                      <div className="text-6">
                        <span className="text-wrapper-24">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum
                          aliquam lacus lacinia massa blandit nascetur nullam
                          elit nunc. Integer gravida accumsan rhoncus velit
                          volutpat viverra at eleifend aliquet. Feugiat odio
                          arcu faucibus vestibulum porta sem pellentesque
                          ullamcorper. Dui mauris pellentesque hendrerit
                          adipiscing egestas sit dolor.
                          <br />
                        </span>
                      </div>
                      <div className="text-7">
                        <span className="text-wrapper-25">
                          Vulputate at fermentum cras facilisi varius sagittis
                          habitant nunc. Auctor luctus justo commodo posuere
                          nibh nulla mi duis. Feugiat nunc lectus tellus sem
                          molestie. Ultrices massa vitae adipiscing sit dui amet
                          vel. Tempus varius tellus neque magna sapien dui.
                          Integer nulla maecenas nisl non. Imperdiet amet
                          vestibulum est nisl leo non diam semper.
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        <div
          className="testimonials"
          style={{
            height:
              screenWidth < 722
                ? "400px"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "49px"
                : screenWidth >= 722 && screenWidth < 1024
                ? "600px"
                : screenWidth >= 1440
                ? "1058px"
                : undefined,
            left:
              screenWidth < 722
                ? "52px"
                : (screenWidth >= 1024 && screenWidth < 1440) ||
                  (screenWidth >= 722 && screenWidth < 1024)
                ? "1px"
                : screenWidth >= 1440
                ? "-3px"
                : undefined,
            top:
              screenWidth < 722
                ? "3383px"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "3617px"
                : screenWidth >= 722 && screenWidth < 1024
                ? "4050px"
                : screenWidth >= 1440
                ? "5120px"
                : undefined,
            width:
              screenWidth < 722
                ? "271px"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "1026px"
                : screenWidth >= 722 && screenWidth < 1024
                ? "724px"
                : screenWidth >= 1440
                ? "1447px"
                : undefined,
          }}
        >
          {((screenWidth >= 1024 && screenWidth < 1440) ||
            screenWidth < 722) && (
            <div
              className="frame-4"
              style={{
                alignItems: screenWidth < 722 ? "flex-start" : undefined,
                display: screenWidth < 722 ? "flex" : undefined,
                flexDirection: screenWidth < 722 ? "column" : undefined,
                height:
                  screenWidth < 722
                    ? "400px"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "49px"
                    : undefined,
                width:
                  screenWidth < 722
                    ? "271px"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "1024px"
                    : undefined,
              }}
            >
              <div
                className="frame-14"
                style={{
                  alignItems: screenWidth < 722 ? "center" : undefined,
                  alignSelf: screenWidth < 722 ? "stretch" : undefined,
                  backgroundColor:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "#ffffff"
                      : undefined,
                  borderRadius:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "0px 0px 25px 25px"
                      : undefined,
                  display: screenWidth < 722 ? "flex" : undefined,
                  flexDirection: screenWidth < 722 ? "column" : undefined,
                  gap: screenWidth < 722 ? "24px" : undefined,
                  height:
                    screenWidth < 722
                      ? "199px"
                      : screenWidth >= 1024 && screenWidth < 1440
                      ? "37px"
                      : undefined,
                  left:
                    screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                  position:
                    screenWidth < 722
                      ? "relative"
                      : screenWidth >= 1024 && screenWidth < 1440
                      ? "absolute"
                      : undefined,
                  top:
                    screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                  width:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "1024px"
                      : undefined,
                }}
              >
                {screenWidth < 722 && (
                  <>
                    <p className="text-wrapper-26">
                      Lorem ipsum dolor sit amet consectetur. Sit in ut diam
                      laoreet. Pellentesque euismod vitae facilisis dui mattis.
                      Scelerisque est purus ultrices hac. Sit ullamcorper velit
                      rhoncus sed dignissim donec habitasse blandit non. Gravida
                      est arcu imperdiet fermentum nunc cursus.
                    </p>
                    <div className="text-wrapper-27">Testimonials</div>
                  </>
                )}
              </div>
              <div
                className="frame-14"
                style={{
                  alignItems: screenWidth < 722 ? "center" : undefined,
                  color:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "#000000"
                      : undefined,
                  display: screenWidth < 722 ? "flex" : undefined,
                  flexDirection: screenWidth < 722 ? "column" : undefined,
                  fontFamily:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "'Mulish', Helvetica"
                      : undefined,
                  fontSize:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "20px"
                      : undefined,
                  fontWeight:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "400"
                      : undefined,
                  gap: screenWidth < 722 ? "2px" : undefined,
                  height: screenWidth < 722 ? "211px" : undefined,
                  justifyContent: screenWidth < 722 ? "center" : undefined,
                  left:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "274px"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                  lineHeight:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "20px"
                      : undefined,
                  marginBottom: screenWidth < 722 ? "-10.00px" : undefined,
                  marginRight: screenWidth < 722 ? "-0.37px" : undefined,
                  position:
                    screenWidth < 722
                      ? "relative"
                      : screenWidth >= 1024 && screenWidth < 1440
                      ? "absolute"
                      : undefined,
                  textAlign:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "center"
                      : undefined,
                  top:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "17px"
                      : undefined,
                  width:
                    screenWidth < 722
                      ? "271px"
                      : screenWidth >= 1024 && screenWidth < 1440
                      ? "475px"
                      : undefined,
                }}
              >
                {screenWidth < 722 && (
                  <>
                    <div className="rectangle-2" />
                    <p className="text-wrapper-28">
                      Lorem ipsum dolor sit amet consectetur. Fermentum est sed
                      euismod tellus diam urna tellus vitae nulla. Pellentesque
                      dolor at tortor ut rutrum mauris turpis a. Ornare tempus
                      quis nunc leo amet vulputate. Turpis etiam non arcu massa
                      eget.
                    </p>
                    <div className="text-wrapper-29">First Name Last Name</div>
                  </>
                )}

                {screenWidth >= 1024 && screenWidth < 1440 && (
                  <>Rios Partners 2023</>
                )}
              </div>
            </div>
          )}

          {(screenWidth >= 1440 ||
            (screenWidth >= 722 && screenWidth < 1024)) && (
            <>
              <div
                className="testimonials-2"
                style={{
                  backgroundColor:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "#2a5096"
                      : undefined,
                  height:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "600px"
                      : screenWidth >= 1440
                      ? "1024px"
                      : undefined,
                  width:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "722px"
                      : screenWidth >= 1440
                      ? "1447px"
                      : undefined,
                }}
              >
                <div
                  className="frame-5"
                  style={{
                    alignItems:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "flex-start"
                        : undefined,
                    backgroundColor:
                      screenWidth >= 1440 ? "#2a5096" : undefined,
                    display:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "flex"
                        : undefined,
                    flexDirection:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "column"
                        : undefined,
                    height:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "432px"
                        : screenWidth >= 1440
                        ? "1024px"
                        : undefined,
                    left:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "101px"
                        : undefined,
                    top:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "112px"
                        : undefined,
                    width:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "521px"
                        : screenWidth >= 1440
                        ? "1443px"
                        : undefined,
                  }}
                >
                  {screenWidth >= 722 && screenWidth < 1024 && (
                    <>
                      <div className="frame-6">
                        <p className="text-wrapper-30">
                          Lorem ipsum dolor sit amet consectetur. Sit in ut diam
                          laoreet. Pellentesque euismod vitae facilisis dui
                          mattis. Scelerisque est purus ultrices hac. Sit
                          ullamcorper velit rhoncus sed dignissim donec
                          habitasse blandit non. Gravida est arcu imperdiet
                          fermentum nunc cursus.
                        </p>
                        <div className="text-wrapper-31">Testimonials</div>
                      </div>
                      <div className="frame-7">
                        <div className="rectangle-3" />
                        <p className="text-wrapper-32">
                          Lorem ipsum dolor sit amet consectetur. Fermentum est
                          sed euismod tellus diam urna tellus vitae nulla.
                          Pellentesque dolor at tortor ut rutrum mauris turpis
                          a. Ornare tempus quis nunc leo amet vulputate. Turpis
                          etiam non arcu massa eget.
                        </p>
                        <div className="text-wrapper-33">
                          First Name Last Name
                        </div>
                      </div>
                    </>
                  )}

                  {screenWidth >= 1440 && (
                    <>
                      <div className="text-wrapper-34">Testimonials</div>
                      <p className="text-wrapper-35">
                        Lorem ipsum dolor sit amet consectetur. Sit in ut diam
                        laoreet. Pellentesque euismod vitae facilisis dui
                        mattis. Scelerisque est purus ultrices hac. Sit
                        ullamcorper velit rhoncus sed dignissim donec habitasse
                        blandit non. Gravida est arcu imperdiet fermentum nunc
                        cursus.
                      </p>
                      <div className="group-wrapper">
                        <div className="group">
                          <p className="text-wrapper-36">
                            Lorem ipsum dolor sit amet consectetur. Fermentum
                            est sed euismod tellus diam urna tellus vitae nulla.
                            Pellentesque dolor at tortor ut rutrum mauris turpis
                            a. Ornare tempus quis nunc leo amet vulputate.
                            Turpis etiam non arcu massa eget.
                          </p>
                          <div className="text-wrapper-37">
                            Frist Name Last Name
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <footer
                className="overlap-wrapper"
                style={{
                  height:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "53px"
                      : screenWidth >= 1440
                      ? "50px"
                      : undefined,
                  left:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "0"
                      : screenWidth >= 1440
                      ? "3px"
                      : undefined,
                  top:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "491px"
                      : screenWidth >= 1440
                      ? "1008px"
                      : undefined,
                  width:
                    screenWidth >= 722 && screenWidth < 1024
                      ? "724px"
                      : screenWidth >= 1440
                      ? "1442px"
                      : undefined,
                }}
              >
                <div
                  className="overlap-4"
                  style={{
                    height:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "53px"
                        : screenWidth >= 1440
                        ? "50px"
                        : undefined,
                    width:
                      screenWidth >= 722 && screenWidth < 1024
                        ? "722px"
                        : screenWidth >= 1440
                        ? "1440px"
                        : undefined,
                  }}
                >
                  <div
                    className="rectangle-4"
                    style={{
                      width:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "722px"
                          : screenWidth >= 1440
                          ? "1440px"
                          : undefined,
                    }}
                  />
                  <div
                    className="text-wrapper-38"
                    style={{
                      left:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "192px"
                          : screenWidth >= 1440
                          ? "601px"
                          : undefined,
                      top:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "21px"
                          : screenWidth >= 1440
                          ? "18px"
                          : undefined,
                      width:
                        screenWidth >= 722 && screenWidth < 1024
                          ? "335px"
                          : screenWidth >= 1440
                          ? "248px"
                          : undefined,
                    }}
                  >
                    Rios Partners 2023
                  </div>
                </div>
              </footer>
            </>
          )}
        </div>
        {screenWidth >= 1024 && screenWidth < 1440 && (
          <>
            <div className="testimonials-wrapper">
              <div className="testimonials-3">
                <div className="frame-8">
                  <div className="frame-9">
                    <p className="text-wrapper-39">
                      Lorem ipsum dolor sit amet consectetur. Sit in ut diam
                      laoreet. Pellentesque euismod vitae facilisis dui mattis.
                      Scelerisque est purus ultrices hac. Sit ullamcorper velit
                      rhoncus sed dignissim donec habitasse blandit non. Gravida
                      est arcu imperdiet fermentum nunc cursus.
                    </p>
                    <div className="text-wrapper-40">Testimonials</div>
                  </div>
                  <div className="frame-10">
                    <div className="rectangle-5" />
                    <p className="text-wrapper-41">
                      Lorem ipsum dolor sit amet consectetur. Fermentum est sed
                      euismod tellus diam urna tellus vitae nulla. Pellentesque
                      dolor at tortor ut rutrum mauris turpis a. Ornare tempus
                      quis nunc leo amet vulputate. Turpis etiam non arcu massa
                      eget.
                    </p>
                    <div className="text-wrapper-42">First Name Last Name</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-2">
              <div className="content-4">
                <div className="overlap-group-4">
                  <h1 className="text-wrapper-43">Heading</h1>
                  <div className="flex-container-4">
                    <div className="text-8">
                      <span className="text-wrapper-44">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum
                        aliquam lacus lacinia massa blandit nascetur nullam elit
                        nunc. Integer gravida accumsan rhoncus velit volutpat
                        viverra at eleifend aliquet. Feugiat odio arcu faucibus
                        vestibulum porta sem pellentesque ullamcorper. Dui
                        mauris pellentesque hendrerit adipiscing egestas sit
                        dolor.
                        <br />
                      </span>
                    </div>
                    <div className="text-9">
                      <span className="text-wrapper-45">
                        Vulputate at fermentum cras facilisi varius sagittis
                        habitant nunc. Auctor luctus justo commodo posuere nibh
                        nulla mi duis. Feugiat nunc lectus tellus sem molestie.
                        Ultrices massa vitae adipiscing sit dui amet vel. Tempus
                        varius tellus neque magna sapien dui. Integer nulla
                        maecenas nisl non. Imperdiet amet vestibulum est nisl
                        leo non diam semper.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="button-5">
                  <div className="learn-more-7">LEARN MORE</div>
                </div>
              </div>
              <img
                className="image-7"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-10.png"
              />
            </div>
            <div className="div-3">
              <img
                className="image-8"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-11.png"
              />
              <div className="content-5">
                <div className="overlap-group-5">
                  <div className="text-wrapper-46">Heading</div>
                  <div className="flex-container-5">
                    <div className="text-10">
                      <span className="text-wrapper-47">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum
                        aliquam lacus lacinia massa blandit nascetur nullam elit
                        nunc. Integer gravida accumsan rhoncus velit volutpat
                        viverra at eleifend aliquet. Feugiat odio arcu faucibus
                        vestibulum porta sem pellentesque ullamcorper. Dui
                        mauris pellentesque hendrerit adipiscing egestas sit
                        dolor.
                        <br />
                      </span>
                    </div>
                    <div className="text-11">
                      <span className="text-wrapper-48">
                        Vulputate at fermentum cras facilisi varius sagittis
                        habitant nunc. Auctor luctus justo commodo posuere nibh
                        nulla mi duis. Feugiat nunc lectus tellus sem molestie.
                        Ultrices massa vitae adipiscing sit dui amet vel. Tempus
                        varius tellus neque magna sapien dui. Integer nulla
                        maecenas nisl non. Imperdiet amet vestibulum est nisl
                        leo non diam semper.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="button-6">
                  <div className="learn-more-8">LEARN MORE</div>
                </div>
              </div>
            </div>
            <div className="features-wrapper">
              <div className="features">
                <div className="feature-block">
                  <div className="overlap-group-6">
                    <img
                      className="icon-4"
                      alt="Icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon-6@2x.png"
                    />
                    <img
                      className="image-9"
                      alt="Image"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-12.svg"
                    />
                    <p className="text-wrapper-49">
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-5">
                    <img
                      className="icon-5"
                      alt="Icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon-7@2x.png"
                    />
                    <img
                      className="image-10"
                      alt="Image"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-13.svg"
                    />
                    <p className="text-wrapper-50">
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
                <div className="feature-block-2">
                  <div className="overlap-6">
                    <img
                      className="icon-6"
                      alt="Icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon-8@2x.png"
                    />
                    <img
                      className="image-11"
                      alt="Image"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-14.png"
                    />
                    <p className="text-wrapper-51">
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-52">
              <div className="text-12">
                <p className="text-wrapper-53">
                  Lorem ipsum dolor sit amet consectetur. Eu ultrices molestie
                  tempus a odio. Nibh nisi massa semper interdum. Aenean
                  elementum mi lacus vitae amet feugiat. Magnis vitae vulputate
                  nunc vestibulum a lacinia rutrum id risus
                </p>
              </div>
            </div>
            <div className="title-card-wrapper">
              <div className="title-card-2">
                <img
                  className="scroll-down-arrow-3"
                  alt="Scroll down arrow"
                  src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/scroll-down-arrow-2@2x.png"
                />
                <div className="CT-as-3">
                  <div className="button-7">
                    <div className="learn-more-9">LEARN MORE</div>
                  </div>
                  <div className="button-8">
                    <div className="contact-us-3">CONTACT US</div>
                  </div>
                </div>
                <div className="overlap-group-7">
                  <div className="title-text-3" />
                  <p className="text-wrapper-54">
                    Transforming organizations through human centered design.
                  </p>
                </div>
                <header className="header-3">
                  <Logo
                    style="white"
                    styleOverride={{
                      backgroundImage:
                        "url(https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/logo-2@2x.png)",
                      height: "65px",
                      minWidth: "190px",
                      position: "relative",
                      width: "unset",
                    }}
                  />
                  <div className="menu-2">
                    <div className="menu-toggle-3">
                      <div className="text-wrapper-55">Menu</div>
                      <img
                        className="hamburger-3"
                        alt="Hamburger"
                        src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/hamburger@2x.png"
                      />
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </>
        )}

        {screenWidth < 722 && (
          <>
            <div className="element-pics">
              <div className="frame-11" />
              <img
                className="image-12"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image.png"
              />
              <div className="content-6">
                <div className="overlap-group-8">
                  <div className="button-9">
                    <div className="learn-more-10">
                      <span className="text-wrapper-56">Learn</span>
                      <span className="text-wrapper-57">&nbsp;</span>
                      <span className="text-wrapper-58">MOre</span>
                    </div>
                  </div>
                  <div className="flex-container-6">
                    <div className="text-13">
                      <span className="text-wrapper-59">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum
                        aliquam lacus lacinia massa blandit nascetur nullam elit
                        nunc. Integer gravida accumsan rhoncus velit volutpat
                        viverra at eleifend aliquet. Feugiat odio arcu faucibus
                        vestibulum porta sem pellentesque ullamcorper. Dui
                        mauris pellentesque hendrerit adipiscing egestas sit
                        dolor.
                        <br />
                      </span>
                    </div>
                    <div className="text-14">
                      <span className="text-wrapper-60">
                        Vulputate at fermentum cras facilisi varius sagittis
                        habitant nunc. Auctor luctus justo commodo posuere nibh
                        nulla mi duis. Feugiat nunc lectus tellus sem molestie.
                        Ultrices massa vitae adipiscing sit dui amet vel. Tempus
                        varius tellus neque magna sapien dui. Integer nulla
                        maecenas nisl non. Imperdiet amet vestibulum est nisl
                        leo non diam semper.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-61">Heading</div>
              </div>
            </div>
            <div className="element-px-pics">
              <div className="frame-12" />
              <img
                className="image-13"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-1.png"
              />
              <div className="content-7">
                <div className="overlap-group-9">
                  <div className="button-10">
                    <div className="learn-more-11">
                      <span className="text-wrapper-62">Learn</span>
                      <span className="text-wrapper-63">&nbsp;</span>
                      <span className="text-wrapper-64">MOre</span>
                    </div>
                  </div>
                  <div className="flex-container-7">
                    <div className="text-15">
                      <span className="text-wrapper-65">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum
                        aliquam lacus lacinia massa blandit nascetur nullam elit
                        nunc. Integer gravida accumsan rhoncus velit volutpat
                        viverra at eleifend aliquet. Feugiat odio arcu faucibus
                        vestibulum porta sem pellentesque ullamcorper. Dui
                        mauris pellentesque hendrerit adipiscing egestas sit
                        dolor.
                        <br />
                      </span>
                    </div>
                    <div className="text-16">
                      <span className="text-wrapper-66">
                        Vulputate at fermentum cras facilisi varius sagittis
                        habitant nunc. Auctor luctus justo commodo posuere nibh
                        nulla mi duis. Feugiat nunc lectus tellus sem molestie.
                        Ultrices massa vitae adipiscing sit dui amet vel. Tempus
                        varius tellus neque magna sapien dui. Integer nulla
                        maecenas nisl non. Imperdiet amet vestibulum est nisl
                        leo non diam semper.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-67">Heading</div>
              </div>
            </div>
            <div className="element-fetures">
              <div className="frame-13">
                <div className="feature-block-3">
                  <div className="overlap-group-10">
                    <img
                      className="icon-7"
                      alt="Icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon@2x.png"
                    />
                    <img
                      className="image-14"
                      alt="Image"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-2.png"
                    />
                    <p className="text-wrapper-68">
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
                <div className="feature-block-4">
                  <div className="overlap-7">
                    <img
                      className="icon-8"
                      alt="Icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon@2x.png"
                    />
                    <img
                      className="image-15"
                      alt="Image"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-2.png"
                    />
                    <p className="text-wrapper-69">
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
                <div className="feature-block-5">
                  <div className="overlap-8">
                    <img
                      className="icon-9"
                      alt="Icon"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/icon@2x.png"
                    />
                    <img
                      className="image-16"
                      alt="Image"
                      src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/image-2.png"
                    />
                    <p className="text-wrapper-70">
                      Lorem ipsum dolor sit amet consectetur. Quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-text-page">
              <p className="text-wrapper-71">
                Lorem ipsum dolor sit amet consectetur. Eu ultrices molestie
                tempus a odio. Nibh nisi massa semper interdum. Aenean elementum
                mi lacus vitae amet feugiat. Magnis vitae vulputate nunc
                vestibulum a lacinia rutrum id risus
              </p>
              <div className="introduction" />
            </div>
            <div className="title-card-3">
              <img
                className="scroll-down-arrow-4"
                alt="Scroll down arrow"
                src="https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/scroll-down-arrow@2x.png"
              />
              <div className="CT-as-4">
                <div className="button-11">
                  <div className="learn-more-12">LEARN MORE</div>
                </div>
                <div className="button-12">
                  <div className="contact-us-4">CONTACT US</div>
                </div>
              </div>
              <h1 className="text-wrapper-72">
                Transforming organizations through human centered design.
              </h1>
              <header className="header-4">
                <Logo
                  style="white"
                  styleOverride={{
                    backgroundImage:
                      "url(https://anima-uploads.s3.amazonaws.com/projects/648ab3dccf9503fd878a4524/releases/648ab3e712ed6e795d38f7db/img/logo@2x.png)",
                    height: "56px",
                    minWidth: "168px",
                    position: "relative",
                    width: "unset",
                  }}
                />
                <div className="">
                  <div className="hamburger-wrapper">
                    <nav role="navigation">
                      <div id="menuToggle">
                        <input type="checkbox" />

                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                          <a href="#">
                            <li>Home</li>
                          </a>
                          <a href="#">
                            <li>About</li>
                          </a>
                          <a href="#">
                            <li>Info</li>
                          </a>
                          <a href="#">
                            <li>Contact</li>
                          </a>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </header>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
