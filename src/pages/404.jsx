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
      <div className={"utility-page-wrap"}>
        <div className={"utility-page-content"}>
          <div className={"_404"}>{"404"}</div>
          <img
            src={"/assets/43cc5f9f-page-not-found.211a85e40c.svg"}
            alt={""}
            className={"display-off"}
          />
          <h2 className={"not-found-heading"}>{"Oops! Page not found"}</h2>
          <div className={"margin-bottom-twenty-five"}>
            {
              "Oops! it could be you or us, there is no page here. It might have been moved or deleted."
            }
          </div>
          <SiteLink
            data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
            href={"/home-one"}
            className={"button button-yellow w-inline-block"}
          >
            <div>{"Back To Home"}</div>
          </SiteLink>
        </div>
      </div>
    </>
  );
}
