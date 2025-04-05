import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("features/Landing/pages/LandingPage.tsx"),
  layout('Layout/layout.tsx',[
    route('eventDashboard', 'features/EventDashboard/pages/EventDashboardPage.tsx'),
    route('explore', 'features/Explore/pages/ExplorePage.tsx'),
    route('calendar', 'features/Calendar/pages/CalendarPage.tsx'),
    route('createevent', 'features/CreateEvent/pages/CreateEventPage.tsx'),
    route('profile', 'features/Profile/pages/ProfilePage.tsx'),
    route('eventdetail/:id', 'features/EventDetail/pages/EventDetailPage.tsx'),
  ]),
  
  route('login', 'features/login/pages/loginPage.tsx')
] satisfies RouteConfig;
