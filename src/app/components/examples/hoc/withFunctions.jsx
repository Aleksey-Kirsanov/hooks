import React from "react";
import Card from "../../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.auth;
    console.log(localStorage);

    const onLogin = () => {
        localStorage.setItem("auth", "token");
        console.log(localStorage.auth);
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
        console.log(localStorage.auth);
    };

    return (
        <Card>
            {isAuth === "token" ? (
                <SimpleComponent
                    {...props}
                    isAuth={isAuth}
                    onLogOut={onLogOut}
                ></SimpleComponent>
            ) : (
                <SimpleComponent
                    {...props}
                    isAuth={isAuth}
                    onLogin={onLogin}
                ></SimpleComponent>
            )}
        </Card>
    );
};

export default withFunctions;
