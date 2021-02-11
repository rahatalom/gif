import React, { useState, useEffect } from "react";

function Api() {
  const [text, setText] = useState("Click to copy link");
  const [text1, setText1] = useState("Click to copy link");
  const [text2, setText2] = useState("Click to copy link");
  const [text3, setText3] = useState("Click to copy link");
  const [text4, setText4] = useState("Click to copy link");
  const [text5, setText5] = useState("Click to copy link");
  const [text6, setText6] = useState("Click to copy link");
  const [text7, setText7] = useState("Click to copy link");
  const [text8, setText8] = useState("Click to copy link");
  const [text9, setText9] = useState("Click to copy link");
  const [text10, setText10] = useState("Click to copy link");
  const [text11, setText11] = useState("Click to copy link");

  const [gif, setGif] = useState([]);
  const [gif2, setGif2] = useState([]);
  const [gif3, setGif3] = useState([]);
  const [gif4, setGif4] = useState([]);
  const [gif5, setGif5] = useState([]);
  const [gif6, setGif6] = useState([]);
  const [gif7, setGif7] = useState([]);
  const [gif8, setGif8] = useState([]);
  const [gif9, setGif9] = useState([]);
  const [gif10, setGif10] = useState([]);
  const [gif11, setGif11] = useState([]);
  const [gif12, setGif12] = useState([]);
  const [name, setName] = useState("studio ghibli");
  const handleClick = () => {
    setName(document.getElementById("myGif").value);
    setText("Click to copy link");
    setText1("Click to copy link");
    setText2("Click to copy link");
    setText3("Click to copy link");
    setText4("Click to copy link");
    setText5("Click to copy link");
    setText6("Click to copy link");

    setText7("Click to copy link");
    setText8("Click to copy link");
    setText9("Click to copy link");
    setText10("Click to copy link");
    setText11("Click to copy link");
  };
  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        name +
        "&api_key=U9FMnArLhh8zLmXm8KRKUJAJsEJUCPHf&limit=12&rating=g"
    )
      .then((res) => res.json())
      .then((result) => {
        setGif(result.data[0].images.downsized.url);
        setGif2(result.data[1].images.downsized.url);
        setGif3(result.data[2].images.downsized.url);
        setGif4(result.data[3].images.downsized.url);
        setGif5(result.data[4].images.downsized.url);
        setGif6(result.data[5].images.downsized.url);
        setGif7(result.data[6].images.downsized.url);
        setGif8(result.data[7].images.downsized.url);
        setGif9(result.data[8].images.downsized.url);
        setGif10(result.data[9].images.downsized.url);
        setGif11(result.data[10].images.downsized.url);
        setGif12(result.data[11].images.downsized.url);
      });
  });
  return (
    <div className="main-page">
      <div className="start-outer">
        <div className="start">
          <h1>Gif</h1>
          <div class="container">
            <div class="row searchBoxOuter">
              <div class="col-lg-12 searchBox">
                <input className="search" id="myGif"></input>
                <button className="btn btn-dark  go" onClick={handleClick}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="first">
        <div className="first-inner">
          <div className="img-wrap">
            {" "}
            <img
              id="one"
              onClick={function myClick() {
                setText("Link copied");
                var copyLink = document.getElementById("one").src;
                navigator.clipboard.writeText(copyLink);

                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif}
            ></img>
            <h2
              onClick={function myClick() {
                setText("Link copied");
                var copyLink = document.getElementById("one").src;
                navigator.clipboard.writeText(copyLink);

                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="two"
              onClick={function myClick() {
                setText1("Link copied");
                var copyLink = document.getElementById("two").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");

                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif2}
            ></img>
            <h2
              onClick={function myClick() {
                setText1("Link copied");
                var copyLink = document.getElementById("two").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");

                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text1}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="three"
              onClick={function myClick() {
                setText2("Link copied");
                var copyLink = document.getElementById("three").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");

                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif3}
            ></img>
            <h2
              onClick={function myClick() {
                setText2("Link copied");
                var copyLink = document.getElementById("three").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");

                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text2}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="four"
              onClick={function myClick() {
                setText3("Link copied");
                var copyLink = document.getElementById("four").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");

                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif4}
            ></img>
            <h2
              onClick={function myClick() {
                setText3("Link copied");
                var copyLink = document.getElementById("four").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");

                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text3}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="five"
              onClick={function myClick() {
                setText4("Link copied");
                var copyLink = document.getElementById("five").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");

                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif5}
            ></img>
            <h2
              onClick={function myClick() {
                setText4("Link copied");
                var copyLink = document.getElementById("five").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");

                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text4}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="six"
              onClick={function myClick() {
                setText5("Link copied");
                var copyLink = document.getElementById("six").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");

                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif12}
            ></img>
            <h2
              onClick={function myClick() {
                setText5("Link copied");
                var copyLink = document.getElementById("six").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");

                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text5}
            </h2>
          </div>
        </div>
        <div className="first-inner">
          <div className="img-wrap">
            {" "}
            <img
              id="seven"
              onClick={function myClick() {
                setText6("Link copied");
                var copyLink = document.getElementById("seven").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");

                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif6}
            ></img>
            <h2
              onClick={function myClick() {
                setText6("Link copied");
                var copyLink = document.getElementById("seven").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");

                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text6}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="eight"
              onClick={function myClick() {
                setText7("Link copied");
                var copyLink = document.getElementById("eight").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");

                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif7}
            ></img>
            <h2
              onClick={function myClick() {
                setText7("Link copied");
                var copyLink = document.getElementById("eight").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");

                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text7}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="nine"
              onClick={function myClick() {
                setText8("Link copied");
                var copyLink = document.getElementById("nine").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");

                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif8}
            ></img>
            <h2
              onClick={function myClick() {
                setText8("Link copied");
                var copyLink = document.getElementById("nine").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");

                setText9("Click to copy link");
                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text8}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="ten"
              onClick={function myClick() {
                setText9("Link copied");
                var copyLink = document.getElementById("ten").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");

                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              src={gif9}
            ></img>
            <h2
              onClick={function myClick() {
                setText9("Link copied");
                var copyLink = document.getElementById("ten").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");

                setText10("Click to copy link");
                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text9}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="eleven"
              onClick={function myClick() {
                setText10("Link copied");
                var copyLink = document.getElementById("eleven").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");

                setText11("Click to copy link");
              }}
              src={gif10}
            ></img>
            <h2
              onClick={function myClick() {
                setText10("Link copied");
                var copyLink = document.getElementById("eleven").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");

                setText11("Click to copy link");
              }}
              className="copy"
            >
              {text10}
            </h2>
          </div>
          <div className="img-wrap">
            {" "}
            <img
              id="twelve"
              onClick={function myClick() {
                setText11("Link copied");
                var copyLink = document.getElementById("twelve").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
              }}
              src={gif11}
            ></img>
            <h2
              onClick={function myClick() {
                setText11("Link copied");
                var copyLink = document.getElementById("twelve").src;
                navigator.clipboard.writeText(copyLink);
                setText("Click to copy link");
                setText1("Click to copy link");
                setText2("Click to copy link");
                setText3("Click to copy link");
                setText4("Click to copy link");
                setText5("Click to copy link");
                setText6("Click to copy link");
                setText7("Click to copy link");
                setText8("Click to copy link");
                setText9("Click to copy link");
                setText10("Click to copy link");
              }}
              className="copy"
            >
              {text11}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;
