import { ROUTER_PATH } from '@/app/router/constants/router-paths';

export const SIDEBAR_ROUTES = [
    {
        title: 'Отчеты',
        path: ROUTER_PATH.REPORTS,
        icon: '/assets/icons/sidebar/descriptionIcon.svg',
    },
    {
        title: 'Задания',
        path: ROUTER_PATH.TASKS,
        icon: '/assets/icons/sidebar/taskIcon.svg',
    },
    {
        title: 'Пользователи',
        path: ROUTER_PATH.USERS,
        icon: '/assets/icons/sidebar/groupIcon.svg',
    },
    {
        title: 'Заказы',
        path: ROUTER_PATH.ORDERS,
        icon: '/assets/icons/sidebar/ordersIcon.svg',
    },
    {
        title: 'База знаний',
        path: ROUTER_PATH.KNOWLEDGE_BASE,
        icon: '/assets/icons/sidebar/bookIcon.svg',
    },
    {
        title: 'Новости',
        path: ROUTER_PATH.NEWS,
        icon: '/assets/icons/sidebar/newsIcon.svg',
    },
    {
        title: 'Обучение',
        path: ROUTER_PATH.TRAINING,
        icon: '/assets/icons/sidebar/schoolIcon.svg',
    },
    {
        title: 'Аналитика',
        path: ROUTER_PATH.ANALYTICS,
        icon: '/assets/icons/sidebar/monitoringIcon.svg',
    },
    {
        title: 'SKU',
        path: ROUTER_PATH.SKU,
        icon: '/assets/icons/sidebar/quizIcon.svg',
    },
    {
        title: 'FAQ',
        path: ROUTER_PATH.FAQ,
        icon: '/assets/icons/sidebar/quizIcon.svg',
    },
    {
        title: 'Рассылка',
        path: ROUTER_PATH.MAILING,
        icon: '/assets/icons/sidebar/mailIcon.svg',
    },
    {
        title: 'Обратная связь',
        path: ROUTER_PATH.FEEDBACK,
        icon: '/assets/icons/sidebar/feedbackIcon.svg',
    },
    {
        title: 'Выйти',
        path: ROUTER_PATH.AUTH,
        icon: '/assets/icons/sidebar/logoutIcon.svg',
    },
];
