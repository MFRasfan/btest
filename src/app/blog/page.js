import React, { Fragment } from "react";
import LayoutOne from "@/components/layouts";
import Breadcrumb from "@/components/UI/breadcrumb";
import BlogFeatured from "@/containers/blog/blog-featured";
import BlogSidebar from "@/containers/blog/blog-sidebar";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'With Besanz, you can enjoy the benefits of a smart business phone system without the hassle of installation, maintenance or contracts. ',
}

const Blog = () => {
  return (
    <Fragment>
      <LayoutOne>

        {/* breadcrumb */}
        <Breadcrumb title="Blog" />

        <div className="blog__details__area pt--120 pb--110 bg--white">
          <div className="container">
            <div className="row">

              <div className="col-12 col-lg-9 col-xl-8">
                <BlogFeatured />
              </div>

              <div className="col-12 col-lg-3 col-xl-3">
                <BlogSidebar />
              </div>

            </div>
          </div>
        </div>
        

      </LayoutOne>
    </Fragment>
  );
};

export default Blog;
