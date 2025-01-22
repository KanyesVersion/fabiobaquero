import React from "react";
import { componentLookup } from "./componentLookup";

const renderElementFromData = (data, key, currentLanguage) => {
    const { type, props, children } = data;
    const localizedChildren = !Array.isArray(children) && children !== null ? children[currentLanguage] : children;
    const typeOrComponent = componentLookup[type] || type;

    if (!Array.isArray(localizedChildren)) {
        return <React.Fragment key={key}>
            {React.createElement(typeOrComponent, { ...props }, localizedChildren)}
        </React.Fragment> ;
    } else {
        return React.createElement(
            type,
            props,
            localizedChildren.map((child, index) => <React.Fragment>
                {renderElementFromData(child, `${key}-${index}`, currentLanguage)}
            </React.Fragment>)
        );
    }
}

export default renderElementFromData;