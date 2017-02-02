# DaoVoice Tracking Conversions

本代码基于 (DaoVoice)[https://www.daovoice.io?utm_source=yeting&utm_medium=github&utm_campaign=tracking-conversions] 完成一个场景，
如何跟踪用户市场活动的转化效果。

(DaoVoice)[https://www.daovoice.io?utm_source=yeting&utm_medium=github&utm_campaign=tracking-conversions] 是你与客户进行沟通的绝佳工具

## 为什么要追踪市场活动转化效果?

主要回答下面几个问题：

* 有多少用户通过 **市场活动A** 成为注册用户?
* 通过 **市场活动A** 成为注册用户之后的付费行为是怎么样的？
* 如何通过纵观多个市场活动，进行决策优化？

## 怎么去使用该代码?

一般来说，市场营销页面 (Marketing Site / Landing Page)与应用程序页面(Application Site)，分属于两个域名。(例如 www.daocloud.io 和 dashboard.daocloud.io)

在项目中， `marketing-site.html` 可以看作是市场营销页面,该页面引入 `tracking-cookies.js`，自动将 UTM 和 Referrer 存储在根域名的 cookie 中。

1. `/dist/tracking-cookies.min.js` 为压缩之后的生产代码，直接复制到项目中。
2. 仿照 `marketing-site.html` 改写 DaoVoice Widget 接入代码。

## 怎么看到效果?

下载整个项目，打开 `marketing-site.html`。


# 进阶

`/cross` 为跨域名解决方案，有意向请自行理解。
