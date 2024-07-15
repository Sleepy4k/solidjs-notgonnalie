import { lazy } from "solid-js";
import { RouteDefinition } from "@solidjs/router";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("@pages/home")),
  },
  {
    path: "/contact",
    component: lazy(() => import("@pages/contact")),
  },
  {
    path: "/changelogs",
    component: lazy(() => import("@pages/changelogs")),
  },
  {
    path: "/questions",
    component: lazy(() => import("@pages/question/home")),
  },
  {
    path: "/questions/add",
    component: lazy(() => import("@pages/question/add")),
  },
  {
    path: "/questions/edit",
    component: lazy(() => import("@pages/question/edit")),
  },
  {
    path: "/questions/answer",
    component: lazy(() => import("@pages/question/answer")),
  },
  {
    path: '/login',
    component: lazy(() => import('@pages/auth/login')),
  },
  {
    path: '/register',
    component: lazy(() => import('@pages/auth/register')),
  },
  {
    path: '/419',
    component: lazy(() => import('@pages/errors/419')),
  },
  {
    path: '/404',
    component: lazy(() => import('@pages/errors/404')),
  },
  {
    path: "/:uid/:questid",
    component: lazy(() => import("@pages/share")),
  },
  {
    path: "/*all",
    component: lazy(() => import("@pages/errors/404")),
  },
];
