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
      <section className={"faq-hero"}>
        <div className={"w-layout-blockcontainer w-container"}>
          <div className={"w-layout-vflex faq-hero-main"}>
            <h1
              data-motion-id={"d6b619c1-8a2f-27b4-5289-d8022226bd53"}
              className={"no-margin text-white"}
            >
              {"Frequently asked questions"}
            </h1>
            <p
              data-motion-id={"a41afff5-9b27-e690-e61b-7352a29759a7"}
              className={"no-margin-bottom text-light-white"}
            >
              {
                "Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id"
              }
            </p>
          </div>
        </div>
      </section>
      <section className={"faq-section"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div>
            <Interactive
              data-current={"Tab 1"}
              data-easing={"ease"}
              data-duration-in={"300"}
              data-duration-out={"100"}
              className={"faq-tab w-tabs"}
              as={"div"}
            >
              <Interactive className={"faq-tab-menu w-tab-menu"} as={"div"}>
                <Interactive
                  data-motion-id={"6c91ee22-9d38-0fd2-6b50-368483928e22"}
                  data-w-tab={"Tab 1"}
                  className={"tab-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{"Enrollment and registration"}</div>
                </Interactive>
                <Interactive
                  data-motion-id={"6c91ee22-9d38-0fd2-6b50-368483928e25"}
                  data-w-tab={"Tab 2"}
                  className={"tab-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{"Technical requirements"}</div>
                </Interactive>
                <Interactive
                  data-motion-id={"33337cb0-7a18-db45-efa7-e8f31c182870"}
                  data-w-tab={"Tab 3"}
                  className={"tab-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{"Assessments and grading"}</div>
                </Interactive>
                <Interactive
                  data-motion-id={"a90399b4-9eb5-a721-2a2e-0d89dd0fc426"}
                  data-w-tab={"Tab 4"}
                  className={"tab-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{"Communication and support"}</div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 5"}
                  className={"tab-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{"Certificates and degrees"}</div>
                </Interactive>
              </Interactive>
              <div
                data-motion-id={"6c91ee22-9d38-0fd2-6b50-368483928e28"}
                className={"faq-tab-content w-tab-content"}
              >
                <Interactive
                  data-w-tab={"Tab 1"}
                  className={"w-tab-pane w--tab-active"}
                  as={"div"}
                >
                  <div className={"faq-box-main"}>
                    <Interactive
                      data-motion-id={"5b3cc1a5-6df0-4e93-9fde-d1643134a85b"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"How do I enroll in an online course?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"eb67495d-3897-ce6a-b22b-6078728b460e"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"What are the benefits of online learning?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"ad783e6f-ecfe-39e8-dc5c-2fa39f3b0524"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {
                            "Are there any prerequisites for enrolling in online courses?"
                          }
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"a4f8e855-3fcd-6d48-2fb1-b22140239850"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"What should I do if I forget my password?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"b9961da7-ff68-4f84-efd1-8fe9537a32c3"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"Can I enroll in multiple courses at once?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 2"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div className={"faq-box-main"}>
                    <Interactive
                      data-motion-id={"536906da-854b-92e3-1d8b-8a1e54d87eef"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"What kind of internet connection do I need?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"536906da-854b-92e3-1d8b-8a1e54d87ef7"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"Can I use the learning website offline?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"536906da-854b-92e3-1d8b-8a1e54d87eff"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"How do I enable or disable cookies in my browser?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"536906da-854b-92e3-1d8b-8a1e54d87f07"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {
                            "Does the learning website support multiple languages?"
                          }
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"536906da-854b-92e3-1d8b-8a1e54d87f0f"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"Can I use a VPN to access the learning website?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 3"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div className={"faq-box-main"}>
                    <Interactive
                      data-motion-id={"4b29086a-0fad-438a-f1b7-53f227275259"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"How is my performance assessed in the courses?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"4b29086a-0fad-438a-f1b7-53f227275261"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"When will I receive my grades?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"4b29086a-0fad-438a-f1b7-53f227275269"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"Can I see my grades for each assessment?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"4b29086a-0fad-438a-f1b7-53f227275271"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"How do I know what I need to improve on?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"4b29086a-0fad-438a-f1b7-53f227275279"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"What happens if I miss an assessment or deadline?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 4"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div className={"faq-box-main"}>
                    <Interactive
                      data-motion-id={"a33f93f2-a0cc-f291-7ae4-6582d1c28fa9"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"How can I contact support if I have a problem?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"a33f93f2-a0cc-f291-7ae4-6582d1c28fb1"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"How do I report technical issues with the website?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"a33f93f2-a0cc-f291-7ae4-6582d1c28fb9"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"Can I access support through live chat?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"a33f93f2-a0cc-f291-7ae4-6582d1c28fc1"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"How do I access the knowledge base or help center?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"a33f93f2-a0cc-f291-7ae4-6582d1c28fc9"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {
                            "How can I escalate a support issue if it's not resolved?"
                          }
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 5"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div className={"faq-box-main"}>
                    <Interactive
                      data-motion-id={"5bc5013e-179a-660b-cbf3-135954a92f9e"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {"Are the certificates and degrees accredited?"}
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"5bc5013e-179a-660b-cbf3-135954a92fa6"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {
                            "Can I earn a certificate or degree entirely online?"
                          }
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"5bc5013e-179a-660b-cbf3-135954a92fae"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {
                            "How can I verify the authenticity of my certificate or degree?"
                          }
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"5bc5013e-179a-660b-cbf3-135954a92fb6"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {
                            "Can I request a physical copy of my certificate or degree?"
                          }
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-motion-id={"5bc5013e-179a-660b-cbf3-135954a92fbe"}
                      data-delay={"300"}
                      data-hover={"false"}
                      className={"faq w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"faq-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div className={"heading-six"}>
                          {
                            "What should I do if I lose my certificate or degree?"
                          }
                        </div>
                        <div className={"faq-two-icon"}>
                          <div className={"plus-bar plus-one"}></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            }}
                            className={"plus-bar plus-two"}
                          ></div>
                        </div>
                      </Interactive>
                      <Interactive
                        className={"faq-answer w-dropdown-list"}
                        as={"nav"}
                      >
                        <div className={"toggle-answer-wrap"}>
                          <p>
                            {
                              "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                            }
                          </p>
                        </div>
                      </Interactive>
                    </Interactive>
                  </div>
                </Interactive>
              </div>
            </Interactive>
          </div>
        </div>
      </section>
      <section className={"cta-three"}>
        <div
          className={"w-layout-blockcontainer cta-three-container w-container"}
        >
          <div className={"w-layout-hflex cta-three-main"}>
            <div
              data-motion-id={"88293f59-0187-6056-3a72-86586e29ff70"}
              className={"heading-three cta-heading text-white"}
            >
              {"Are you ready to start your journey?"}
            </div>
            <div
              data-motion-id={"88293f59-0187-6056-3a72-86586e29ff72"}
              className={"w-layout-hflex cta-button-wrapper"}
            >
              <SiteLink
                data-motion-id={"890a1aa9-6573-2ea8-6a51-6c8deb450bab"}
                href={"/course-one"}
                className={"button white-border-button w-inline-block"}
              >
                <div>{"Browse courses"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                href={"/career"}
                className={"button button-yellow w-inline-block"}
              >
                <div>{"Became an  instructor"}</div>
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"footer-two"}>
        <div
          data-motion-id={"e1c36f32-de27-e1d0-913a-a0776cbd6ec0"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-hflex footer-two-main"}>
            <div
              id={"w-node-e1c36f32-de27-e1d0-913a-a0776cbd6ec2-6cbd6ebf"}
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
                    "/grow-your-brand-and-reach-your-audience/course-details"
                  }
                  className={"footer-link-hover"}
                >
                  {"Blog details"}
                </SiteLink>
              </div>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-three"}>
              <div className={"heading-five text-white"}>{"Need help?"}</div>
              <div className={"w-layout-vflex footer-links-contact"}>
                <div>
                  <div>{"Call us"}</div>
                  <SiteLink
                    href={"tel:8881234567"}
                    className={"heading-five text-white footer-hover-in"}
                  >
                    {"(888) 123 4567"}
                  </SiteLink>
                </div>
                <div>
                  <div>{"Need support?"}</div>
                  <SiteLink
                    href={"mailto:info@example.com"}
                    className={"heading-five text-white footer-hover-in"}
                  >
                    {"info@example.com"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-motion-id={"e1c36f32-de27-e1d0-913a-a0776cbd6efb"}
          className={"w-layout-blockcontainer footer-container w-container"}
        >
          <div className={"border-one"}></div>
          <div className={"w-layout-hflex footer-bottom-main"}>
            <div className={"footer-bottom-text"}>
              {"Design by "}
              <SiteLink
                href={"https://www.radianttemplates.com"}
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
                className={"footer-bottom-link"}
              >
                {"Webflow"}
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className={"navbar-box"}>
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
                <SiteLink
                  href={"/home-one"}
                  className={"no-padding w-nav-brand"}
                >
                  <img
                    src={
                      "/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"
                    }
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
                          className={
                            "menu-sublist sub-menu-bottom w-dropdown-list"
                          }
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
                        src={
                          "/assets/6dc206a4-66c6fb8ba5e099697cc76c17_Cart.svg"
                        }
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
                    <AuthButton
                      className={"user-log-in-log-out"}
                      type={"button"}
                    >
                      {"Logout"}
                    </AuthButton>
                    <div className={"menu-border"}></div>
                    <SiteLink
                      href={"/sign-up"}
                      className={"menu-font text-white"}
                    >
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
        </div>
        <section className={"desktop-menu"}>
          <div
            className={"w-layout-blockcontainer navbar-container w-container"}
          >
            <div className={"w-layout-hflex navbar-wrapper"}>
              <SiteLink
                href={"/home-one"}
                className={"no-padding w-inline-block"}
              >
                <img
                  src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                  loading={"lazy"}
                  alt={"Elearna"}
                  className={"elerna"}
                />
              </SiteLink>
              <div
                id={"w-node-c0ed1247-def4-0564-3c81-5cee2fd42538-2fd42530"}
                className={"w-layout-hflex desktop-menu-wrapper"}
              >
                <Interactive
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
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown mega-menu-dropdown w-dropdown"}
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
                    className={"dropdown-list mega-menu w-dropdown-list"}
                    as={"nav"}
                  >
                    <div className={"w-layout-hflex mega-menu-inside"}>
                      <div className={"mega-menu-right-wrapper"}>
                        <div
                          data-motion-id={
                            "c0ed1247-def4-0564-3c81-5cee2fd4254d"
                          }
                          className={"w-layout-vflex mega-menu-box free-box"}
                        >
                          <div className={"mega-menu-headings"}>
                            {"Free courses"}
                          </div>
                          <p className={"mega-menu-description hover-off"}>
                            {"Free learning resources for skill development."}
                          </p>
                        </div>
                        <div
                          data-motion-id={
                            "c0ed1247-def4-0564-3c81-5cee2fd42552"
                          }
                          className={"w-layout-vflex mega-menu-box paid-box"}
                        >
                          <div className={"mega-menu-headings"}>
                            {"Paid courses"}
                          </div>
                          <p className={"mega-menu-description hover-off"}>
                            {
                              "Courses are available upon purchase.(Requires login)"
                            }
                          </p>
                        </div>
                      </div>
                      <div className={"mega-menu-option"}>
                        <div className={"mega-menu-block free"}>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Finance"}
                            </div>
                            <SiteLink
                              href={
                                "/understanding-corporate-finance-and-investments/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {
                                "Understanding corporate finance and investments"
                              }
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Design"}
                            </div>
                            <SiteLink
                              href={
                                "/advanced-photoshop-techniques-for-designers/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Advanced photoshop techniques for designers"}
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Management"}
                            </div>
                            <SiteLink
                              href={
                                "/crisis-management-and-problem-solving-strategies/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {
                                "Crisis management and problem-solving strategies"
                              }
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Development"}
                            </div>
                            <SiteLink
                              href={
                                "/building-single-page-applications-with-angular/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Building single page applications with angular"}
                            </SiteLink>
                          </div>
                        </div>
                        <div className={"mega-menu-block paid"}>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Finance"}
                            </div>
                            <SiteLink
                              href={
                                "/the-complete-guide-to-personal-and-business-finance/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {
                                "The complete guide to personal and business finance"
                              }
                            </SiteLink>
                            <SiteLink
                              href={
                                "/operations-management-and-process-improvement/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Operations management and process improvement"}
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Design"}
                            </div>
                            <SiteLink
                              href={
                                "/learn-interactive-web-design-by-building-real-projects/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {
                                "Learn interactive Web Design by building real projects"
                              }
                            </SiteLink>
                            <SiteLink
                              href={
                                "/design-systems-and-pattern-libraries/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Design systems and pattern libraries"}
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Management"}
                            </div>
                            <SiteLink
                              href={
                                "/grow-your-brand-and-reach-your-audience/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Grow your brand and reach your audience"}
                            </SiteLink>
                            <SiteLink
                              href={
                                "/risk-management-and-business-continuity/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Risk management and business continuity"}
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Development"}
                            </div>
                            <SiteLink
                              href={
                                "/database-integration-with-mongodb/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Database integration with MongoDB"}
                            </SiteLink>
                            <SiteLink
                              href={
                                "/full-stack-development-with-the-mern-stack/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Full-stack development with the MERN stack"}
                            </SiteLink>
                          </div>
                        </div>
                        <div className={"w-layout-hflex mega-menu-add"}>
                          <img
                            src={
                              "/assets/043bc555-67123069e49297274bf9143a_Coins-Icons.svg"
                            }
                            loading={"lazy"}
                            width={"47"}
                            height={"47"}
                            alt={"Icons"}
                          />
                          <div className={"w-layout-vflex menu-add-middle"}>
                            <div className={"mega-menu-headings"}>
                              {"Increase your potential earnings"}
                            </div>
                            <p className={"mega-menu-description hover-off"}>
                              {
                                "Lorem ipsum dolor sit amet scelerisque integer adipiscing velit sem sed."
                              }
                            </p>
                          </div>
                          <SiteLink
                            href={"/career"}
                            className={"link-block w-inline-block"}
                          >
                            <img
                              src={
                                "/assets/174a6561-66c86330828a126c2bb6c4d9_Button-Arrow-Black.png"
                              }
                              loading={"lazy"}
                              width={"13"}
                              alt={"Icon"}
                            />
                          </SiteLink>
                        </div>
                      </div>
                    </div>
                  </Interactive>
                </Interactive>
                <Interactive
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
              </div>
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
                  <SiteLink
                    href={"/sign-up"}
                    className={"menu-font text-white"}
                  >
                    {"Register"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
