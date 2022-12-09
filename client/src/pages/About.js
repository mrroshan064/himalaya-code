import React from "react";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <>
      <div class="alert alert-success" role="alert">
        <h1 class="display-3">{t("page.welcome.about")}</h1>
      </div>
      <div class="alert alert-success" role="alert">
        <h1 class="display-6">{t("parag.description")}</h1>
      </div>
    </>
  );
}

export default About;
