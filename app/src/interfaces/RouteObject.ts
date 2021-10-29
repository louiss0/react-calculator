import { RouteProps, } from 'react-router';

interface RouteObject extends RouteProps {
    redirect?: string;
    exact?: boolean;
    strict?: boolean;
}


type RouteObjects = Array<RouteObject>


export {
    RouteObject,
    RouteObjects
}