import React, { Component } from "react";
import { Board } from "../context/BoardContext.jsx";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cross from "../assets/popUpCross.png";

class BoardDetails extends Component {
  render() {
    return (
      <Board.Consumer>
        {(state) => {
          const boards = state.boards;
          let index = boards.findIndex((el) => {
            let board = state.nameToUrl(el.name).toLowerCase();
            // document.body.classList.add("overflow-hidden");
            return this.props.match.params.board === board;
          });
          let prevBoard;
          if (index - 1 >= 0) {
            prevBoard = state.nameToUrl(boards[index - 1].name);
          }
          let nextBoard;
          if (index + 1 < boards.length) {
            nextBoard = state.nameToUrl(boards[index + 1].name);
          }
          return (
            <div className="outer-div bd">
              <div className="inner-div position-relative">
                <div className="placeholderImage text-center">
                  <img src={boards[index].img} alt={boards[index].name} />
                </div>
                <div className="mx-auto text-center d-flex justify-content-center w-100">
                  <div className="d-flex align-items-center">
                    <div className="leftArrow position-absolute">
                      {prevBoard ? (
                        <Link to={`/board_of_directors/${prevBoard}`}>
                          <IoIosArrowBack
                            className="arrows back-arrow black-text"
                            fontSize="2.5rem"
                            color="#42bb52"
                          />
                        </Link>
                      ) : (
                        ``
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <h5 className="mb-0">{boards[index].name}</h5>
                      <p className="mb-0 small">{boards[index].role}</p>
                    </div>
                    <div className="rightArrow position-absolute">
                      {nextBoard ? (
                        <Link to={`/board_of_directors/${nextBoard}`}>
                          <IoIosArrowForward
                            className="arrows next-arrow black-text"
                            fontSize="2.5rem"
                            color="#42bb52"
                          />
                        </Link>
                      ) : (
                        ``
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4 small">
                  <p>
                    Mr. Hiren Patel joined Nirma Limited in 1998 as Director and
                    took over as its Managing Director in 2006. He has
                    spearheaded the growth of the privately held Nirma Group
                    from being primarily in the Consumer Goods business to
                    becoming a diversified conglomerate encompassing Consumer
                    Goods, Chemicals, Cement, Real Estate and Healthcare.
                  </p>
                  <p>
                    With his rich and varied experience, Mr. Patel has also led
                    all the inorganic growth opportunities of the Group since
                    2005; when the Group made its first acquisition. At Nuvoco,
                    he plays the role of mentor to the executive management.
                  </p>
                  <p>
                    Mr. Patel is an active philanthropist with a history of
                    supporting education; among other things. He is a member of
                    the Managing Committee of Nirma Education & Research
                    Foundation, which runs the Nirma University with over 8,000
                    students across various disciplines, and Nirma Vidyavihar
                    (K-12 schools).
                  </p>
                  <p>
                    Mr. Patel has completed his Bachelor’s degree in Chemical
                    Engineering and M.B.A with specialization in Finance &
                    Marketing from USA.
                  </p>
                </div>

                <div className="crossIcon position-absolute">
                  <Link to="/board_of_directors">
                    <img src={cross} alt="cross" />
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </Board.Consumer>
    );
  }
}

export default BoardDetails;
