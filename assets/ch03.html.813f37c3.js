import{_ as e,d as t}from"./app.70deb030.js";var o="/A-Philosophy-of-Software-Design-zh/assets/00011.f4759f6e.jpeg";const a={},i=t('<h1 id="\u7B2C-3-\u7AE0-\u5DE5\u4F5C\u4EE3\u7801\u662F\u4E0D\u591F\u7684" tabindex="-1"><a class="header-anchor" href="#\u7B2C-3-\u7AE0-\u5DE5\u4F5C\u4EE3\u7801\u662F\u4E0D\u591F\u7684" aria-hidden="true">#</a> \u7B2C 3 \u7AE0 \u5DE5\u4F5C\u4EE3\u7801\u662F\u4E0D\u591F\u7684</h1><blockquote><p>Chapter 3 Working Code Isn\u2019t Enough(Strategic vs. Tactical Programming)</p></blockquote><p>One of the most important elements of good software design is the mindset you adopt when you approach a programming task. Many organizations encourage a tactical mindset, focused on getting features working as quickly as possible. However, if you want a good design, you must take a more strategic approach where you invest time to produce clean designs and fix problems. This chapter discusses why the strategic approach produces better designs and is actually cheaper than the tactical approach over the long run.</p><blockquote><p>\u597D\u7684\u8F6F\u4EF6\u8BBE\u8BA1\u4E2D\u6700\u91CD\u8981\u7684\u5143\u7D20\u4E4B\u4E00\u662F\u60A8\u5728\u6267\u884C\u7F16\u7A0B\u4EFB\u52A1\u65F6\u6240\u91C7\u7528\u7684\u601D\u7EF4\u65B9\u5F0F\u3002\u8BB8\u591A\u7EC4\u7EC7\u90FD\u9F13\u52B1\u91C7\u53D6\u6218\u672F\u601D\u7EF4\u65B9\u5F0F\uFF0C\u7740\u773C\u4E8E\u4F7F\u529F\u80FD\u5C3D\u5FEB\u8FD0\u884C\u3002\u4F46\u662F\uFF0C\u5982\u679C\u60A8\u60F3\u8981\u4E00\u4E2A\u597D\u7684\u8BBE\u8BA1\uFF0C\u5219\u5FC5\u987B\u91C7\u53D6\u66F4\u5177\u6218\u7565\u6027\u7684\u65B9\u6CD5\uFF0C\u5728\u6B64\u4E0A\u82B1\u8D39\u65F6\u95F4\u6765\u5236\u4F5C\u5E72\u51C0\u7684\u8BBE\u8BA1\u5E76\u89E3\u51B3\u95EE\u9898\u3002\u672C\u7AE0\u8BA8\u8BBA\u4E86\u4ECE\u957F\u8FDC\u6765\u770B\uFF0C\u4E3A\u4EC0\u4E48\u6218\u7565\u65B9\u6CD5\u53EF\u4EE5\u4EA7\u751F\u66F4\u597D\u7684\u8BBE\u8BA1\uFF0C\u800C\u5B9E\u9645\u4E0A\u5374\u6BD4\u6218\u672F\u65B9\u6CD5\u4FBF\u5B9C\u3002</p></blockquote><h2 id="_3-1-tactical-programming-\u6218\u672F\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-1-tactical-programming-\u6218\u672F\u7F16\u7A0B" aria-hidden="true">#</a> 3.1 Tactical programming \u6218\u672F\u7F16\u7A0B</h2><p>Most programmers approach software development with a mindset I call tactical programming. In the tactical approach, your main focus is to get something working, such as a new feature or a bug fix. At first glance this seems totally reasonable: what could be more important than writing code that works? However, tactical programming makes it nearly impossible to produce a good system design.</p><blockquote><p>\u5927\u591A\u6570\u7A0B\u5E8F\u5458\u4EE5\u6211\u79F0\u4E3A\u6218\u672F\u7F16\u7A0B\u7684\u5FC3\u6001\u6765\u8FDB\u884C\u8F6F\u4EF6\u5F00\u53D1\u3002\u5728\u6218\u672F\u65B9\u6CD5\u4E2D\uFF0C\u60A8\u7684\u4E3B\u8981\u91CD\u70B9\u662F\u4F7F\u67D0\u4E9B\u529F\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u4F8B\u5982\u65B0\u529F\u80FD\u6216\u9519\u8BEF\u4FEE\u590D\u3002\u4E4D\u4E00\u770B\uFF0C\u8FD9\u4F3C\u4E4E\u662F\u5B8C\u5168\u5408\u7406\u7684\uFF1A\u8FD8\u6709\u4EC0\u4E48\u6BD4\u7F16\u5199\u6709\u6548\u7684\u4EE3\u7801\u66F4\u91CD\u8981\u7684\u5462\uFF1F\u4F46\u662F\uFF0C\u6218\u672F\u7F16\u7A0B\u51E0\u4E4E\u4E0D\u53EF\u80FD\u4EA7\u751F\u51FA\u826F\u597D\u7684\u7CFB\u7EDF\u8BBE\u8BA1\u3002</p></blockquote><p>The problem with tactical programming is that it is short-sighted. If you\u2019re programming tactically, you\u2019re trying to finish a task as quickly as possible. Perhaps you have a hard deadline. As a result, planning for the future isn\u2019t a priority. You don\u2019t spend much time looking for the best design; you just want to get something working soon. You tell yourself that it\u2019s OK to add a bit of complexity or introduce a small kludge or two, if that allows the current task to be completed more quickly.</p><blockquote><p>\u6218\u672F\u7F16\u7A0B\u7684\u95EE\u9898\u662F\u5B83\u662F\u77ED\u89C6\u7684\u3002\u5982\u679C\u60A8\u662F\u6218\u672F\u7F16\u7A0B\u4EBA\u5458\uFF0C\u90A3\u4E48\u60A8\u5C06\u5C1D\u8BD5\u5C3D\u5FEB\u5B8C\u6210\u4EFB\u52A1\u3002\u4E5F\u8BB8\u60A8\u6709\u4E00\u4E2A\u8270\u96BE\u7684\u671F\u9650\u3002\u56E0\u6B64\uFF0C\u4E3A\u672A\u6765\u505A\u8BA1\u5212\u4E0D\u662F\u4F18\u5148\u4E8B\u9879\u3002\u60A8\u4E0D\u4F1A\u82B1\u8D39\u592A\u591A\u65F6\u95F4\u6765\u5BFB\u627E\u6700\u4F73\u8BBE\u8BA1\u3002\u60A8\u53EA\u60F3\u5C3D\u5FEB\u4F7F\u67D0\u4EF6\u4E8B\u8D77\u4F5C\u7528\u3002\u60A8\u544A\u8BC9\u81EA\u5DF1\uFF0C\u53EF\u4EE5\u589E\u52A0\u4E00\u4E9B\u590D\u6742\u6027\u6216\u5F15\u5165\u4E00\u4E24\u4E2A\u5C0F\u9519\u8BEF\uFF0C\u5982\u679C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u5F53\u524D\u4EFB\u52A1\u66F4\u5FEB\u5730\u5B8C\u6210\uFF0C\u5219\u53EF\u4EE5\u3002</p></blockquote><p>This is how systems become complicated. As discussed in the previous chapter, complexity is incremental. It\u2019s not one particular thing that makes a system complicated, but the accumulation of dozens or hundreds of small things. If you program tactically, each programming task will contribute a few of these complexities. Each of them probably seems like a reasonable compromise in order to finish the current task quickly. However, the complexities accumulate rapidly, especially if everyone is programming tactically.</p><blockquote><p>\u8FD9\u5C31\u662F\u7CFB\u7EDF\u53D8\u5F97\u590D\u6742\u7684\u65B9\u5F0F\u3002\u5982\u4E0A\u4E00\u7AE0\u6240\u8FF0\uFF0C\u590D\u6742\u5EA6\u662F\u9012\u589E\u7684\u3002\u4E0D\u662F\u4F7F\u7CFB\u7EDF\u590D\u6742\u7684\u7279\u5B9A\u4E8B\u7269\uFF0C\u800C\u662F\u6570\u5341\u6216\u6570\u767E\u4E2A\u5C0F\u4E8B\u7269\u7684\u79EF\u7D2F\u3002\u5982\u679C\u60A8\u8FDB\u884C\u6218\u672F\u7F16\u7A0B\uFF0C\u5219\u6BCF\u4E2A\u7F16\u7A0B\u4EFB\u52A1\u90FD\u4F1A\u5E26\u6765\u4E00\u4E9B\u6B64\u7C7B\u590D\u6742\u6027\u3002\u4E3A\u4E86\u5FEB\u901F\u5B8C\u6210\u5F53\u524D\u4EFB\u52A1\uFF0C\u4ED6\u4EEC\u6BCF\u4E2A\u4EBA\u4F3C\u4E4E\u90FD\u662F\u4E00\u4E2A\u5408\u7406\u7684\u6298\u8877\u65B9\u6848\u3002\u4F46\u662F\uFF0C\u590D\u6742\u6027\u8FC5\u901F\u7D2F\u79EF\uFF0C\u5C24\u5176\u662F\u5982\u679C\u6BCF\u4E2A\u4EBA\u90FD\u5728\u6218\u672F\u4E0A\u8FDB\u884C\u7F16\u7A0B\u7684\u65F6\u5019\u3002</p></blockquote><p>Before long, some of the complexities will start causing problems, and you will begin to wish you hadn\u2019t taken those early shortcuts. But, you will tell yourself that it\u2019s more important to get the next feature working than to go back and refactor existing code. Refactoring may help out in the long run, but it will definitely slow down the current task. So, you look for quick patches to work around any problems you encounter. This just creates more complexity, which then requires more patches. Pretty soon the code is a mess, but by this point things are so bad that it would take months of work to clean it up. There\u2019s no way your schedule can tolerate that kind of delay, and fixing one or two of the problems doesn\u2019t seem like it will make much difference, so you just keep programming tactically.</p><blockquote><p>\u4E0D\u4E45\u4E4B\u540E\uFF0C\u67D0\u4E9B\u590D\u6742\u6027\u5C06\u5F00\u59CB\u5F15\u8D77\u95EE\u9898\uFF0C\u5E76\u4E14\u60A8\u5C06\u5F00\u59CB\u5E0C\u671B\u60A8\u6CA1\u6709\u91C7\u7528\u8FD9\u4E9B\u65E9\u671F\u7684\u6377\u5F84\u3002\u4F46\u662F\uFF0C\u60A8\u4F1A\u544A\u8BC9\u81EA\u5DF1\uFF0C\u4F7F\u4E0B\u4E00\u4E2A\u529F\u80FD\u6B63\u5E38\u5DE5\u4F5C\u6BD4\u8FD4\u56DE\u5E76\u91CD\u6784\u73B0\u6709\u4EE3\u7801\u66F4\u4E3A\u91CD\u8981\u3002\u4ECE\u957F\u8FDC\u6765\u770B\uFF0C\u91CD\u6784\u53EF\u80FD\u4F1A\u6709\u6240\u5E2E\u52A9\uFF0C\u4F46\u662F\u80AF\u5B9A\u4F1A\u51CF\u6162\u5F53\u524D\u7684\u4EFB\u52A1\u3002\u56E0\u6B64\uFF0C\u60A8\u9700\u8981\u5FEB\u901F\u4FEE\u8865\u7A0B\u5E8F\u6765\u89E3\u51B3\u9047\u5230\u7684\u4EFB\u4F55\u95EE\u9898\u3002\u8FD9\u53EA\u4F1A\u589E\u52A0\u590D\u6742\u6027\uFF0C\u7136\u540E\u9700\u8981\u66F4\u591A\u8865\u4E01\u3002\u5F88\u5FEB\u4EE3\u7801\u53D8\u5F97\u4E00\u56E2\u7CDF\uFF0C\u4F46\u662F\u5230\u73B0\u5728\u4E3A\u6B62\uFF0C\u60C5\u51B5\u5DF2\u7ECF\u5F88\u7CDF\u7CD5\u4E86\uFF0C\u6E05\u7406\u5B83\u9700\u8981\u82B1\u8D39\u6570\u6708\u7684\u65F6\u95F4\u3002\u60A8\u7684\u65E5\u7A0B\u5B89\u6392\u65E0\u6CD5\u5BB9\u5FCD\u8FD9\u79CD\u5EF6\u8FDF\uFF0C\u89E3\u51B3\u4E00\u4E2A\u6216\u4E24\u4E2A\u95EE\u9898\u4F3C\u4E4E\u5E76\u6CA1\u6709\u592A\u5927\u7684\u533A\u522B\uFF0C\u56E0\u6B64\u60A8\u53EA\u662F\u5728\u6218\u672F\u4E0A\u4FDD\u6301\u7F16\u7A0B\u3002</p></blockquote><p>If you have worked on a large software project for very long, I suspect you have seen tactical programming at work and have experienced the problems that result. Once you start down the tactical path, it\u2019s difficult to change.</p><blockquote><p>\u5982\u679C\u60A8\u4ECE\u4E8B\u5927\u578B\u8F6F\u4EF6\u9879\u76EE\u7684\u65F6\u95F4\u5F88\u957F\uFF0C\u6211\u6000\u7591\u60A8\u5728\u5DE5\u4F5C\u4E2D\u5DF2\u7ECF\u770B\u5230\u4E86\u6218\u672F\u7F16\u7A0B\uFF0C\u5E76\u4E14\u9047\u5230\u4E86\u5BFC\u81F4\u7684\u95EE\u9898\u3002\u4E00\u65E6\u60A8\u6CBF\u7740\u6218\u672F\u8DEF\u7EBF\u8D70\uFF0C\u5C31\u5F88\u96BE\u6539\u53D8\u3002</p></blockquote><p>Almost every software development organization has at least one developer who takes tactical programming to the extreme: a tactical tornado. The tactical tornado is a prolific programmer who pumps out code far faster than others but works in a totally tactical fashion. When it comes to implementing a quick feature, nobody gets it done faster than the tactical tornado. In some organizations, management treats tactical tornadoes as heroes. However, tactical tornadoes leave behind a wake of destruction. They are rarely considered heroes by the engineers who must work with their code in the future. Typically, other engineers must clean up the messes left behind by the tactical tornado, which makes it appear that those engineers (who are the real heroes) are making slower progress than the tactical tornado.</p><blockquote><p>\u51E0\u4E4E\u6BCF\u4E2A\u8F6F\u4EF6\u5F00\u53D1\u7EC4\u7EC7\u90FD\u6709\u81F3\u5C11\u4E00\u4E2A\u5C06\u6218\u672F\u7F16\u7A0B\u53D1\u6325\u5230\u6781\u81F4\u7684\u5F00\u53D1\u4EBA\u5458\uFF1A\u6218\u672F\u9F99\u5377\u98CE\u3002\u6218\u672F\u9F99\u5377\u98CE\u662F\u4E00\u4F4D\u591A\u4EA7\u7684\u7A0B\u5E8F\u5458\uFF0C\u4ED6\u62BD\u51FA\u4EE3\u7801\u7684\u901F\u5EA6\u6BD4\u5176\u4ED6\u4EBA\u5FEB\u5F97\u591A\uFF0C\u4F46\u5B8C\u5168\u4EE5\u6218\u672F\u65B9\u5F0F\u5DE5\u4F5C\u3002\u5B9E\u65BD\u5FEB\u901F\u529F\u80FD\u65F6\uFF0C\u6CA1\u6709\u4EBA\u80FD\u6BD4\u6218\u672F\u9F99\u5377\u98CE\u66F4\u5FEB\u5730\u5B8C\u6210\u4EFB\u52A1\u3002\u5728\u67D0\u4E9B\u7EC4\u7EC7\u4E2D\uFF0C\u7BA1\u7406\u5C42\u5C06\u6218\u672F\u9F99\u5377\u98CE\u89C6\u4E3A\u82F1\u96C4\u3002\u4F46\u662F\uFF0C\u6218\u672F\u9F99\u5377\u98CE\u7559\u4E0B\u4E86\u6BC1\u706D\u7684\u75D5\u8FF9\u3002\u4ED6\u4EEC\u5F88\u5C11\u88AB\u5C06\u6765\u5FC5\u987B\u4F7F\u7528\u5176\u4EE3\u7801\u7684\u5DE5\u7A0B\u5E08\u89C6\u4E3A\u82F1\u96C4\u3002\u901A\u5E38\uFF0C\u5176\u4ED6\u5DE5\u7A0B\u5E08\u5FC5\u987B\u6E05\u7406\u6218\u672F\u9F99\u5377\u98CE\u7559\u4E0B\u7684\u6DF7\u4E71\u5C40\u9762\uFF0C\u8FD9\u4F7F\u5F97\u90A3\u4E9B\u5DE5\u7A0B\u5E08\uFF08\u4ED6\u4EEC\u662F\u771F\u6B63\u7684\u82F1\u96C4\uFF09\u7684\u8FDB\u6B65\u4F3C\u4E4E\u6BD4\u6218\u672F\u9F99\u5377\u98CE\u6162\u3002</p></blockquote><h2 id="_3-2-strategic-programming-\u6218\u7565\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_3-2-strategic-programming-\u6218\u7565\u89C4\u5212" aria-hidden="true">#</a> 3.2 Strategic programming \u6218\u7565\u89C4\u5212</h2><p>The first step towards becoming a good software designer is to realize that working code isn\u2019t enough. It\u2019s not acceptable to introduce unnecessary complexities in order to finish your current task faster. The most important thing is the long-term structure of the system. Most of the code in any system is written by extending the existing code base, so your most important job as a developer is to facilitate those future extensions. Thus, you should not think of \u201Cworking code\u201D as your primary goal, though of course your code must work. Your primary goal must be to produce a great design, which also happens to work. This is strategic programming.</p><blockquote><p>\u6210\u4E3A\u4E00\u540D\u4F18\u79C0\u7684\u8F6F\u4EF6\u8BBE\u8BA1\u5E08\u7684\u7B2C\u4E00\u6B65\u662F\u8981\u610F\u8BC6\u5230\u4EC5\u5DE5\u4F5C\u4EE3\u7801\u662F\u4E0D\u591F\u7684\u3002\u5F15\u5165\u4E0D\u5FC5\u8981\u7684\u590D\u6742\u6027\u4EE5\u66F4\u5FEB\u5730\u5B8C\u6210\u5F53\u524D\u4EFB\u52A1\u662F\u4E0D\u53EF\u63A5\u53D7\u7684\u3002\u6700\u91CD\u8981\u7684\u662F\u7CFB\u7EDF\u7684\u957F\u671F\u7ED3\u6784\u3002\u4EFB\u4F55\u7CFB\u7EDF\u4E2D\u7684\u5927\u591A\u6570\u4EE3\u7801\u90FD\u662F\u901A\u8FC7\u6269\u5C55\u73B0\u6709\u4EE3\u7801\u5E93\u7F16\u5199\u7684\uFF0C\u56E0\u6B64\uFF0C\u4F5C\u4E3A\u5F00\u53D1\u4EBA\u5458\uFF0C\u6700\u91CD\u8981\u7684\u5DE5\u4F5C\u5C31\u662F\u4FC3\u8FDB\u8FD9\u4E9B\u5C06\u6765\u7684\u6269\u5C55\u3002\u56E0\u6B64\uFF0C\u5C3D\u7BA1\u60A8\u7684\u4EE3\u7801\u5F53\u7136\u5FC5\u987B\u5DE5\u4F5C\uFF0C\u4F46\u60A8\u4E0D\u5E94\u5C06\u201C\u5DE5\u4F5C\u4EE3\u7801\u201D\u89C6\u4E3A\u4E3B\u8981\u76EE\u6807\u3002\u60A8\u7684\u4E3B\u8981\u76EE\u6807\u5FC5\u987B\u662F\u5236\u4F5C\u51FA\u51FA\u8272\u7684\u8BBE\u8BA1\uFF0C\u5E76\u4E14\u8FD9\u79CD\u8BBE\u8BA1\u4E5F\u4F1A\u8D77\u4F5C\u7528\u3002\u8FD9\u662F\u6218\u7565\u8BA1\u5212\u3002</p></blockquote><p>Strategic programming requires an investment mindset. Rather than taking the fastest path to finish your current project, you must invest time to improve the design of the system. These investments will slow you down a bit in the short term, but they will speed you up in the long term, as illustrated in Figure 3.1.</p><blockquote><p>\u6218\u7565\u6027\u7F16\u7A0B\u9700\u8981\u4E00\u79CD\u6295\u8D44\u5FC3\u6001\u3002\u60A8\u5FC5\u987B\u82B1\u8D39\u65F6\u95F4\u6765\u6539\u8FDB\u7CFB\u7EDF\u7684\u8BBE\u8BA1\uFF0C\u800C\u4E0D\u662F\u91C7\u53D6\u6700\u5FEB\u7684\u65B9\u5F0F\u6765\u5B8C\u6210\u5F53\u524D\u7684\u9879\u76EE\u3002\u8FD9\u4E9B\u6295\u8D44\u4F1A\u5728\u77ED\u671F\u5185\u8BA9\u60A8\u653E\u6162\u811A\u6B65\uFF0C\u4F46\u4ECE\u957F\u8FDC\u6765\u770B\u4F1A\u52A0\u5FEB\u60A8\u7684\u901F\u5EA6\uFF0C\u5982\u56FE 3.1 \u6240\u793A\u3002</p></blockquote><p>Some of the investments will be proactive. For example, it\u2019s worth taking a little extra time to find a simple design for each new class; rather than implementing the first idea that comes to mind, try a couple of alternative designs and pick the cleanest one. Try to imagine a few ways in which the system might need to be changed in the future and make sure that will be easy with your design. Writing good documentation is another example of a proactive investment.</p><blockquote><p>\u4E00\u4E9B\u6295\u8D44\u5C06\u662F\u79EF\u6781\u7684\u3002\u4F8B\u5982\uFF0C\u503C\u5F97\u82B1\u4E00\u4E9B\u65F6\u95F4\u4E3A\u6BCF\u4E2A\u65B0\u7C7B\u627E\u5230\u4E00\u4E2A\u7B80\u5355\u7684\u8BBE\u8BA1\u3002\u800C\u4E0D\u662F\u5B9E\u65BD\u60F3\u5230\u7684\u7B2C\u4E00\u4E2A\u60F3\u6CD5\uFF0C\u8BF7\u5C1D\u8BD5\u51E0\u79CD\u66FF\u4EE3\u8BBE\u8BA1\u5E76\u9009\u62E9\u6700\u7B80\u6D01\u7684\u8BBE\u8BA1\u3002\u8BD5\u60F3\u4E00\u4E0B\u5C06\u6765\u53EF\u80FD\u9700\u8981\u66F4\u6539\u7CFB\u7EDF\u7684\u51E0\u79CD\u65B9\u5F0F\uFF0C\u5E76\u786E\u4FDD\u8BBE\u8BA1\u5BB9\u6613\u3002\u7F16\u5199\u597D\u7684\u6587\u6863\u662F\u4E3B\u52A8\u6295\u8D44\u7684\u53E6\u4E00\u4E2A\u4F8B\u5B50\u3002</p></blockquote><p>Other investments will be reactive. No matter how much you invest up front, there will inevitably be mistakes in your design decisions. Over time, these mistakes will become obvious. When you discover a design problem, don\u2019t just ignore it or patch around it; take a little extra time to fix it. If you program strategically, you will continually make small improvements to the system design. This is the opposite of tactical programming, where you are continually adding small bits of complexity that cause problems in the future.</p><blockquote><p>\u5176\u4ED6\u6295\u8D44\u5C06\u662F\u88AB\u52A8\u7684\u3002\u65E0\u8BBA\u60A8\u9884\u5148\u6295\u5165\u591A\u5C11\uFF0C\u8BBE\u8BA1\u51B3\u7B56\u4E2D\u90FD\u4E0D\u53EF\u907F\u514D\u5730\u4F1A\u51FA\u73B0\u9519\u8BEF\u3002\u968F\u7740\u65F6\u95F4\u7684\u6D41\u901D\uFF0C\u8FD9\u4E9B\u9519\u8BEF\u5C06\u53D8\u5F97\u663E\u800C\u6613\u89C1\u3002\u53D1\u73B0\u8BBE\u8BA1\u95EE\u9898\u65F6\uFF0C\u4E0D\u8981\u53EA\u662F\u5FFD\u7565\u5B83\u6216\u5BF9\u5176\u8FDB\u884C\u4FEE\u8865\u3002\u82B1\u4E00\u4E9B\u989D\u5916\u7684\u65F6\u95F4\u6765\u4FEE\u590D\u5B83\u3002\u5982\u679C\u60A8\u8FDB\u884C\u6218\u7565\u6027\u7F16\u7A0B\uFF0C\u5219\u5C06\u4E0D\u65AD\u5BF9\u7CFB\u7EDF\u8BBE\u8BA1\u8FDB\u884C\u5C0F\u5E45\u6539\u8FDB\u3002\u8FD9\u4E0E\u6218\u672F\u7F16\u7A0B\u76F8\u53CD\uFF0C\u5728\u6218\u672F\u7F16\u7A0B\u4E2D\uFF0C\u60A8\u4E0D\u65AD\u589E\u52A0\u4E00\u4E9B\u590D\u6742\u6027\uFF0C\u8FD9\u4E9B\u590D\u6742\u6027\u5C06\u6765\u4F1A\u5F15\u8D77\u95EE\u9898\u3002</p></blockquote><h2 id="_3-3-how-much-to-invest-\u6295\u8D44\u591A\u5C11" tabindex="-1"><a class="header-anchor" href="#_3-3-how-much-to-invest-\u6295\u8D44\u591A\u5C11" aria-hidden="true">#</a> 3.3 How much to invest? \u6295\u8D44\u591A\u5C11\uFF1F</h2><p>So, what is the right amount of investment? A huge up-front investment, such as trying to design the entire system, won\u2019t be effective. This is the waterfall method, and we know it doesn\u2019t work. The ideal design tends to emerge in bits and pieces, as you get experience with the system. Thus, the best approach is to make lots of small investments on a continual basis. I suggest spending about 10\u201320% of your total development time on investments. This amount is small enough that it won\u2019t impact your schedules significantly, but large enough to produce significant benefits over time. Your initial projects will thus take 10\u201320% longer than they would in a purely tactical approach. That extra time will result in a better software design, and you will start experiencing the benefits within a few months. It won\u2019t be long before you\u2019re developing at least 10\u201320% faster than you would if you had programmed tactically. At this point your investments become free: the benefits from your past investments will save enough time to cover the cost of future investments. You will quickly recover the cost of the initial investment. Figure 3.1 illustrates this phenomenon.</p><blockquote><p>\u90A3\u4E48\uFF0C\u6B63\u786E\u7684\u6295\u8D44\u989D\u662F\u591A\u5C11\uFF1F\u5927\u91CF\u7684\u524D\u671F\u6295\u8D44\uFF08\u4F8B\u5982\u5C1D\u8BD5\u8BBE\u8BA1\u6574\u4E2A\u7CFB\u7EDF\uFF09\u5C06\u4E0D\u4F1A\u6709\u6548\u3002\u8FD9\u662F\u7011\u5E03\u65B9\u6CD5\uFF0C\u6211\u4EEC\u77E5\u9053\u5B83\u4E0D\u8D77\u4F5C\u7528\u3002\u968F\u7740\u60A8\u5BF9\u7CFB\u7EDF\u7684\u4E86\u89E3\uFF0C\u7406\u60F3\u7684\u8BBE\u8BA1\u8D8B\u4E8E\u96F6\u788E\u51FA\u73B0\u3002\u56E0\u6B64\uFF0C\u6700\u597D\u7684\u65B9\u6CD5\u662F\u8FDE\u7EED\u8FDB\u884C\u5927\u91CF\u5C0F\u989D\u6295\u8D44 \u200B\u200B\u3002\u6211\u5EFA\u8BAE\u60A8\u5C06\u603B\u5F00\u53D1\u65F6\u95F4\u7684 10\uFF05\u5230 20\uFF05\u7528\u4E8E\u6295\u8D44\u3002\u8BE5\u91D1\u989D\u8DB3\u591F\u5C0F\uFF0C\u4E0D\u4F1A\u5BF9\u60A8\u7684\u65E5\u7A0B\u5B89\u6392\u4EA7\u751F\u91CD\u5927\u5F71\u54CD\uFF0C\u4F46\u53C8\u8DB3\u591F\u5927\uFF0C\u53EF\u4EE5\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\u4EA7\u751F\u91CD\u5927\u6536\u76CA\u3002\u56E0\u6B64\uFF0C\u60A8\u7684\u521D\u59CB\u9879\u76EE\u5C06\u6BD4\u7EAF\u6218\u672F\u65B9\u6CD5\u82B1\u8D39 10-20\uFF05\u7684\u65F6\u95F4\u3002\u989D\u5916\u7684\u65F6\u95F4\u5C06\u5E26\u6765\u66F4\u597D\u7684\u8F6F\u4EF6\u8BBE\u8BA1\uFF0C\u5E76\u4E14\u60A8\u5C06\u5728\u51E0\u4E2A\u6708\u5185\u5F00\u59CB\u4F53\u9A8C\u5230\u8FD9\u4E9B\u597D\u5904\u3002\u4E0D\u4E45\u4E4B\u540E\uFF0C\u60A8\u7684\u5F00\u53D1\u901F\u5EA6\u5C06\u6BD4\u6218\u672F\u7F16\u7A0B\u5FEB\u81F3\u5C11 10\u201320\uFF05\u3002\u5728\u8FD9\u4E00\u70B9\u4E0A\uFF0C\u60A8\u7684\u6295\u8D44\u5C06\u514D\u8D39\uFF1A\u60A8\u8FC7\u53BB\u6295\u8D44\u7684\u6536\u76CA\u5C06\u8282\u7701\u8DB3\u591F\u7684\u65F6\u95F4\u6765\u652F\u4ED8\u672A\u6765\u6295\u8D44\u7684\u8D39\u7528\u3002\u60A8\u5C06\u8FC5\u901F\u6536\u56DE\u521D\u59CB\u6295\u8D44\u7684\u6210\u672C\u3002\u56FE 3.1 \u8BF4\u660E\u4E86\u8FD9\u79CD\u73B0\u8C61\u3002</p></blockquote><p><img src="'+o+'" alt=""></p><p>Figure 3.1: At the beginning, a tactical approach to programming will make progress more quickly than a strategic approach. However, complexity accumulates more rapidly under the tactical approach, which reduces productivity. Over time, the strategic approach results in greater progress. Note: this figure is intended only as a qualitative illustration; I am not aware of any empirical measurements of the precise shapes of the curves.</p><blockquote><p>\u56FE 3.1\uFF1A\u4E00\u5F00\u59CB\uFF0C\u6218\u672F\u6027\u7684\u7F16\u7A0B\u65B9\u6CD5\u5C06\u6BD4\u6218\u7565\u6027\u65B9\u6CD5\u66F4\u5FEB\u5730\u53D6\u5F97\u8FDB\u5C55\u3002\u4F46\u662F\uFF0C\u5728\u6218\u672F\u65B9\u6CD5\u4E0B\uFF0C\u590D\u6742\u6027\u79EF\u7D2F\u5F97\u66F4\u5FEB\uFF0C\u4ECE\u800C\u964D\u4F4E\u4E86\u751F\u4EA7\u7387\u3002\u968F\u7740\u65F6\u95F4\u7684\u6D41\u901D\uFF0C\u6218\u7565\u65B9\u9488\u4F1A\u5E26\u6765\u66F4\u5927\u7684\u8FDB\u6B65\u3002\u6CE8\u610F\uFF1A\u6B64\u56FE\u4EC5\u7528\u4E8E\u5B9A\u6027\u8BF4\u660E\uFF1B\u6211\u4E0D\u77E5\u9053\u5BF9\u66F2\u7EBF\u7CBE\u786E\u5F62\u72B6\u7684\u4EFB\u4F55\u7ECF\u9A8C\u6D4B\u91CF\u3002</p></blockquote><p>Conversely, if you program tactically, you will finish your first projects 10\u201320% faster, but over time your development speed will slow as complexity accumulates. It won\u2019t be long before you\u2019re programming at least 10\u201320% slower. You will quickly give back all of the time you saved at the beginning, and for the rest of system\u2019s lifetime you will be developing more slowly than if you had taken the strategic approach. If you haven\u2019t ever worked in a badly degraded code base, talk to someone who has; they will tell you that poor code quality slows development by at least 20%.</p><blockquote><p>\u76F8\u53CD\uFF0C\u5982\u679C\u60A8\u8FDB\u884C\u6218\u672F\u7F16\u7A0B\uFF0C\u5219\u53EF\u4EE5\u5C06\u7B2C\u4E00\u4E2A\u9879\u76EE\u5B8C\u6210\u7684\u901F\u5EA6\u63D0\u9AD8 10\uFF05\u5230 20\uFF05\uFF0C\u4F46\u662F\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C\u590D\u6742\u6027\u7684\u7D2F\u79EF\u4F1A\u964D\u4F4E\u5F00\u53D1\u901F\u5EA6\u3002\u4E0D\u4E45\u4E4B\u540E\uFF0C\u60A8\u7684\u7F16\u7A0B\u901F\u5EA6\u81F3\u5C11\u4F1A\u964D\u4F4E 10\u201320\uFF05\u3002\u60A8\u5C06\u5F88\u5FEB\u9000\u56DE\u5728\u5F00\u59CB\u65F6\u4FDD\u5B58\u7684\u6240\u6709\u65F6\u95F4\uFF0C\u5E76\u4E14\u5728\u7CFB\u7EDF\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u4E2D\uFF0C\u4E0E\u91C7\u7528\u7B56\u7565\u6027\u65B9\u6CD5\u76F8\u6BD4\uFF0C\u60A8\u7684\u5F00\u53D1\u901F\u5EA6\u5C06\u66F4\u52A0\u7F13\u6162\u3002\u5982\u679C\u60A8\u4ECE\u672A\u4F7F\u7528\u8FC7\u4E25\u91CD\u964D\u7EA7\u7684\u4EE3\u7801\u5E93\uFF0C\u8BF7\u4E0E\u6709\u7ECF\u9A8C\u7684\u4EBA\u8054\u7CFB\u3002\u4ED6\u4EEC\u4F1A\u544A\u8BC9\u60A8\u4E0D\u826F\u7684\u4EE3\u7801\u8D28\u91CF\u4F1A\u4F7F\u5F00\u53D1\u901F\u5EA6\u81F3\u5C11\u964D\u4F4E 20\uFF05\u3002</p></blockquote><h2 id="_3-4-startups-and-investment-\u521B\u4E1A\u4E0E\u6295\u8D44" tabindex="-1"><a class="header-anchor" href="#_3-4-startups-and-investment-\u521B\u4E1A\u4E0E\u6295\u8D44" aria-hidden="true">#</a> 3.4 Startups and investment \u521B\u4E1A\u4E0E\u6295\u8D44</h2><p>In some environments there are strong forces working against the strategic approach. For example, early-stage startups feel tremendous pressure to get their early releases out quickly. In these companies, it might seem that even a 10\u201320% investment isn\u2019t affordable. As a result, many startups take a tactical approach, spending little effort on design and even less on cleanup when problems pop up. They rationalize this with the thought that, if they are successful, they\u2019ll have enough money to hire extra engineers to clean things up.</p><blockquote><p>\u5728\u67D0\u4E9B\u73AF\u5883\u4E2D\uFF0C\u5F3A\u5927\u7684\u529B\u91CF\u4E0E\u6218\u7565\u65B9\u6CD5\u80CC\u9053\u800C\u9A70\u3002\u4F8B\u5982\uFF0C\u65E9\u671F\u7684\u521D\u521B\u516C\u53F8\u611F\u5230\u5DE8\u5927\u7684\u538B\u529B\uFF0C\u9700\u8981\u5C3D\u5FEB\u53D1\u5E03\u5176\u65E9\u671F\u7248\u672C\u3002\u5728\u8FD9\u4E9B\u516C\u53F8\u4E2D\uFF0C\u751A\u81F3 10\uFF05\u81F3 20\uFF05\u7684\u6295\u8D44\u4F3C\u4E4E\u4E5F\u8D1F\u62C5\u4E0D\u8D77\u3002\u7ED3\u679C\uFF0C\u8BB8\u591A\u521D\u521B\u516C\u53F8\u91C7\u53D6\u4E86\u6218\u672F\u6027\u7684\u65B9\u6CD5\uFF0C\u5728\u8BBE\u8BA1\u4E0A\u82B1\u8D39\u4E86\u5F88\u5C11\u7684\u7CBE\u529B\uFF0C\u800C\u5728\u95EE\u9898\u51FA\u73B0\u65F6\u5219\u82B1\u8D39\u4E86\u66F4\u5C11\u7684\u7CBE\u529B\u8FDB\u884C\u6E05\u7406\u3002\u4ED6\u4EEC\u8BA4\u4E3A\uFF0C\u5982\u679C\u6210\u529F\uFF0C\u4ED6\u4EEC\u5C06\u6709\u8DB3\u591F\u7684\u94B1\u8058\u8BF7\u989D\u5916\u7684\u5DE5\u7A0B\u5E08\u6765\u6E05\u7406\u95EE\u9898\uFF0C\u4ECE\u800C\u4F7F\u5176\u5408\u7406\u5316\u3002</p></blockquote><p>If you are in a company leaning in this direction, you should realize that once a code base turns to spaghetti, it is nearly impossible to fix. You will probably pay high development costs for the life of the product. Furthermore, the payoff for good (or bad) design comes pretty quickly, so there\u2019s a good chance that the tactical approach won\u2019t even speed up your first product release.</p><blockquote><p>\u5982\u679C\u60A8\u662F\u4E00\u5BB6\u671D\u7740\u8FD9\u4E2A\u65B9\u5411\u53D1\u5C55\u7684\u516C\u53F8\uFF0C\u5219\u5E94\u8BE5\u610F\u8BC6\u5230\uFF0C\u4E00\u65E6\u4EE3\u7801\u5E93\u53D8\u6210\u4E86\u610F\u5927\u5229\u9762\u6761\uFF0C\u51E0\u4E4E\u662F\u4E0D\u53EF\u80FD\u4FEE\u590D\u7684\u3002\u60A8\u53EF\u80FD\u4F1A\u4E3A\u4EA7\u54C1\u7684\u4F7F\u7528\u5BFF\u547D\u4ED8\u51FA\u9AD8\u6602\u7684\u5F00\u53D1\u6210\u672C\u3002\u6B64\u5916\uFF0C\u597D\u7684\uFF08\u6216\u574F\u7684\uFF09\u8BBE\u8BA1\u7684\u56DE\u62A5\u5F88\u5FEB\u5C31\u4F1A\u5230\u6765\uFF0C\u56E0\u6B64\u6218\u672F\u65B9\u6CD5\u5F88\u6709\u53EF\u80FD\u751A\u81F3\u4E0D\u4F1A\u52A0\u5FEB\u60A8\u7684\u9996\u4E2A\u4EA7\u54C1\u53D1\u5E03\u7684\u901F\u5EA6\u3002</p></blockquote><p>Another thing to consider is that one of the most important factors for success of a company is the quality of its engineers. The best way to lower development costs is to hire great engineers: they don\u2019t cost much more than mediocre engineers but have tremendously higher productivity. However, the best engineers care deeply about good design. If your code base is a wreck, word will get out, and this will make it harder for you to recruit. As a result, you are likely to end up with mediocre engineers. This will increase your future costs and probably cause the system structure to degrade even more.</p><blockquote><p>\u8981\u8003\u8651\u7684\u53E6\u4E00\u4EF6\u4E8B\u662F\uFF0C\u516C\u53F8\u6210\u529F\u7684\u6700\u91CD\u8981\u56E0\u7D20\u4E4B\u4E00\u5C31\u662F\u5DE5\u7A0B\u5E08\u7684\u7D20\u8D28\u3002\u964D\u4F4E\u5F00\u53D1\u6210\u672C\u7684\u6700\u4F73\u65B9\u6CD5\u662F\u8058\u8BF7\u4F18\u79C0\u7684\u5DE5\u7A0B\u5E08\uFF1A\u4ED6\u4EEC\u7684\u6210\u672C\u4E0D\u4F1A\u6BD4\u666E\u901A\u5DE5\u7A0B\u5E08\u9AD8\u5F88\u591A\uFF0C\u4F46\u751F\u4EA7\u7387\u5374\u9AD8\u5F97\u591A\u3002\u4F46\u662F\uFF0C\u6700\u597D\u7684\u5DE5\u7A0B\u5E08\u5BF9\u826F\u597D\u7684\u8BBE\u8BA1\u6DF1\u611F\u5174\u8DA3\u3002\u5982\u679C\u60A8\u7684\u4EE3\u7801\u5E93\u5F88\u6B8B\u9177\uFF0C\u90A3\u4E48\u5355\u8BCD\u4F1A\u53D8\u5F97\u6BEB\u65E0\u7528\u5904\uFF0C\u8FD9\u5C06\u4F7F\u60A8\u96BE\u4EE5\u62DB\u52DF\u3002\u7ED3\u679C\uFF0C\u60A8\u6700\u7EC8\u53EF\u80FD\u4F1A\u9047\u5230\u666E\u901A\u7684\u5DE5\u7A0B\u5E08\u3002\u8FD9\u5C06\u589E\u52A0\u60A8\u7684\u672A\u6765\u6210\u672C\uFF0C\u5E76\u53EF\u80FD\u5BFC\u81F4\u7CFB\u7EDF\u7ED3\u6784\u8FDB\u4E00\u6B65\u9000\u5316\u3002</p></blockquote><p>Facebook is an example of a startup that encouraged tactical programming. For many years the company\u2019s motto was \u201CMove fast and break things.\u201D New engineers fresh out of college were encouraged to dive immediately into the company\u2019s code base; it was normal for engineers to push commits into production in their first week on the job. On the positive side, Facebook developed a reputation as a company that empowered its employees. Engineers had tremendous latitude, and there were few rules and restrictions to get in their way.</p><blockquote><p>Facebook \u662F\u4E00\u4E2A\u9F13\u52B1\u6218\u672F\u7F16\u7A0B\u7684\u521B\u4E1A\u516C\u53F8\u7684\u4F8B\u5B50\u3002\u591A\u5E74\u6765\uFF0C\u516C\u53F8\u7684\u5EA7\u53F3\u94ED\u662F\u201C\u5FEB\u901F\u884C\u52A8\u5E76\u6253\u7834\u56F0\u5883\u201D\u3002\u9F13\u52B1\u521A\u5927\u5B66\u6BD5\u4E1A\u7684\u65B0\u5DE5\u7A0B\u5E08\u7ACB\u5373\u6DF1\u5165\u516C\u53F8\u7684\u4EE3\u7801\u5E93\uFF1B\u5DE5\u7A0B\u5E08\u5728\u5DE5\u4F5C\u7684\u7B2C\u4E00\u5468\u5C06\u627F\u8BFA\u6295\u5165\u751F\u4EA7\u662F\u5F88\u6B63\u5E38\u7684\u3002\u4ECE\u79EF\u6781\u7684\u4E00\u9762\u6765\u770B\uFF0CFacebook \u4F5C\u4E3A\u4E00\u5BB6\u8D4B\u4E88\u5458\u5DE5\u6743\u529B\u7684\u516C\u53F8\u800C\u4EAB\u6709\u58F0\u8A89\u3002\u5DE5\u7A0B\u5E08\u62E5\u6709\u6781\u5927\u7684\u81EA\u7531\u5EA6\uFF0C\u5E76\u4E14\u51E0\u4E4E\u6CA1\u6709\u4EFB\u4F55\u89C4\u5219\u548C\u9650\u5236\u3002</p></blockquote><p>Facebook has been spectacularly successful as a company, but its code base suffered because of the company\u2019s tactical approach; much of the code was unstable and hard to understand, with few comments or tests, and painful to work with. Over time the company realized that its culture was unsustainable. Eventually, Facebook changed its motto to \u201CMove fast with solid infrastructure\u201D to encourage its engineers to invest more in good design. It remains to be seen whether Facebook can successfully clean up the problems that accumulated over years of tactical programming.</p><blockquote><p>Facebook \u4F5C\u4E3A\u4E00\u5BB6\u516C\u53F8\u5DF2\u7ECF\u53D6\u5F97\u4E86\u4EE4\u4EBA\u77A9\u76EE\u7684\u6210\u529F\uFF0C\u4F46\u662F\u7531\u4E8E\u8BE5\u516C\u53F8\u7684\u6218\u672F\u65B9\u6CD5\uFF0C\u5176\u4EE3\u7801\u5E93\u53D7\u5230\u4E86\u5F71\u54CD\u3002\u8BB8\u591A\u4EE3\u7801\u4E0D\u7A33\u5B9A\u4E14\u96BE\u4EE5\u7406\u89E3\uFF0C\u51E0\u4E4E\u6CA1\u6709\u6CE8\u91CA\u6216\u6D4B\u8BD5\uFF0C\u5E76\u4E14\u4F7F\u7528\u8D77\u6765\u5F88\u75DB\u82E6\u3002\u968F\u7740\u65F6\u95F4\u7684\u6D41\u901D\uFF0C\u8BE5\u516C\u53F8\u610F\u8BC6\u5230\u5176\u6587\u5316\u662F\u4E0D\u53EF\u6301\u7EED\u7684\u3002\u6700\u7EC8\uFF0CFacebook \u6539\u53D8\u4E86\u5EA7\u53F3\u94ED\uFF0C\u5373\u201C\u4EE5\u575A\u5B9E\u7684\u57FA\u7840\u67B6\u6784\u5FEB\u901F\u79FB\u52A8\u201D\uFF0C\u4EE5\u9F13\u52B1\u5176\u5DE5\u7A0B\u5E08\u5728\u826F\u597D\u7684\u8BBE\u8BA1\u4E0A\u8FDB\u884C\u66F4\u591A\u7684\u6295\u8D44\u3002Facebook \u662F\u5426\u80FD\u591F\u6210\u529F\u6E05\u9664\u591A\u5E74\u6765\u6218\u672F\u7F16\u7A0B\u4E2D\u79EF\u7D2F\u7684\u95EE\u9898\u8FD8\u6709\u5F85\u89C2\u5BDF\u3002</p></blockquote><p>In fairness to Facebook, I should point out that Facebook\u2019s code probably isn\u2019t much worse than average among startups. Tactical programming is commonplace among startups; Facebook just happens to be a particularly visible example.</p><blockquote><p>\u4E3A\u4E86\u516C\u5E73\u8D77\u89C1\uFF0C\u6211\u5E94\u8BE5\u6307\u51FA\uFF0CFacebook \u7684\u4EE3\u7801\u53EF\u80FD\u5E76\u4E0D\u6BD4\u521D\u521B\u516C\u53F8\u7684\u5E73\u5747\u6C34\u5E73\u5DEE\u5F88\u591A\u3002\u6218\u672F\u7F16\u7A0B\u5728\u521D\u521B\u4F01\u4E1A\u4E2D\u53F8\u7A7A\u89C1\u60EF\u3002Facebook \u6070\u597D\u662F\u4E00\u4E2A\u7279\u522B\u660E\u663E\u7684\u4F8B\u5B50\u3002</p></blockquote><p>Fortunately, it is also possible to succeed in Silicon Valley with a strategic approach. Google and VMware grew up around the same time as Facebook, but both of these companies embraced a more strategic approach. Both companies placed a heavy emphasis on high quality code and good design, and both companies built sophisticated products that solved complex problems with reliable software systems. The companies\u2019 strong technical cultures became well known in Silicon Valley. Few other companies could compete with them for hiring the top technical talent.</p><blockquote><p>\u5E78\u8FD0\u7684\u662F\uFF0C\u901A\u8FC7\u6218\u7565\u65B9\u6CD5\u4E5F\u6709\u53EF\u80FD\u5728\u7845\u8C37\u53D6\u5F97\u6210\u529F\u3002Google \u548C VMware \u4E0E Facebook \u5DEE\u4E0D\u591A\u540C\u65F6\u6210\u957F\uFF0C\u4F46\u662F\u8FD9\u4E24\u5BB6\u516C\u53F8\u90FD\u91C7\u7528\u4E86\u66F4\u5177\u6218\u7565\u610F\u4E49\u7684\u65B9\u6CD5\u3002\u4E24\u5BB6\u516C\u53F8\u90FD\u975E\u5E38\u91CD\u89C6\u9AD8\u8D28\u91CF\u7684\u4EE3\u7801\u548C\u826F\u597D\u7684\u8BBE\u8BA1\uFF0C\u5E76\u4E14\u4E24\u5BB6\u516C\u53F8\u90FD\u5F00\u53D1\u4E86\u590D\u6742\u7684\u4EA7\u54C1\uFF0C\u8FD9\u4E9B\u4EA7\u54C1\u901A\u8FC7\u53EF\u9760\u7684\u8F6F\u4EF6\u7CFB\u7EDF\u89E3\u51B3\u4E86\u590D\u6742\u7684\u95EE\u9898\u3002\u516C\u53F8\u7684\u5F3A\u5927\u6280\u672F\u6587\u5316\u5728\u7845\u8C37\u5E7F\u4E3A\u4EBA\u77E5\u3002\u5F88\u5C11\u6709\u5176\u4ED6\u516C\u53F8\u53EF\u4EE5\u4E0E\u4ED6\u4EEC\u7ADE\u4E89\u8058\u8BF7\u9876\u7EA7\u6280\u672F\u4EBA\u624D\u3002</p></blockquote><p>These examples show that a company can succeed with either approach. However, it\u2019s a lot more fun to work in a company that cares about software design and has a clean code base.</p><blockquote><p>\u8FD9\u4E9B\u4F8B\u5B50\u8868\u660E\uFF0C\u4E00\u5BB6\u516C\u53F8\u53EF\u4EE5\u6210\u529F\u4F7F\u7528\u4EFB\u4F55\u4E00\u79CD\u65B9\u6CD5\u3002\u4F46\u662F\uFF0C\u5728\u4E00\u5BB6\u5173\u5FC3\u8F6F\u4EF6\u8BBE\u8BA1\u5E76\u62E5\u6709\u6E05\u6670\u4EE3\u7801\u57FA\u7840\u7684\u516C\u53F8\u4E2D\u5DE5\u4F5C\u4F1A\u6709\u8DA3\u5F97\u591A\u3002</p></blockquote><h2 id="_3-5-conclusion-\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#_3-5-conclusion-\u7ED3\u8BBA" aria-hidden="true">#</a> 3.5 Conclusion \u7ED3\u8BBA</h2><p>Good design doesn\u2019t come for free. It has to be something you invest in continually, so that small problems don\u2019t accumulate into big ones. Fortunately, good design eventually pays for itself, and sooner than you might think.</p><blockquote><p>\u597D\u7684\u8BBE\u8BA1\u4E0D\u662F\u514D\u8D39\u7684\u3002\u5B83\u5FC5\u987B\u662F\u60A8\u4E0D\u65AD\u6295\u8D44\u7684\u4E1C\u897F\uFF0C\u8FD9\u6837\u5C0F\u95EE\u9898\u624D\u4E0D\u4F1A\u7D2F\u79EF\u6210\u5927\u95EE\u9898\u3002\u5E78\u8FD0\u7684\u662F\uFF0C\u597D\u7684\u8BBE\u8BA1\u6700\u7EC8\u4F1A\u6536\u56DE\u6210\u672C\uFF0C\u800C\u4E14\u6BD4\u60A8\u60F3\u8C61\u7684\u8981\u65E9\u3002</p></blockquote><p>It\u2019s crucial to be consistent in applying the strategic approach and to think of investment as something to do today, not tomorrow. When you get in a crunch it will be tempting to put off cleanups until after the crunch is over. However, this is a slippery slope; after the current crunch there will almost certainly be another one, and another after that. Once you start delaying design improvements, it\u2019s easy for the delays to become permanent and for your culture to slip into the tactical approach. The longer you wait to address design problems, the bigger they become; the solutions become more intimidating, which makes it easy to put them off even more. The most effective approach is one where every engineer makes continuous small investments in good design.</p><blockquote><p>\u59CB\u7EC8\u5982\u4E00\u5730\u8FD0\u7528\u6218\u7565\u65B9\u6CD5\u5E76\u5C06\u6295\u8D44\u89C6\u4E3A\u4ECA\u5929\u800C\u4E0D\u662F\u660E\u5929\u8981\u505A\u7684\u4E8B\u60C5\u81F3\u5173\u91CD\u8981\u3002\u5F53\u60A8\u9677\u5165\u5371\u673A\u65F6\uFF0C\u5F88\u5BB9\u6613\u63A8\u8FDF\u6E05\u7406\uFF0C\u76F4\u5230\u5371\u673A\u7ED3\u675F\u4E4B\u540E\u3002\u4F46\u662F\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6E7F\u6ED1\u7684\u659C\u5761\u3002\u5728\u5F53\u524D\u7D27\u7F29\u4E4B\u540E\uFF0C\u51E0\u4E4E\u80AF\u5B9A\u4F1A\u518D\u51FA\u73B0\u4E00\u6B21\u3002\u4E00\u65E6\u5F00\u59CB\u5EF6\u8FDF\u8BBE\u8BA1\u6539\u8FDB\uFF0C\u5C31\u5F88\u5BB9\u6613\u4F7F\u5EF6\u8FDF\u6C38\u4E45\u5316\uFF0C\u5E76\u4F7F\u60A8\u7684\u6587\u5316\u9677\u5165\u6218\u672F\u65B9\u6CD5\u4E2D\u3002\u60A8\u7B49\u5F85\u89E3\u51B3\u8BBE\u8BA1\u95EE\u9898\u7684\u65F6\u95F4\u8D8A\u957F\uFF0C\u95EE\u9898\u5C31\u4F1A\u53D8\u5F97\u8D8A\u5927\uFF1B\u89E3\u51B3\u65B9\u6848\u53D8\u5F97\u66F4\u52A0\u4EE4\u4EBA\u751F\u754F\uFF0C\u8FD9\u4F7F\u5F97\u8F7B\u677E\u63A8\u8FDF\u89E3\u51B3\u65B9\u6848\u53D8\u5F97\u66F4\u52A0\u5BB9\u6613\u3002\u6700\u6709\u6548\u7684\u65B9\u6CD5\u662F\uFF0C\u6BCF\u4F4D\u5DE5\u7A0B\u5E08\u90FD\u5BF9\u826F\u597D\u7684\u8BBE\u8BA1\u8FDB\u884C\u8FDE\u7EED\u7684\u5C11\u91CF\u6295\u8D44\u3002</p></blockquote>',56);function s(r,n){return i}var l=e(a,[["render",s],["__file","ch03.html.vue"]]);export{l as default};
