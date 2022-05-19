import React from "react";
import { useHistory } from "react-router-dom";
import { imgUrl } from "../redux/config";

const BlogListC = ({ data }) => {
  let history = useHistory();

  return (
    <div className="page_container mb-5 mt-3 mt-md-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 col-md-12 mx-auto">
            <div className="row">
              {data
                .map((prev, i) => {
                  const {
                    banner_img,
                    banner_img_alt,
                    banner_img_title,
                    blog_title,
                    meta_description,
                    page_url,
                  } = prev;
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={`${
                        (i === 0 && 1000) ||
                        (i === 1 && 1100) ||
                        (i === 2 && 1200) ||
                        i * 100
                      }`}
                      data-aos-duration="400"
                      data-aos-offset="600"
                      key={i}
                      className="col-12 col-md-6 col-lg-4 mt-5 mt-md-4"
                    >
                      <div className="blogListCard">
                        <img
                          className="w-100 rounded-3"
                          src={imgUrl + banner_img}
                          alt={banner_img_alt}
                          title={banner_img_title}
                        />
                        <div className="my-3 px-3">
                          <h6
                            dangerouslySetInnerHTML={{ __html: blog_title }}
                            className="fw-bold themeColorG text-uppercase"
                          ></h6>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: meta_description,
                            }}
                            className="small"
                          ></div>
                          <button
                            onClick={() => {
                              history.push(`/blog/${page_url}`);
                              window.scrollTo(0, 0);
                            }}
                            className="text-uppercase greenBtn px-4 py-1 mt-2 text-white"
                          >
                            know more
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
                .reverse()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListC;
