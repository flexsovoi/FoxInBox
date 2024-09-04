import MainLayout from '@/app/layouts/MainLayout/MainLayout.vue';
import { ROUTER_PATH } from '@/app/router/constants/router-paths';
import AnalyticsPage from './AnalyticsPage/AnalyticsPage.vue';
import AuthPage from './AuthPage/AuthPage.vue';
import FeedbackPage from './FeedbackPage/FeedbackPage.vue';
import KnowledgePage from './KnowledgePage/KnowledgePage.vue';
import MailingPage from './MailingPage/MailingPage.vue';
import NewsPage from './NewsPage/NewsPage.vue';
import OrdersPage from './OrdersPage/OrdersPage.vue';
import QuestionsPage from './QuestionsPage/QuestionsPage.vue';
import ReportsPage from './ReportsPage/ReportsPage.vue';
import StockKeepingPage from './StockKeepingPage/StockKeepingPage.vue';
import TaskPage from './TaskPage/TaskPage.vue';
import TrainingPage from './TrainingPage/TrainingPage.vue';
import UsersPage from './UsersPage/UsersPage.vue';
const routes = [
    { path: '/auth', component: AuthPage },
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: ROUTER_PATH.REPORTS, component: ReportsPage },
            { path: ROUTER_PATH.TASKS, component: TaskPage },
            { path: ROUTER_PATH.USERS, component: UsersPage },
            { path: ROUTER_PATH.ORDERS, component: OrdersPage },
            { path: ROUTER_PATH.KNOWLEDGE_BASE, component: KnowledgePage },
            { path: ROUTER_PATH.NEWS, component: NewsPage },
            { path: ROUTER_PATH.TRAINING, component: TrainingPage },
            { path: ROUTER_PATH.ANALYTICS, component: AnalyticsPage },
            { path: ROUTER_PATH.SKU, component: StockKeepingPage },
            { path: ROUTER_PATH.FAQ, component: QuestionsPage },
            { path: ROUTER_PATH.MAILING, component: MailingPage },
            { path: ROUTER_PATH.FEEDBACK, component: FeedbackPage },
            { path: ROUTER_PATH.AUTH, component: AuthPage },
        ],
    },
];

export {
    AnalyticsPage,
    AuthPage,
    FeedbackPage,
    KnowledgePage,
    MailingPage,
    NewsPage,
    OrdersPage,
    QuestionsPage,
    ReportsPage,
    routes,
    StockKeepingPage,
    TaskPage,
    TrainingPage,
    UsersPage,
};
