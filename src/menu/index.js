const menu = [
    {
        icon: "HomeIcon",
        pageName: "top-menu-dashboard",
        title: "Главная страница",
    },
    {
        icon: "BoxIcon",
        pageName: "top-menu-menu-layout",
        title: "Оператор",
        name: 'operator',
        subMenu: [
            {
                icon: "BoxIcon",
                pageName: "top-menu-menu-",
                title: "Заявки",
                subMenu: [
                    {
                        icon: "",
                        pageName: "top-menu-all-orders",
                        title: "Все заявки",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "top-menu-ticket",
                        title: "Билеты",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "top-menu-tour-package",
                        title: "Турпакеты",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "top-menu-visa",
                        title: "Визы",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "top-menu-cargo",
                        title: "Карго",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "top-menu-return-back",
                        title: "Возврать д/с",
                        ignore: true,
                    },
                ]
            },
            {
                icon: "UsersIcon",
                pageName: "top-menu-clients",
                title: "Клиенты",
                ignore: true,
            },
            {
                icon: "ActivityIcon",
                pageName: "top-menu-apps",
                title: "Журнал звонков",
                subMenu: [
                    {
                        icon: "UsersIcon",
                        pageName: "top-menu-users-ss",
                        title: "Сделал заказ"
                    },
                    {
                        icon: "TrelloIcon",
                        pageName: "top-menu-profile",
                        title: "Инфо по билетам,визам,турпакетам,карго",
                    },
                    {
                        icon: "InboxIcon",
                        pageName: "top-menu-inbox",
                        title: "Инфо о компании",
                    },
                    {
                        icon: "FolderIcon",
                        pageName: "top-menu-file-manager",
                        title: "Поставил бронь",
                    },
                ],
            },
        ],
    },
    {
        icon: "LayoutIcon",
        pageName: "top-menu-asd",
        title: "Кассир",
        name: "cashier",
        subMenu: [
            {
                icon: "",
                pageName: "top-menu-cashier",
                title: "Все заявки"
            },
            {
                icon: "",
                pageName: "top-menu-cashier-booked",
                title: "Заявки 'В обработке'"
            },
            {
                icon: "",
                pageName: "top-menu-cashier-paid",
                title: "Заявки 'Оплачено'"
            },
            {
                icon: "",
                pageName: "top-menu-cashier-transfer",
                title: "Перенос прибыли"
            },
            {
                icon: "",
                pageName: "top-menu-cashier-exits",
                title: "Вывод средств"
            },
            {
                icon: "",
                pageName: "top-menu-cashier-exits-confirmeds",
                title: "Вывод средств подтверждённые"
            },
            {
                icon: "",
                pageName: "top-menu-cashier-enter",
                title: "Приход",
            },
            {
                icon: "",
                pageName: "top-menu-cashier-remainder",
                title: "Остаток по кассом",
            },
            {
                icon: "",
                pageName: "top-menu-cashier-returns",
                title: "Возврат д/c",
            },
        ],
    },
    {
        icon: "InboxIcon",
        pageName: "top-menu-components",
        title: "Бухгалтер",
        name: "accounter",
        subMenu: [
            {
                icon: "",
                pageName: "top-menu-accounter-orders",
                title: "Заказы"
            },
            {
                icon: "",
                pageName: "top-menu-accounter-sales",
                title: "Отчет по продажом",
            },
            {
                icon: "",
                pageName: "top-menu-accounter-enumeration",
                title: "Перечисление",
            },
        ],
    },
    {
        icon: "SidebarIcon",
        pageName: "top-menu-forms",
        title: "Директор",
        name: "director",
        subMenu: [
            {
                icon: "",
                pageName: "top-menu-director-report-diagrams",
                title: "Диаграммы продаж",
            },
            {
                icon: "",
                pageName: "top-menu-director-orders",
                title: "Заказы",
            },
            {
                icon: "",
                pageName: "top-menu-director-clients",
                title: "Клиенты",
            },
            {
                icon: "",
                pageName: "top-menu-director-exits",
                title: "Вывод средств",
            },
            {
                icon: "",
                pageName: "top-menu-director-return-back",
                title: "Возврат ДС",
            }
        ],
    },
    {
        icon: "HardDriveIcon",
        pageName: "top-menu-widgets",
        title: "Основные данные",
        name: "admin",
        subMenu: [
            {
                icon: "",
                pageName: "top-menu-tour-partners",
                title: "Тур партнер",
            },
            {
                icon: "",
                pageName: "top-menu-visa-type",
                title: "Тип визы",
            },
            {
                icon: "",
                pageName: "top-menu-visa-partner",
                title: "Виза партнер",
            },
            {
                icon: "",
                pageName: "top-menu-cashiers",
                title: "Касса",
            },
            {
                icon: "",
                pageName: "top-menu-users",
                title: "Пользователи",
            },
        ],
    },
];