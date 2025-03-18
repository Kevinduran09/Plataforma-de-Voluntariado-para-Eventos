import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
index("routes/home.tsx"),
route('detail','routes/EventDetail.tsx'),
route('create','routes/CreateEvent.tsx')
] satisfies RouteConfig;
