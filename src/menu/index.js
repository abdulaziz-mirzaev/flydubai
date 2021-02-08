const menu = [
    {
        icon: "HomeIcon",
        pageName: "home",
        title: "Главная страница",
    },
    {
        icon: "BoxIcon",
        pageName: "menu-layout",
        title: "Оператор",
        name: 'operator',
        subMenu: [
            {
                icon: "BoxIcon",
                pageName: "menu-",
                title: "Заявки",
                subMenu: [
                    {
                        icon: "",
                        pageName: "all-orders",
                        title: "Все заявки",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "ticket",
                        title: "Билеты",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "tour-package",
                        title: "Турпакеты",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "visa",
                        title: "Визы",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "cargo",
                        title: "Карго",
                        ignore: true,
                    },
                    {
                        icon: "",
                        pageName: "return-back",
                        title: "Возврать д/с",
                        ignore: true,
                    },
                ]
            },
            {
                icon: "UsersIcon",
                pageName: "client",
                title: "Клиенты",
                ignore: true,
            },
            {
                icon: "ActivityIcon",
                pageName: "apps",
                title: "Журнал звонков",
                subMenu: [
                    {
                        icon: "UsersIcon",
                        pageName: "users-ss",
                        title: "Сделал заказ"
                    },
                    {
                        icon: "TrelloIcon",
                        pageName: "profile",
                        title: "Инфо по билетам,визам,турпакетам,карго",
                    },
                    {
                        icon: "InboxIcon",
                        pageName: "inbox",
                        title: "Инфо о компании",
                    },
                    {
                        icon: "FolderIcon",
                        pageName: "file-manager",
                        title: "Поставил бронь",
                    },
                ],
            },
        ],
    },
    {
        icon: "LayoutIcon",
        pageName: "asd",
        title: "Кассир",
        name: "cashier",
        subMenu: [
            {
                icon: "",
                pageName: "cashier",
                title: "Все заявки"
            },
            {
                icon: "",
                pageName: "cashier-booked",
                title: "Заявки 'В обработке'"
            },
            {
                icon: "",
                pageName: "cashier-paid",
                title: "Заявки 'Оплачено'"
            },
            {
                icon: "",
                pageName: "cashier-transfer",
                title: "Перенос прибыли"
            },
            {
                icon: "",
                pageName: "cashier-exits",
                title: "Вывод средств"
            },
            {
                icon: "",
                pageName: "cashier-exits-confirmeds",
                title: "Вывод средств подтверждённые"
            },
            {
                icon: "",
                pageName: "cashier-enter",
                title: "Приход",
            },
            {
                icon: "",
                pageName: "cashier-remainder",
                title: "Остаток по кассом",
            },
            {
                icon: "",
                pageName: "cashier-returns",
                title: "Возврат д/c",
            },
        ],
    },
    {
        icon: "InboxIcon",
        pageName: "components",
        title: "Бухгалтер",
        name: "accounter",
        subMenu: [
            {
                icon: "",
                pageName: "accounter-orders",
                title: "Заказы"
            },
            {
                icon: "",
                pageName: "accounter-sales",
                title: "Отчет по продажом",
            },
            {
                icon: "",
                pageName: "accounter-enumeration",
                title: "Перечисление",
            },
        ],
    },
    {
        icon: "SidebarIcon",
        pageName: "forms",
        title: "Директор",
        name: "director",
        subMenu: [
            {
                icon: "",
                pageName: "director-report-diagrams",
                title: "Диаграммы продаж",
            },
            {
                icon: "",
                pageName: "director-orders",
                title: "Заказы",
            },
            {
                icon: "",
                pageName: "director-clients",
                title: "Клиенты",
            },
            {
                icon: "",
                pageName: "director-exits",
                title: "Вывод средств",
            },
            {
                icon: "",
                pageName: "director-return-back",
                title: "Возврат ДС",
            }
        ],
    },
    {
        icon: "HardDriveIcon",
        pageName: "widgets",
        title: "Основные данные",
        name: "admin",
        subMenu: [
            {
                icon: "",
                pageName: "tour-partners",
                title: "Тур партнер",
            },
            {
                icon: "",
                pageName: "visa-type",
                title: "Тип визы",
            },
            {
                icon: "",
                pageName: "visa-partner",
                title: "Виза партнер",
            },
            {
                icon: "",
                pageName: "cashiers",
                title: "Касса",
            },
            {
                icon: "",
                pageName: "users",
                title: "Пользователи",
            },
        ],
    },
];

export default menu;