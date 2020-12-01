import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const requireAuth = (ChildComponent) => {
  const ComposeComponent = (props) => {
    const { authenticated } = useSelector((state) => state.auth);

    useEffect(() => {
      if (!authenticated) {
        props.history.push("/");
      }
    }, [authenticated, props.history]);

    return <ChildComponent {...props} />;
  };
  return ComposeComponent;
};

export default requireAuth;
