import React from "react";
import { SiteLink } from "./Interactions";
/** Shared, data-driven course tile, used across home, listing and category pages. */
export function CourseCard({ course, priceLabel, motionId }) {
  if (!course) return null;
  const free = (priceLabel || course.priceLabel) === "Free";
  return (
    <article
      data-motion-id={motionId}
      className="courser-card-one group h-full"
    >
      <SiteLink
        href={course.detailPath}
        className="course-card-image-wrapper w-inline-block"
      >
        <img
          className="course-card-image"
          src={course.image}
          srcSet={course.srcSet}
          sizes="(max-width: 479px) 100vw, 410px"
          width="410"
          height="254"
          alt={course.title}
          loading="lazy"
        />
      </SiteLink>
      <div className="w-layout-vflex course-content">
        <div className="small-shot-heading margin-bottom-twenty">
          {course.category}
        </div>
        <div className="heading-four course-heading">{course.title}</div>
        <div className="w-layout-hflex course-rating">
          <img
            width="79"
            height="19"
            alt=""
            src={course.ratingIcon}
            loading="lazy"
          />
          <div className="small-shot-heading small-heading-body-color">
            {course.rating}
          </div>
        </div>
        <div className="cards-wrap">
          <div className="course-cards-button-wrapper course-cards-information">
            <div className="cards-button-left">
              <div className="w-layout-hflex course-information">
                <img
                  width="16"
                  height="16"
                  alt=""
                  src={course.lessonIcon}
                  loading="lazy"
                />
                <div className="menu-font text-dark">{course.lessons}</div>
              </div>
            </div>
            <div className="cards-button-right">
              <div className="w-layout-hflex course-information align-right">
                <img
                  width="12"
                  height="14"
                  alt=""
                  src={course.personIcon}
                  loading="lazy"
                />
                <div className="menu-font text-dark">{course.enrolled}</div>
              </div>
            </div>
          </div>
          <div
            className={
              "course-cards-button-wrapper course-cards-button" +
              (free ? " free-card" : "")
            }
          >
            <div
              className={
                "cards-button-left cousers-button-wrapper-border" +
                (free ? " border-off" : "")
              }
            >
              <div className="buttons-hover-show">
                <SiteLink
                  href={course.detailPath}
                  className="button button-yellow course-button w-inline-block"
                >
                  <div>Course Details</div>
                </SiteLink>
              </div>
            </div>
            {!free && (
              <div className="cards-button-right">
                <SiteLink
                  href={course.productPath}
                  className="button button-yellow course-button w-inline-block"
                >
                  <div>Enroll</div>
                </SiteLink>
              </div>
            )}
          </div>
        </div>
        <div className="course-price-wrapper">
          <div>{priceLabel || course.priceLabel}</div>
        </div>
      </div>
    </article>
  );
}
