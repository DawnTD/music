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
            {
                path: "/SongSheet",
                component: () => import("@/views/Aside/findMusic/pages/SongSheet.vue"),
            },
            {
                path: "/RankingList",
                component: () => import("@/views/Aside/findMusic/pages/RankingList.vue"),
            },
            {
                path: "/Singer",
                component: () => import("@/views/Aside/findMusic/pages/Singer.vue"),
            }
        ],
    },
    {
        path: "/SongDetail",
        component: () => import("@/views/SongDetail/songDetail.vue"),
        children: [
            {
                path: "",
                component: () => import("@/views/SongDetail/page/SongList.vue")

            }
        ]
    }
];
