import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";
import SubFrame from "../views/Sub_frame.vue";
import Sub1 from "../views/manPower/sub_1.vue";
import Sub1_1 from "../views/manPower/sub_1_1.vue";
import Sub2 from "../views/manPower/sub_2.vue";
import Sub3 from "../views/manPower/sub_3.vue";
import Sub4 from "../views/manPower/sub_4.vue";
import Sub5 from "../views/manPower/sub_5.vue";
import Sub6 from "../views/manPower/sub_6.vue";
import Sub7 from "../views/manPower/sub_7.vue";
import Sub8 from "../views/manPower/sub_8.vue";
import Sub9 from "../views/manPower/sub_9.vue";
import Sub10 from "../views/RPA/sub_10.vue";
import Sub11 from "../views/RPA/sub_11.vue";
import Sub12 from "../views/RPA/sub_12.vue";
import Sub13 from "../views/Manage/sub_13.vue";
import Sub14 from "../views/Manage/sub_14.vue";
import Sub15 from "../views/Manage/sub_15.vue";
import Sub16 from "../views/Manage/sub_16.vue";
import Sub17 from "../views/Manage/sub_17.vue";
import Sub18 from "../views/Manage/sub_18.vue";
import Sub19 from "../views/Manage/sub_19.vue";
import Sub20 from "../views/Manage/sub_20.vue";


const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/man",
    name: "ManPower",
    component: SubFrame,
    children: [
      {
        path:"sub1",
        component: Sub1
      },
      {
        path:"sub1_1",
        component: Sub1_1
      },
      {
        path:"sub2",
        component: Sub2
      },
      {
        path:"sub3",
        component: Sub3
      },
      {
        path:"sub4",
        component: Sub4
      },
      {
        path:"sub5",
        component: Sub5
      },
      {
        path:"sub6",
        component: Sub6
      },
      {
        path:"sub7",
        component: Sub7
      },
      {
        path:"sub8",
        component: Sub8
      },
      {
        path:"sub9",
        component: Sub9
      }
      
    ]
  },
  {
    path: "/rpa",
    name: "RPA",
    component: SubFrame,
    children: [
      {
        path:"sub10",
        component: Sub10
      },
      {
        path:"sub11",
        component: Sub11
      },
      {
        path:"sub12",
        component: Sub12
      },
    ]
  },
  {
    path: "/manage",
    name: "Manage",
    component: SubFrame,
    children: [
      {
        path:"sub13",
        component: Sub13
      },
      {
        path:"sub14",
        component: Sub14
      },
      {
        path:"sub15",
        component: Sub15
      },
      {
        path:"sub16",
        component: Sub16
      },
      {
        path:"sub17",
        component: Sub17
      },
      {
        path:"sub18",
        component: Sub18
      },
      {
        path:"sub19",
        component: Sub19
      },
      {
        path:"sub20",
        component: Sub20
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;