import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Commento = ({ pageId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.commento.io/js/commento.js";
    script.async = true;
    script.setAttribute("data-page-id", pageId);
    script.setAttribute("data-no-fonts", "true"); // Optional attribute

    document.body.appendChild(script);
    console.log("height");
    console.log(document.documentElement.clientHeight);
    return () => {
      document.body.removeChild(script);
    };
  }, [pageId]);
  return <div id="commento" />;
};

Commento.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default Commento;
