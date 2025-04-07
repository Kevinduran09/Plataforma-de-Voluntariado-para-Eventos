import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("features/Landing/pages/LandingPage.tsx"),
  layout('Layout/layout.tsx',[
    route('eventDashboard', 'features/EventDashboard/pages/EventDashboardPage.tsx'),
    route('explore', 'features/Explore/pages/ExplorePage.tsx'),
    route('calendar', 'features/Calendar/pages/CalendarPage.tsx'),
    route('createevent', 'features/CreateEvent/pages/CreateEventPage.tsx'),
    route('eventDetail/:id', 'features/EventDetail/pages/EventDetailPage.tsx'),
    route('profile', 'features/Profile/pages/ProfilePage.tsx',[
      route('account', 'features/account/pages/accountPage.tsx'),
      route('events', 'features/myEvents/pages/myEventsPage.tsx'),
      route('inscriptions', 'features/inscriptions/pages/inscriptionsPage.tsx'),
      route('settings', 'features/settings/pages/settingsPage.tsx')
    ]),
  ]),
  
  route('login', 'features/login/pages/loginPage.tsx'),

] satisfies RouteConfig;
