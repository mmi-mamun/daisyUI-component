import { createBrowserRouter } from "react-router-dom";
import Carousel from "../components/Carousel";
import Countdown from "../components/Countdown";
import Keyboard from "../components/Keyboard";
import Progress from "../components/Progress";
import RadialProgress from "../components/RadialProgress";
import Status from "../components/Status";
import Tabs from "../components/Tabs";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Carousel></Carousel>
            },
            {
                path: '/status',
                element: <Status></Status>
            },
            {
                path: '/countdown',
                element: <Countdown></Countdown>
            },
            {
                path: '/tabs',
                element: <Tabs></Tabs>
            },
            {
                path: '/radial',
                element: <RadialProgress></RadialProgress>
            },
            {
                path: '/progress',
                element: <Progress></Progress>
            },
            {
                path: '/keyboard',
                element: <Keyboard></Keyboard>
            }
        ]
    }
])

export default router;