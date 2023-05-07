import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        console.log(inputRef.current);
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control mb-3"
                id="email"
            />
            <div className="btn-group">
                <button
                    className="btn btn btn-outline-primary"
                    onClick={handleClick}
                >
                    Фокус input
                </button>
                <button
                    className="btn btn btn-outline-primary"
                    onClick={handleClickWidth}
                >
                    Изменить ширину
                </button>
            </div>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
