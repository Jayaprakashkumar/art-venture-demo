import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_1: NbMenuItem[] = [
  {
    title: 'MY COLLECTION',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'ARTIST OVERVIEW',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  }
]

export const MENU_ITEMS_2: NbMenuItem[] = [
  {
    title: 'IN-DEPTH ANALYSIS',
    group: true,
  },
  {
    title: 'CAREER',
    icon: 'nb-star',
    children: [
      {
        title: 'biography',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Timeline',
        link: '/pages/extra-components/stepper',
      },
      {
        title: 'Museume Collection',
        link: '/pages/extra-components/list',
      },
      {
        title: 'Key Series',
        link: '/pages/extra-components/infinite-list',
      }
      // {
      //   title: 'Form Inputs',
      //   link: '/pages/extra-components/form-inputs',
      // },
      // {
      //   title: 'Accordion',
      //   link: '/pages/extra-components/accordion',
      // },
      // {
      //   title: 'Progress Bar',
      //   link: '/pages/extra-components/progress-bar',
      // },
      // {
      //   title: 'Spinner',
      //   link: '/pages/extra-components/spinner',
      // },
      // {
      //   title: 'Alert',
      //   link: '/pages/extra-components/alert',
      // },
      // {
      //   title: 'Tree',
      //   link: '/pages/extra-components/tree',
      // },
      // {
      //   title: 'Tabs',
      //   link: '/pages/extra-components/tabs',
      // },
      // {
      //   title: 'Calendar Kit',
      //   link: '/pages/extra-components/calendar-kit',
      // },
      // {
      //   title: 'Chat',
      //   link: '/pages/extra-components/chat',
      // },
    ],
  },
  {
    title: 'MARKET',
    icon: 'nb-compose',
    children: [
      {
        title: 'Performance',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Sell Through Rate',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Volume',
        link: '/pages/forms/buttons',
      }
      // {
      //   title: 'Datepicker',
      //   link: '/pages/forms/datepicker',
      // },
      
    ],
  },
  {
    title: 'Series',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Ada',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Flower',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Prints',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Sculptures',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'INVESTMENT',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'Risk',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Alternative Investment',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Comparable Artist',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Social Sentiment',
        link: '/pages/modal-overlays/toastr',
      }
      // {
      //   title: 'Tooltip',
      //   link: '/pages/modal-overlays/tooltip',
      // },
    ],
  },
  {
    title: 'ACQUISITION',
    icon: 'nb-location',
    children: [
      {
        title: 'Location',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Seller',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Production Year',
        link: '/pages/maps/gmaps',
      }
      // {
      //   title: 'Search Maps',
      //   link: '/pages/maps/searchmap',
      // },
    ],
   },
  {
    title: 'ARTVENTURE INTELLIGENCE',
    icon: 'nb-location',
    children: [
      {
          title: 'Collector Takeaway',
          link: '/pages/extra-components/form-inputs',
        },
        {
          title: 'Acquisition Strategy',
          link: '/pages/extra-components/accordion',
        },
        {
          title: 'Market Outlook',
          link: '/pages/extra-components/progress-bar',
        }
    ]
   },
  //   {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // }
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'nb-shuffle',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
