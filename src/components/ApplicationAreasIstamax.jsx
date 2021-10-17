import React from "react";

// IMPORTING IMAGES
import area1 from "../assets/istamaxI1.png";
import area2 from "../assets/istamaxI2.png";
import area3 from "../assets/istamaxI3.png";
import area4 from "../assets/istamaxI4.png";
import Direction from "./Direction";

const ApplicationAreasIstamax = () => {
  return (
    <div className="page_container">
      <div className="container-fluid">
        <div data-aos="zoom-in" data-aos-offset="800" data-aos-delay="400">
          <Direction title="areas of application" />
        </div>
        <h6
          data-aos="fade-up"
          data-aos-offset="800"
          data-aos-delay="1000"
          className="text-center mt-2"
        >
          For interior and exterior masonry walls use for preparing thin bed
          adhesive for:
        </h6>
        <div className="row mt-4">
          <div className="col-12 col-sm-10 col-lg-8 mx-auto">
            <div className="row">
              <div
                data-aos="zoom-in-right"
                data-aos-offset="800"
                data-aos-delay="1000"
                className="aresCard col-3 text-center mt-4"
              >
                <img width="35%" src={area1} alt="" />
                <h6 className="mt-3">AAC Blocks</h6>
              </div>
              <div
                data-aos="zoom-in-down"
                data-aos-offset="800"
                data-aos-delay="1000"
                className="aresCard col-3 text-center mt-4"
              >
                <img width="37%" src={area2} alt="" />
                <h6 className="mt-3">Bricks</h6>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-offset="800"
                data-aos-delay="1000"
                className="aresCard col-3 text-center mt-4"
              >
                <img width="38%" src={area3} alt="" />
                <h6 className="mt-3">Concrete Blocks (Solid & Hollow)</h6>
              </div>
              <div
                data-aos="zoom-in-right"
                data-aos-offset="800"
                data-aos-delay="1000"
                className="aresCard col-3 text-center mt-4"
              >
                <img width="43%" src={area4} alt="" />
                <h6 className="mt-3">SuitableSubstrates</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationAreasIstamax;
