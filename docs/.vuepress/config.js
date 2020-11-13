module.exports = {
  base: "/odc/",//部署站点的基础路径
  title: 'OpenLayers(汉)',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }]
  ],
  plugins: [
    'demo-container',
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/back-to-top'
  ],
  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
  },
  locales: {
    // 键名是该语言所属的子路径，默认语言使用中文
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'OpenLayers(汉)',
      description: 'OpenLayers中文文档'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'CView',
    //   description: 'Carlea soft large-screen visualization component library c-view.'
    // },
  },
  themeConfig: {
    logo: '/hero.png',
    // lastUpdated: 'Last Updated',//配置文档更新时间，来之git的提交记录
    navbar: true,//设置为false时禁用导航，默认为true
    smoothScroll: true,
    activeHeaderLinks: true, // 默认值：true
    locales: {
      '/': {
        lastUpdated: '最近更新时间',//配置文档更新时间，来之git的提交记录
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: 'API', link: '/api/start/introduction/' },
          { text: 'Github', link: 'https://github.com/openlayers/openlayers' },
        ],
        sidebar: {
          '/api/': [
            {
              title: '开始',
              collapsable: false,
              sidebarDepth: 1,
              children: [
                ['start/introduction/', '介绍'],
              ]
            },
            {
              title: 'ol',
              collapsable: false,
              sidebarDepth: 1,
              children: [
                ['ol/array/', 'ol/array'],
                ['ol/AssertionError/', 'ol/AssertionError'],
                ['ol/Collection/', 'ol​/Collection'],
                ['ol/CollectionEvent/', 'ol/Collection.CollectionEvent'],
                ['ol/color/', 'ol/color'],
                ['ol/colorlike/', 'ol/colorlike'],
                ['ol/control/', 'ol/control'],
                {
                  title: 'control',
                  collapsable: true,
                  sidebarDepth: 1,
                  children: [
                    ['ol/control/Attribution/', 'ol/control/Attribution'],
                    ['ol/control/Control/', 'ol/control/Control'],
                    ['ol/control/FullScreen/', 'ol/control/FullScreen'],
                  ]
                },
                ['ol/easing/', 'ol/easing'],
                ['ol/events/', 'ol/events'],
                {
                  title: 'events',
                  collapsable: true,
                  sidebarDepth: 1,
                  children: [
                    ['ol/events/condition/', 'ol/events/condition'],
                    ['ol/events/Event/', 'ol/events/Event'],
                  ]
                },
              ]
            }
          ]
        }
      },
    },
    //右上角查看项目源码链接
    // // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // repo: 'http://192.168.2.213:8080/project/CView/web/c-view-component',
    // // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/ysg-lijinwen/ol-doc-zh',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}
