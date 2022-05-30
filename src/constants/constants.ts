import { INavBarItemModel } from '../domain/App/Layout/NavBar/NavBarItem'

export const navBarItems: Array<INavBarItemModel> = [
  {
    title: {
      action: 'HELLO!',
      active: true,
      caption: 'Проектная деятельность',
      icon: 'assets/icons/nav_bar_roket.svg',
    },
  },
  {
    body: [
      {
        action: 'Hello!',
        active: false,
        caption: 'Рейтинг заместителей директора НИИ «Восход»',
      },
      {
        action: 'Hello!',
        active: false,
        caption: 'Рейтинг директоров департаментов НИИ «Восход»',
      },
      {
        action: 'Hello!',
        active: false,
        caption: 'Рейтинг заместителей министра МЦ',
      },
    ],
    title: { active: false, caption: 'Рейтинги', icon: 'assets/icons/nav_bar_stars.svg' },
  },
  {
    title: {
      action: 'HELLO!',
      active: false,
      caption: 'Кадры',
      icon: 'assets/icons/nav_bar_card.svg',
    },
  },
  {
    title: {
      action: 'HELLO!',
      active: false,
      caption: 'Финансы',
      icon: 'assets/icons/nav_bar_money.svg',
    },
  },
  {
    title: {
      action: 'HELLO!',
      active: false,
      caption: 'Закупки',
      icon: 'assets/icons/nav_bar_basket.svg',
    },
  },
]
