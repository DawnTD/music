export const routes = [
    {
        path: "/",
        redirect: "/findMusic",
    },
    {
        path: "/findMusic",
        component: () => import("@/views/Aside/findMusic/findMusic.vue"),
        children: [
            {
                path: "",
                component: () => import("@/views/Aside/findMusic/pages/recommend.vue"),
            },
            {
                path: "/Customized",
                component: () => import("@/views/Aside/findMusic/pages/Customized.vue"),
            },
        ],
    },
];
