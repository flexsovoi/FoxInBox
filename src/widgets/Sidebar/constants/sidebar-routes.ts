import { ROUTER_PATH } from '@/app/router/constants/router-paths';

export const SIDEBAR_ROUTES = [
    {
        title: 'Отчеты',
        path: ROUTER_PATH.REPORTS,
        icon: '/public/assets/icons/sidebar/descriptionIcon.svg',
    },
    {
        title: 'Задания',
        path: ROUTER_PATH.TASKS,
        icon: '/public/assets/icons/sidebar/taskIcon.svg',
    },
    {
        title: 'Пользователи',
        path: ROUTER_PATH.USERS,
        icon: '/public/assets/icons/sidebar/groupIcon.svg',
    },
    {
        title: 'Заказы',
        path: ROUTER_PATH.ORDERS,
        icon: '/public/assets/icons/sidebar/ordersIcon.svg',
    },
    {
        title: 'База знаний',
        path: ROUTER_PATH.KNOWLEDGE_BASE,
        icon: '/public/assets/icons/sidebar/bookIcon.svg',
    },
    {
        title: 'Новости',
        path: ROUTER_PATH.NEWS,
        icon: '/public/assets/icons/sidebar/newsIcon.svg',
    },
    {
        title: 'Обучение',
        path: ROUTER_PATH.TRAINING,
        icon: '/public/assets/icons/sidebar/schoolIcon.svg',
    },
    {
        title: 'Аналитика',
        path: ROUTER_PATH.ANALYTICS,
        icon: '/public/assets/icons/sidebar/monitoringIcon.svg',
    },
    {
        title: 'SKU',
        path: ROUTER_PATH.SKU,
        icon: '/public/assets/icons/sidebar/quizIcon.svg',
    },
    {
        title: 'FAQ',
        path: ROUTER_PATH.FAQ,
        icon: '/public/assets/icons/sidebar/quizIcon.svg',
    },
    {
        title: 'Рассылка',
        path: ROUTER_PATH.MAILING,
        icon: '/public/assets/icons/sidebar/mailIcon.svg',
    },
    {
        title: 'Обратная связь',
        path: ROUTER_PATH.FEEDBACK,
        icon: '/public/assets/icons/sidebar/feedbackIcon.svg',
    },
    {
        title: 'Выйти',
        path: ROUTER_PATH.AUTH,
        icon: '/public/assets/icons/sidebar/logoutIcon.svg',
    },
];
