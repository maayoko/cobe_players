import React, { PropsWithChildren } from "react";
import { useParams, Navigate } from "react-router-dom";

import { RouteParams } from "../../pages/PlayerDetails";

type DendiRouteProps = {
    redirect?: string;
}

const DendiRoute = (props: PropsWithChildren<DendiRouteProps>) => {
    const params = useParams<RouteParams>();

    if (params.nickname !== "dd") {
        return <Navigate to="/player/error"/>;
    }

    return props.children as JSX.Element;
}

export default DendiRoute;