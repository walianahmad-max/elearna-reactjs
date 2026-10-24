import {
  SiteLink,
  Interactive,
  CartButton,
  CartCount,
  AuthButton,
  SiteForm,
} from "../components/Interactions";
import { Checkout } from "../components/Commerce";
import { CourseCard } from "../components/CourseCard";
import courseCards from "../data/course-cards.json";

export default function Page() {
  return (
    <>
      <Interactive
        data-motion-id={"fb4ef407-053b-0874-9f5b-4f7137e3f433"}
        data-animation={"default"}
        data-collapse={"medium"}
        data-duration={"400"}
        data-easing={"ease"}
        data-easing2={"ease"}
        role={"banner"}
        className={"navbar w-nav"}
        as={"div"}
      >
        <div className={"navbar-container w-container"}>
          <div className={"navbar-wrapper"}>
            <SiteLink href={"/home-one"} className={"no-padding w-nav-brand"}>
              <img
                src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                loading={"lazy"}
                width={"105"}
                height={"26"}
                alt={"Elearna"}
                className={"elerna"}
              />
            </SiteLink>
            <Interactive
              role={"navigation"}
              id={"w-node-_17d46984-7cba-edd4-a6dd-52a6d0365ce8-37e3f433"}
              className={"nav-menu w-nav-menu"}
              as={"nav"}
            >
              <Interactive
                data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365ce9"}
                data-hover={"true"}
                data-delay={"0"}
                className={"dropdown w-dropdown"}
                as={"div"}
              >
                <Interactive
                  className={"dropdown-toggle w-dropdown-toggle"}
                  as={"div"}
                >
                  <div>{"Home"}</div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive
                  className={"dropdown-list w-dropdown-list"}
                  as={"nav"}
                >
                  <SiteLink
                    href={"/home-one"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Home One"}
                  </SiteLink>
                  <SiteLink
                    href={"/home-two"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Home Two"}
                  </SiteLink>
                  <SiteLink
                    href={"/home-three"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Home Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive
                data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365cf5"}
                data-hover={"true"}
                data-delay={"0"}
                className={"dropdown w-dropdown"}
                as={"div"}
              >
                <Interactive
                  className={"dropdown-toggle w-dropdown-toggle"}
                  as={"div"}
                >
                  <div>{"Courses"}</div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive
                  className={"dropdown-list w-dropdown-list"}
                  as={"nav"}
                >
                  <Interactive
                    data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365cfb"}
                    data-hover={"true"}
                    data-delay={"0"}
                    className={"sub-dropdown w-dropdown"}
                    as={"div"}
                  >
                    <Interactive
                      className={"sub-dropdown-toggle w-dropdown-toggle"}
                      as={"div"}
                    >
                      <div>{"Free"}</div>
                      <div
                        className={"dropdown-icon w-icon-dropdown-toggle"}
                      ></div>
                    </Interactive>
                    <Interactive
                      className={"menu-sublist w-dropdown-list"}
                      as={"nav"}
                    >
                      <SiteLink
                        href={
                          "/understanding-corporate-finance-and-investments/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Corporate Finance And Investments"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/advanced-photoshop-techniques-for-designers/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Advanced Photoshop Techniques"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/crisis-management-and-problem-solving-strategies/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Crisis Management"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/building-single-page-applications-with-angular/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Single Page Applications With Angular"}
                      </SiteLink>
                    </Interactive>
                  </Interactive>
                  <Interactive
                    data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365d07"}
                    data-hover={"true"}
                    data-delay={"0"}
                    className={"sub-dropdown w-dropdown"}
                    as={"div"}
                  >
                    <Interactive
                      className={"sub-dropdown-toggle w-dropdown-toggle"}
                      as={"div"}
                    >
                      <div>{"Paid"}</div>
                      <div
                        className={"dropdown-icon w-icon-dropdown-toggle"}
                      ></div>
                    </Interactive>
                    <Interactive
                      className={"menu-sublist sub-menu-bottom w-dropdown-list"}
                      as={"nav"}
                    >
                      <SiteLink
                        href={
                          "/the-complete-guide-to-personal-and-business-finance/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Personal And Business Finance"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/operations-management-and-process-improvement/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Management And Process Improvement"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/learn-interactive-web-design-by-building-real-projects/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Interactive Web Design"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/design-systems-and-pattern-libraries/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Design Systems And Pattern Libraries"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/grow-your-brand-and-reach-your-audience/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Grow Your Brand And Reach Your Audience"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/risk-management-and-business-continuity/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Risk Management"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/database-integration-with-mongodb/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Database Integration With MongoDB"}
                      </SiteLink>
                      <SiteLink
                        href={
                          "/full-stack-development-with-the-mern-stack/course-details"
                        }
                        className={"dropdown-link w-dropdown-link"}
                      >
                        {"Full-Stack Development with MERN Stack"}
                      </SiteLink>
                    </Interactive>
                  </Interactive>
                </Interactive>
              </Interactive>
              <Interactive
                data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365d25"}
                data-hover={"true"}
                data-delay={"0"}
                className={"dropdown w-dropdown"}
                as={"div"}
              >
                <Interactive
                  className={"dropdown-toggle w-dropdown-toggle"}
                  as={"div"}
                >
                  <div>{"Pages"}</div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive
                  className={"dropdown-list w-dropdown-list"}
                  as={"nav"}
                >
                  <SiteLink
                    href={"/about-one"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"About One"}
                  </SiteLink>
                  <SiteLink
                    href={"/about-two"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"About Two"}
                  </SiteLink>
                  <SiteLink
                    href={"/course-one"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Course One"}
                  </SiteLink>
                  <SiteLink
                    href={"/course-two"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Course Two"}
                  </SiteLink>
                  <SiteLink
                    href={"/course-three"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Course Three"}
                  </SiteLink>
                  <SiteLink
                    href={"/faq"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"FAQ"}
                  </SiteLink>
                  <SiteLink
                    href={"/pricing-one"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Pricing One"}
                  </SiteLink>
                  <SiteLink
                    href={"/pricing-two"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Pricing Two"}
                  </SiteLink>
                  <SiteLink
                    href={"/pricing-three"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Pricing Three"}
                  </SiteLink>
                  <SiteLink
                    href={"/career"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Career"}
                  </SiteLink>
                  <SiteLink
                    href={"/events"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Events"}
                  </SiteLink>
                  <SiteLink
                    href={"/team"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Team"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive
                data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365d41"}
                data-hover={"true"}
                data-delay={"0"}
                className={"dropdown w-dropdown"}
                as={"div"}
              >
                <Interactive
                  className={"dropdown-toggle w-dropdown-toggle"}
                  as={"div"}
                >
                  <div>{"Blog"}</div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive
                  className={"dropdown-list w-dropdown-list"}
                  as={"nav"}
                >
                  <SiteLink
                    href={"/blog-one"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Blog One"}
                  </SiteLink>
                  <SiteLink
                    href={"/blog-two"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Blog Two"}
                  </SiteLink>
                  <SiteLink
                    href={"/blog-three"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Blog Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive
                data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365d4d"}
                data-hover={"true"}
                data-delay={"0"}
                className={"dropdown w-dropdown"}
                as={"div"}
              >
                <Interactive
                  className={"dropdown-toggle w-dropdown-toggle"}
                  as={"div"}
                >
                  <div>{"Contact"}</div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive
                  className={"dropdown-list w-dropdown-list"}
                  as={"nav"}
                >
                  <SiteLink
                    href={"/contact-one"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Contact One"}
                  </SiteLink>
                  <SiteLink
                    href={"/contact-two"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Contact Two"}
                  </SiteLink>
                  <SiteLink
                    href={"/contact-three"}
                    className={"dropdown-link w-dropdown-link"}
                  >
                    {"Contact Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
            </Interactive>
            <div className={"w-layout-hflex navbar-right"}>
              <div className={"w-commerce-commercecartwrapper cart"}>
                <CartButton
                  className={
                    "w-commerce-commercecartopenlink cart-button w-inline-block"
                  }
                  role={"button"}
                  aria-haspopup={"dialog"}
                  aria-label={"Open cart"}
                >
                  <img
                    src={"/assets/6dc206a4-66c6fb8ba5e099697cc76c17_Cart.svg"}
                    loading={"lazy"}
                    width={"18"}
                    height={"23"}
                    alt={"Icon"}
                    className={"cart-icon"}
                  />
                  <CartCount
                    className={
                      "w-commerce-commercecartopenlinkcount cart-quantity"
                    }
                  >
                    {"0"}
                  </CartCount>
                </CartButton>
              </div>
              <div className={"w-layout-hflex log-in-wrapper"}>
                <AuthButton className={"user-log-in-log-out"} type={"button"}>
                  {"Logout"}
                </AuthButton>
                <div className={"menu-border"}></div>
                <SiteLink href={"/sign-up"} className={"menu-font text-white"}>
                  {"Register"}
                </SiteLink>
              </div>
            </div>
            <Interactive className={"menu-button w-nav-button"} as={"div"}>
              <div className={"menu-bars"}>
                <div className={"bar menu-bar-one"}></div>
                <div className={"bar menu-bar-two"}></div>
              </div>
            </Interactive>
          </div>
        </div>
      </Interactive>
      <section className={"course-one-hero"}>
        <div
          className={
            "w-layout-blockcontainer course-one-hero-container w-container"
          }
        >
          <div className={"w-layout-vflex course-one-hero-wrap"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"START WITH"}
            </div>
            <h1
              data-motion-id={"57f61ac4-72cd-9903-1434-8dd71538d176"}
              className={"heading-one-top-gap text-white"}
            >
              {"Professional online courses"}
            </h1>
          </div>
        </div>
      </section>
      <section className={"course-one-category"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div
            data-motion-id={"a5d74e64-e427-df73-3a8c-6ec45317d4dd"}
            className={"course-one-category-main"}
          >
            <SiteLink
              href={"/category/design"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/828c1caa-66c6fb8b9d9bcd0e5de94637_Category-Icons.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Web design and creative"}
              </div>
              <div>{"8 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/finance"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/55295ffb-66c6fb8b98a2dc7066c693d3_Category-Icons-2.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Finance and accounting"}
              </div>
              <div>{"4 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/development"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/a5b15863-66c6fb8b2ae1000d4215a423_Category-Icons-3.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"IT and software"}
              </div>
              <div>{"5 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/management"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/3f28a8bd-66c6fb94416128e5b4e355b0_Category-Icons-4.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Digital marketing"}
              </div>
              <div>{"4 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/development"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/7ea95918-66c6fb8b035ebd8829061041_Category-Icons-5.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Web development"}
              </div>
              <div>{"8 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/design"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/d9d1328d-66c6fb8bf82fe9cef5f78d2f_Category-Icons-6.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Content and language"}
              </div>
              <div>{"3 Courses"}</div>
            </SiteLink>
          </div>
        </div>
      </section>
      <section className={"course-one-store"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Online learning"}
            </div>
            <h2
              data-motion-id={"c0a12dcd-8b71-264d-a95e-c4b1287fc15a"}
              className={"heading-two-gap-top course-one-store-heading"}
            >
              {"Popular courses"}
            </h2>
            <Interactive
              data-current={"Tab 1"}
              data-easing={"ease"}
              data-duration-in={"300"}
              data-duration-out={"100"}
              className={"courses-pagination w-tabs"}
              as={"div"}
            >
              <div className={"courses-tab-content w-tab-content"}>
                <Interactive
                  data-w-tab={"Tab 1"}
                  className={"w-tab-pane w--tab-active"}
                  as={"div"}
                >
                  <div className={"courses-cards-wrapper"}>
                    <div
                      data-motion-id={"2f77f5d0-9b04-44b0-4df3-8946da1f016c"}
                      className={"w-dyn-list"}
                    >
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"2f77f5d0-9b04-44b0-4df3-8946da1f016f"}
                            course={
                              courseCards[
                                "understanding-corporate-finance-and-investments"
                              ]
                            }
                            priceLabel={"Free"}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-motion-id={"9a91a829-911a-ac97-314a-fdd4e1838fdd"}
                      className={"w-dyn-list"}
                    >
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"9a91a829-911a-ac97-314a-fdd4e1838fe0"}
                            course={
                              courseCards[
                                "advanced-photoshop-techniques-for-designers"
                              ]
                            }
                            priceLabel={"Free"}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-motion-id={"29d78860-2de6-728a-00bc-b3c7ced7484e"}
                      className={"w-dyn-list"}
                    >
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"29d78860-2de6-728a-00bc-b3c7ced74851"}
                            course={
                              courseCards[
                                "crisis-management-and-problem-solving-strategies"
                              ]
                            }
                            priceLabel={"Free"}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-motion-id={"4a8d4487-4c92-4fff-9f15-597eebf4ce19"}
                      className={"w-dyn-list"}
                    >
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"4a8d4487-4c92-4fff-9f15-597eebf4ce1c"}
                            course={
                              courseCards[
                                "building-single-page-applications-with-angular"
                              ]
                            }
                            priceLabel={"Free"}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-motion-id={"4a8d4487-4c92-4fff-9f15-597eebf4ce3f"}
                      className={"w-dyn-list"}
                    >
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"4a8d4487-4c92-4fff-9f15-597eebf4ce42"}
                            course={
                              courseCards["database-integration-with-mongodb"]
                            }
                            priceLabel={"$59"}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-motion-id={"4a8d4487-4c92-4fff-9f15-597eebf4ceb2"}
                      className={"w-dyn-list"}
                    >
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"4a8d4487-4c92-4fff-9f15-597eebf4ceb5"}
                            course={
                              courseCards[
                                "full-stack-development-with-the-mern-stack"
                              ]
                            }
                            priceLabel={"$72"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 2"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div className={"courses-cards-wrapper"}>
                    <div className={"w-dyn-list"}>
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"9377f9fd-4c9a-91a7-824f-d8fd58df7b1e"}
                            course={
                              courseCards[
                                "the-complete-guide-to-personal-and-business-finance"
                              ]
                            }
                            priceLabel={"$99"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"0af4b20a-6a3a-f1f0-7ca5-ecb371c1dd18"}
                            course={
                              courseCards[
                                "learn-interactive-web-design-by-building-real-projects"
                              ]
                            }
                            priceLabel={"$79"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"e5c708cb-17cb-22e2-1edf-a7d3a785126a"}
                            course={
                              courseCards[
                                "grow-your-brand-and-reach-your-audience"
                              ]
                            }
                            priceLabel={"$49"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"4a8d4487-4c92-4fff-9f15-597eebf4cedb"}
                            course={
                              courseCards[
                                "design-systems-and-pattern-libraries"
                              ]
                            }
                            priceLabel={"$99"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"4a8d4487-4c92-4fff-9f15-597eebf4ce68"}
                            course={
                              courseCards[
                                "operations-management-and-process-improvement"
                              ]
                            }
                            priceLabel={"Free"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div role={"list"} className={"w-dyn-items"}>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <CourseCard
                            motionId={"4a8d4487-4c92-4fff-9f15-597eebf4ce8f"}
                            course={
                              courseCards[
                                "risk-management-and-business-continuity"
                              ]
                            }
                            priceLabel={"$49"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Interactive>
              </div>
              <Interactive
                className={"courses-pagination-menu w-tab-menu"}
                as={"div"}
              >
                <Interactive
                  data-w-tab={"Tab 1"}
                  className={"tab-nav-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{" 1"}</div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 2"}
                  className={"tab-nav-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{"2"}</div>
                </Interactive>
              </Interactive>
            </Interactive>
          </div>
        </div>
      </section>
      <section className={"cta-one"}>
        <div
          data-motion-id={"81a5b998-ae84-46ef-f7bf-03f332838459"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-hflex cta-main"}>
            <div className={"heading-three cta-heading"}>
              {"Are you ready to start your journey?"}
            </div>
            <div className={"w-layout-hflex cta-button-wrapper"}>
              <SiteLink
                href={"/course-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Browse courses"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"39baf460-15b3-a13b-7a0d-2a8c4923e136"}
                href={"/career"}
                className={"button black-border-button w-inline-block"}
              >
                <div>{"Became a teacher"}</div>
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <footer className={"footer-one"}>
        <div
          data-motion-id={"ecc05ebb-d048-2496-f7e4-abeb03dcdcf9"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-hflex footer-one-main"}>
            <div
              id={"w-node-ecc05ebb-d048-2496-f7e4-abeb03dcdcfb-03dcdcf8"}
              className={"w-layout-vflex footer-links-wrap"}
            >
              <SiteLink href={"/home-one"} className={"w-inline-block"}>
                <img
                  src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                  loading={"lazy"}
                  width={"105"}
                  height={"26"}
                  alt={"Elearna"}
                  className={"elerna"}
                />
              </SiteLink>
              <p className={"no-margin-bottom"}>
                {
                  "Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras."
                }
              </p>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-two"}>
              <div className={"heading-five text-white"}>{"Quick links"}</div>
              <div className={"w-layout-vflex links-wrap"}>
                <SiteLink href={"/home-one"} className={"footer-link-hover"}>
                  {"Home"}
                </SiteLink>
                <SiteLink href={"/events"} className={"footer-link-hover"}>
                  {"Events"}
                </SiteLink>
                <SiteLink href={"/career"} className={"footer-link-hover"}>
                  {"Career"}
                </SiteLink>
                <SiteLink href={"/team"} className={"footer-link-hover"}>
                  {"Instructor"}
                </SiteLink>
              </div>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-two"}>
              <div className={"heading-five text-white"}>
                {"Popular courses"}
              </div>
              <div className={"w-layout-vflex links-wrap"}>
                <SiteLink
                  href={"/category/finance"}
                  className={"footer-link-hover"}
                >
                  {"Finance"}
                </SiteLink>
                <SiteLink
                  href={"/category/management"}
                  className={"footer-link-hover"}
                >
                  {"Management"}
                </SiteLink>
                <SiteLink
                  href={"/category/design"}
                  className={"footer-link-hover"}
                >
                  {"Design"}
                </SiteLink>
                <SiteLink
                  href={"/category/development"}
                  className={"footer-link-hover"}
                >
                  {"Web development"}
                </SiteLink>
              </div>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-two"}>
              <div className={"heading-five text-white"}>{"Company"}</div>
              <div className={"w-layout-vflex links-wrap"}>
                <SiteLink href={"/about-one"} className={"footer-link-hover"}>
                  {"About"}
                </SiteLink>
                <SiteLink href={"/course-two"} className={"footer-link-hover"}>
                  {"Courses"}
                </SiteLink>
                <SiteLink href={"/blog-one"} className={"footer-link-hover"}>
                  {"Blog"}
                </SiteLink>
                <SiteLink href={"/contact-one"} className={"footer-link-hover"}>
                  {"Contact"}
                </SiteLink>
                <SiteLink
                  href={"/information/license"}
                  className={"footer-link-hover"}
                >
                  {"License"}
                </SiteLink>
                <SiteLink href={"/pricing-one"} className={"footer-link-hover"}>
                  {"Pricing"}
                </SiteLink>
                <SiteLink href={"/404"} className={"footer-link-hover"}>
                  {"404"}
                </SiteLink>
              </div>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-two"}>
              <div className={"heading-five text-white"}>{"CMS"}</div>
              <div className={"w-layout-vflex links-wrap"}>
                <SiteLink
                  href={
                    "/grow-your-brand-and-reach-your-audience/course-details"
                  }
                  className={"footer-link-hover"}
                >
                  {"Course details"}
                </SiteLink>
                <SiteLink
                  href={"/team-members/lee-schmitt"}
                  className={"footer-link-hover"}
                >
                  {"Instructor details"}
                </SiteLink>
                <SiteLink
                  href={
                    "/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century"
                  }
                  className={"footer-link-hover"}
                >
                  {"Blog details"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
        <div
          data-motion-id={"ecc05ebb-d048-2496-f7e4-abeb03dcdd3c"}
          className={"w-layout-blockcontainer footer-container w-container"}
        >
          <div className={"border-one"}></div>
          <div className={"w-layout-hflex footer-bottom-main"}>
            <div className={"footer-bottom-text"}>
              {"Design by "}
              <SiteLink
                href={"http://radianttemplates.com/"}
                target={"_blank"}
                className={"footer-bottom-link"}
              >
                {"Radiant Templates"}
              </SiteLink>
            </div>
            <div className={"footer-bottom-text"}>
              {"Powered by "}
              <SiteLink
                href={"https://webflow.com/?r=0"}
                target={"_blank"}
                className={"footer-bottom-link"}
              >
                {"Webflow"}
              </SiteLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
