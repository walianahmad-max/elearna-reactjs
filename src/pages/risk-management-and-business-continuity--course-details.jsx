import { SiteLink, Interactive, CartButton, CartCount, AuthButton, SiteForm } from '../components/Interactions';
import { Checkout } from '../components/Commerce';
import { CourseCard } from '../components/CourseCard';
import courseCards from '../data/course-cards.json';

export default function Page() {
  return (<>
    <div className={"w-users-userformpagewrap page-wrapper password-page"}>
      <section data-motion-id={"93edf241-64f2-4a08-b321-5c55c6382ca0"} className={"membership-logo"}>
        <div className={"w-layout-blockcontainer contact-three-container w-container"}>
          <div className={"w-layout-hflex membership-nav"}>
            <SiteLink href={"/home-one"} className={"w-inline-block"}>
              <img src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"} loading={"lazy"} width={"105"} height={"26"} alt={"Elearna"} />
            </SiteLink>
          </div>
        </div>
      </section>
      <div className={"w-layout-vflex access-denied"}>
        <div className={"w-users-userformheader"}>
          <img src={"/assets/91e848a8-66e188645bdc706d3ad5e83d_Lock-Logo.svg"} alt={"Icon"} width={"49"} height={"70"} />
          <h2 className={"access-heading"}>
{"Access Denied"}
          </h2>
        </div>
        <p className={"no-margin-bottom access-description"}>
{"A site membership is required to view this page. Please "}
          <SiteLink href={"/sign-up"} className={"link-hover"}>
{"Sign up"}
          </SiteLink>
{" or "}
          <SiteLink href={"/log-in"} className={"link-hover"}>
{"Log in"}
          </SiteLink>
{"."}
        </p>
      </div>
      <section data-motion-id={"1a9d11b7-7483-9920-b2a5-863bb6991ec8"} className={"contact-three-footer"}>
        <div className={"w-layout-blockcontainer contact-three-container top-border w-container"}>
          <div className={"w-layout-hflex contact-three-footer-main"}>
            <div className={"w-layout-hflex contact-footer-links-wrapper"}>
              <SiteLink href={"/information/style-guide"} className={"footer-small-link"}>
{"Style guide"}
              </SiteLink>
              <SiteLink href={"/401"} className={"footer-small-link"}>
{"Password protected"}
              </SiteLink>
              <SiteLink href={"/404"} className={"footer-small-link"}>
{"404"}
              </SiteLink>
              <SiteLink href={"/information/license"} className={"footer-small-link"}>
{"License"}
              </SiteLink>
            </div>
            <div className={"w-layout-hflex contact-footer-links-wrapper"}>
              <div className={"small-heading small-heading-mobile"}>
{"Design by "}
                <SiteLink href={"https://www.radianttemplates.com"} target={"_blank"} className={"footer-small-link"}>
{"Radiant Templates"}
                </SiteLink>
              </div>
              <div className={"small-heading small-heading-mobile"}>
{"Powered by "}
                <SiteLink href={"https://webflow.com/?r=0"} target={"_blank"} className={"footer-small-link"}>
{"webflow"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>);
}
