// menuItems.js

const getMenuItems = () => {
  const menuItems = [
    {
      title: 'Home',
      url: '/',
      icon: '🏠'
    },
    {
      title: 'Resources',
      icon: '📚',
      submenu: [
        {
          title: 'Articles',
          url: '/articles',
          icon: '📖'
        },
        {
          title: 'Initiatives',
          url: '/initiatives',
          icon: '🌟'
        },
        {
          title: 'Self Assessment',
          url: '/self-assessment',
          icon: '📝'
        }
      ],
    },
    {
      title: 'Social',
      icon: '👥',
      submenu: [
        {
          title: 'Support Groups',
          url: '/support-groups',
          icon: '🤝'
        },
        {
          title: 'Blogs',
          url: '/blogs',
          icon: '✍️'
        },
        {
          title: 'Quiz',
          url: '/quiz',
          icon: '🧩'
        },
        {
          title: 'Relax',
          url: '/relax',
          icon: '🧘‍♂️'
        },
        {
          title: 'Memes',
          url: '/memes',
          icon: '😄'
        }
      ],
    },
    {
      title: 'Professional Help',
      icon: '👨‍⚕️',
      submenu: [
        {
          title: 'Psychotherapy',
          url: '/therapists',
          icon: '🧠'
        },
        {
          title: 'Emergency Helpline',
          url: 'tel:9152987821',
          icon: '📞'
        },
        {
          title: 'Chat Support',
          url: '/chat',
          icon: '💬'
        }
      ],
    },
    {
      title: 'Contact',
      icon: '📧',
      submenu: [
        {
          title: 'About Us',
          url: '/volunteer',
          icon: 'ℹ️'
        },
        {
          title: 'Contact Us',
          url: '/contact',
          icon: '📞'
        },
      ],
    },
  ];

  return menuItems;
};

export default getMenuItems;