import { LinkProps } from "react-router-dom";

 interface LinkPropsAndName extends LinkProps {
        name: string
}

type LinkPropsAndNames = Array<LinkPropsAndName>

export {
    LinkPropsAndName,
    LinkPropsAndNames

}