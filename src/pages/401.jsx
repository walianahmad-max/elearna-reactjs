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
      <div className={"utility-page-wrap passowrd-page-wrap"}>
        <div
          className={"utility-page-content utility-form w-password-page w-form"}
        >
          <SiteForm
            id={"email-form"}
            name={"email-form"}
            data-name={"Email Form"}
            className={"utility-page-form w-password-page"}
            formKind={"protected"}
            route={"/401"}
          >
            <img
              src={
                "/assets/86b4b89e-66e1752b82da51f0e43d2a89_Password-Lock.svg"
              }
              alt={""}
              width={"93"}
              height={"108"}
            />
            <h2 className={"protected-heading"}>{"Protected Page"}</h2>
            <div className={"w-layout-vflex password-form-field-wrapper"}>
              <label
                htmlFor={"pass"}
                className={"small-heading w-password-page"}
              >
                {"Password"}
              </label>
              <input
                className={"text-field-three w-password-page w-input"}
                autoFocus={true}
                maxLength={"256"}
                name={"pass"}
                data-name={"field"}
                placeholder={"Enter your password"}
                type={"password"}
                id={"pass"}
              />
            </div>
            <input
              type={"submit"}
              data-wait={"Please wait..."}
              className={
                "button button-yellow button-full-width w-password-page w-button"
              }
              value={"Submit Password"}
            />
            <div
              style={{ display: "none" }}
              className={"w-password-page w-embed w-script"}
            >
              <input
                type={"hidden"}
                name={"path"}
                value={"<%WF_FORM_VALUE_PATH%>"}
              />
              <input
                type={"hidden"}
                name={"page"}
                value={"<%WF_FORM_VALUE_PAGE%>"}
              />
            </div>
            <div
              style={{ display: "none" }}
              className={"w-password-page w-embed w-script"}
            ></div>
          </SiteForm>
        </div>
      </div>
    </>
  );
}
