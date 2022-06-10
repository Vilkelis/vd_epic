import { INavBarItemModel } from 'domain/App/Layout/NavBar/NavBarItem'
import { DynamicPeriodKind } from 'utils/enums'

export const navBarItems: Array<INavBarItemModel> = [
  {
    title: {
      action: '/',
      active: true,
      caption: 'Проектная деятельность',
      icon: 'assets/icons/nav_bar_roket.svg',
    },
  },
  {
    body: [
      {
        action: '/rating-vice-directors',
        active: false,
        caption: 'Рейтинг заместителей директора НИИ «Восход»',
      },
      {
        action: '/rating-department-directors',
        active: false,
        caption: 'Рейтинг директоров департаментов НИИ «Восход»',
      },
      {
        action: '/rating-vice-ministers',
        active: false,
        caption: 'Рейтинг заместителей министра МЦ',
      },
    ],
    title: {
      active: false,
      caption: 'Рейтинги',
      icon: 'assets/icons/nav_bar_stars.svg',
    },
  },
  {
    title: {
      action: '/staff',
      active: false,
      caption: 'Кадры',
      icon: 'assets/icons/nav_bar_card.svg',
    },
  },
  {
    title: {
      action: '/finance',
      active: false,
      caption: 'Финансы',
      icon: 'assets/icons/nav_bar_money.svg',
    },
  },
  {
    title: {
      action: '/purchases',
      active: false,
      caption: 'Закупки',
      icon: 'assets/icons/nav_bar_basket.svg',
    },
  },
]

interface IDynamicPeriodSelectBoxItem {
  id: DynamicPeriodKind
  name: string
}

export const DynamicPeriodSelectItems: IDynamicPeriodSelectBoxItem[] = [
  { id: DynamicPeriodKind.week, name: 'Неделя' },
  { id: DynamicPeriodKind.month, name: 'Месяц' },
  { id: DynamicPeriodKind.quarter, name: 'Квартал' },
  { id: DynamicPeriodKind.to_date, name: 'На дату' },
]
