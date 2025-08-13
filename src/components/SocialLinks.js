import clsx from "clsx";
import React, { FunctionComponent } from "react";


export const SocialLinks = function ({data}){
    const socialLinksComponents = data.map(({ name, url, svg }) => (
        <div className={clsx("col", "socialLink")} key={name}>
            <a
                href={url}
                target="_blank"
                className={clsx("button button--outline button--primary", "btn")}
            >
                <span className={"btnIcon"}>{svg}</span>
            </a>
        </div>
    ));

    return (
        <div className={"container socialContainer"}>
            <div className={clsx("row")}>
                {socialLinksComponents}
            </div>
        </div>
    );
};