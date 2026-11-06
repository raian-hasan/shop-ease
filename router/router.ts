import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const Home = lazy(() => import("../src/pages/Home"));
const Contact = lazy(() => import("../src/pages/Contact"));
const MainLayout = lazy(() => import("../src/layout/MainLayout"));
const Dashboard = lazy(() => import("../src/dashboard/Dashboard"));
const Favorite = lazy(() => import("../src/component/Favorite"));
const DashboardForm = lazy(() => import("../src/dashboard/DashboardForm"));
const ProductList = lazy(() => import("../src/dashboard/ProductList"));
const FeaturedList = lazy(() => import("../src/dashboard/productTypeList/FeaturedList"));
const NewArrivalList = lazy(() => import("../src/dashboard/productTypeList/NewArrivalList"));
const Categrories = lazy(() => import("../src/pages/Categrories"));
const Shop = lazy(() => import("../src/pages/Shop"));
const Gallery = lazy(() => import("../src/pages/Gallery"));
const Complain = lazy(() => import("../src/dashboard/complain/Complain"));
const Preview = lazy(() => import("../src/component/homeComponet/Preview"));
const CheckOutForm = lazy(() => import("../src/component/homeComponet/CheckOutForm"));
const OrderSuccess = lazy(() => import("../src/component/homeComponet/order-page/OrderSuccess"));
const OrderList = lazy(() => import("../src/dashboard/OrderList"));



export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/contact",
                Component: Contact,
            },
            {
                path: "/favorite",
                Component: Favorite,
            },
            {
                path: "/categrories",
                Component: Categrories
            },
            {
                path: "/shop",
                Component: Shop
            },
            {
                path: "/gallery",
                Component: Gallery
            },
            {
                path: "/preview/:productId",
                loader: ({ params }) => {
                    return params.productId;
                },
                Component: Preview
            },
            {
                path: "/checkoutform",
                Component: CheckOutForm
            },
            {
                path: "/order-success",
                Component: OrderSuccess
            }
        ],
    },
    {
        Component: Dashboard,
        children: [
            {
                path: "/dashboard",
                Component: DashboardForm,
            },
            {
                Component: ProductList,
                children: [
                    {
                        path: "productlist",
                        Component: FeaturedList,
                    },
                    {
                        path: "newarrivallist",
                        Component: NewArrivalList,
                    },
                ],
            },
            {
                path: "/complain",
                Component: Complain
            },
            {
                path: "/order-list",
                Component: OrderList
            }
        ],
    },
]);