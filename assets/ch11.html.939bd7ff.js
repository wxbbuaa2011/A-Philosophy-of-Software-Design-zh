import{_ as e,e as t}from"./app.a44a25c8.js";const o={},i=t('<h1 id="\u7B2C-11-\u7AE0-\u8BBE\u8BA1\u4E24\u6B21" tabindex="-1"><a class="header-anchor" href="#\u7B2C-11-\u7AE0-\u8BBE\u8BA1\u4E24\u6B21" aria-hidden="true">#</a> \u7B2C 11 \u7AE0 \u8BBE\u8BA1\u4E24\u6B21</h1><blockquote><p>Chapter 11 Design it Twice</p></blockquote><blockquote><p>Designing software is hard, so it\u2019s unlikely that your first thoughts about how to structure a module or system will produce the best design. You\u2019ll end up with a much better result if you consider multiple options for each major design decision: design it twice.</p></blockquote><p>\u8BBE\u8BA1\u8F6F\u4EF6\u975E\u5E38\u56F0\u96BE\uFF0C\u56E0\u6B64\u60A8\u5BF9\u5982\u4F55\u6784\u9020\u6A21\u5757\u6216\u7CFB\u7EDF\u7684\u521D\u6B65\u601D\u8003\u4E0D\u592A\u53EF\u80FD\u4F1A\u4EA7\u751F\u6700\u4F73\u7684\u8BBE\u8BA1\u3002\u5982\u679C\u4E3A\u6BCF\u4E2A\u4E3B\u8981\u8BBE\u8BA1\u51B3\u7B56\u8003\u8651\u591A\u4E2A\u9009\u9879\uFF0C\u6700\u7EC8\u5C06\u83B7\u5F97\u66F4\u597D\u7684\u7ED3\u679C\uFF1A\u8BBE\u8BA1\u4E24\u6B21\u3002</p><blockquote><p>Suppose you are designing the class that will manage the text of a file for a GUI text editor. The first step is to define the interface that the class will present to the rest of the editor; rather than picking the first idea that comes to mind, consider several possibilities. One choice is a line-oriented interface, with operations to insert, modify, and delete whole lines of text. Another option is an interface based on individual character insertions and deletions. A third choice is a string-oriented interface, which operates on arbitrary ranges of characters that may cross line boundaries. You don\u2019t need to pin down every feature of each alternative; it\u2019s sufficient at this point to sketch out a few of the most important methods.</p></blockquote><p>\u5047\u8BBE\u60A8\u6B63\u5728\u8BBE\u8BA1\u7528\u4E8E\u7BA1\u7406 GUI \u6587\u672C\u7F16\u8F91\u5668\u6587\u4EF6\u6587\u672C\u7684\u7C7B\u3002\u7B2C\u4E00\u6B65\u662F\u5B9A\u4E49\u8BE5\u7C7B\u5C06\u5448\u73B0\u7ED9\u7F16\u8F91\u5668\u5176\u4F59\u90E8\u5206\u7684\u63A5\u53E3\u3002\u4E0E\u5176\u9009\u62E9\u60F3\u5230\u7684\u7B2C\u4E00\u4E2A\u60F3\u6CD5\uFF0C\u4E0D\u5982\u8003\u8651\u51E0\u79CD\u53EF\u80FD\u6027\u3002\u4E00\u79CD\u9009\u62E9\u662F\u9762\u5411\u884C\u7684\u754C\u9762\uFF0C\u8BE5\u754C\u9762\u5177\u6709\u63D2\u5165\uFF0C\u4FEE\u6539\u548C\u5220\u9664\u6574\u884C\u6587\u672C\u7684\u64CD\u4F5C\u3002\u53E6\u4E00\u4E2A\u9009\u62E9\u662F\u57FA\u4E8E\u5355\u4E2A\u5B57\u7B26\u63D2\u5165\u548C\u5220\u9664\u7684\u63A5\u53E3\u3002\u7B2C\u4E09\u79CD\u9009\u62E9\u662F\u9762\u5411\u5B57\u7B26\u4E32\u7684\u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u53EF\u5BF9\u53EF\u80FD\u8DE8\u8D8A\u7EBF\u8FB9\u754C\u7684\u4EFB\u610F\u8303\u56F4\u7684\u5B57\u7B26\u8FDB\u884C\u64CD\u4F5C\u3002\u60A8\u65E0\u9700\u786E\u5B9A\u6BCF\u4E2A\u66FF\u4EE3\u65B9\u6848\u7684\u6BCF\u4E2A\u529F\u80FD\uFF1B\u5728\u8FD9\u4E00\u70B9\u4E0A\uFF0C\u52FE\u52D2\u51FA\u4E00\u4E9B\u6700\u91CD\u8981\u7684\u65B9\u6CD5\u5C31\u8DB3\u591F\u4E86\u3002</p><blockquote><p>Try to pick approaches that are radically different from each other; you\u2019ll learn more that way. Even if you are certain that there is only one reasonable approach, consider a second design anyway, no matter how bad you think it will be. It will be instructive to think about the weaknesses of that design and contrast them with the features of other designs.</p></blockquote><p>\u5C1D\u8BD5\u9009\u62E9\u5F7C\u6B64\u6839\u672C\u4E0D\u540C\u7684\u65B9\u6CD5\uFF1B\u8FD9\u6837\u60A8\u5C06\u5B66\u5230\u66F4\u591A\u3002\u5373\u4F7F\u4F60\u786E\u5B9A\u53EA\u6709\u4E00\u79CD\u5408\u7406\u7684\u65B9\u6CD5\uFF0C\u65E0\u8BBA\u5982\u4F55\u4E5F\u8981\u8003\u8651\u7B2C\u4E8C\u79CD\u8BBE\u8BA1\uFF0C\u4E0D\u7BA1\u4F60\u8BA4\u4E3A\u5B83\u6709\u591A\u7CDF\u7CD5\u3002\u8003\u8651\u8BE5\u8BBE\u8BA1\u7684\u5F31\u70B9\u5E76\u5C06\u5B83\u4EEC\u4E0E\u5176\u4ED6\u8BBE\u8BA1\u7684\u7279\u5F81\u8FDB\u884C\u5BF9\u6BD4\u5C06\u5F88\u6709\u542F\u53D1\u6027\u3002</p><blockquote><p>After you have roughed out the designs for the alternatives, make a list of the pros and cons of each one. The most important consideration for an interface is ease of use for higher level software. In the example above, both the line-oriented interface and the character-oriented interface will require extra work in software that uses the text class. The line-oriented interface will require higher level software to split and join lines during partial-line and multi-line operations such as cutting and pasting the selection. The character-oriented interface will require loops to implement operations that modify more than a single character. It is also worth considering other factors:</p></blockquote><p>\u5728\u4F60\u7C97\u7565\u5730\u8BBE\u8BA1\u51FA\u53EF\u4F9B\u9009\u62E9\u7684\u65B9\u6848\u540E\uFF0C\u5217\u51FA\u6BCF\u4E2A\u65B9\u6848\u7684\u4F18\u7F3A\u70B9\u3002\u5BF9\u9AD8\u7EA7\u8F6F\u4EF6\u7684\u6613\u7528\u6027\u662F\u63A5\u53E3\u6700\u91CD\u8981\u7684\u8003\u8651\u56E0\u7D20\u3002\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u9762\u5411\u884C\u7684\u63A5\u53E3\u548C\u9762\u5411\u5B57\u7B26\u7684\u63A5\u53E3\u90FD\u9700\u8981\u4F7F\u7528\u6587\u672C\u7C7B\u7684\u8F6F\u4EF6\u4E2D\u505A\u989D\u5916\u5DE5\u4F5C\u3002\u9762\u5411\u884C\u7684\u63A5\u53E3\u5C06\u9700\u8981\u66F4\u9AD8\u7EA7\u522B\u7684\u8F6F\u4EF6\u6765\u5728\u90E8\u5206\u884C\u548C\u591A\u884C\u64CD\u4F5C\uFF08\u4F8B\u5982\u526A\u5207\u548C\u7C98\u8D34\u6240\u9009\u5185\u5BB9\uFF09\u671F\u95F4\u62C6\u5206\u548C\u5408\u5E76\u884C\u3002\u9762\u5411\u5B57\u7B26\u7684\u63A5\u53E3\u5C06\u9700\u8981\u5FAA\u73AF\u6765\u5B9E\u73B0\u4FEE\u6539\u591A\u4E2A\u5B57\u7B26\u7684\u64CD\u4F5C\u3002\u8FD8\u503C\u5F97\u8003\u8651\u5176\u4ED6\u56E0\u7D20\uFF1A</p><blockquote><ul><li>Does one alternative have a simpler interface than another? In the text example, all of the text interfaces are relatively simple.</li><li>Is one interface more general-purpose than another?</li><li>Does one interface enable a more efficient implementation than another? In the text example, the character-oriented approach is likely to be significantly slower than the others, because it requires a separate call into the text module for each character.</li></ul></blockquote><hr><ul><li>\u4E00\u79CD\u9009\u62E9\u662F\u5426\u5177\u6709\u6BD4\u53E6\u4E00\u79CD\u6709\u66F4\u7B80\u5355\u7684\u63A5\u53E3\uFF1F\u5728\u6587\u672C\u793A\u4F8B\u4E2D\uFF0C\u6240\u6709\u6587\u672C\u63A5\u53E3\u90FD\u76F8\u5BF9\u7B80\u5355\u3002</li><li>\u4E00\u4E2A\u63A5\u53E3\u6BD4\u53E6\u4E00\u4E2A\u63A5\u53E3\u66F4\u901A\u7528\u5417\uFF1F</li><li>\u4E00\u4E2A\u63A5\u53E3\u7684\u5B9E\u73B0\u662F\u5426\u6BD4\u53E6\u4E00\u4E2A\u63A5\u53E3\u7684\u5B9E\u73B0\u66F4\u6709\u6548\u7387\uFF1F\u5728\u6587\u672C\u793A\u4F8B\u4E2D\uFF0C\u9762\u5411\u5B57\u7B26\u7684\u65B9\u6CD5\u53EF\u80FD\u6BD4\u5176\u4ED6\u65B9\u6CD5\u6162\u5F97\u591A\uFF0C\u56E0\u4E3A\u5B83\u9700\u8981\u4E3A\u6BCF\u4E2A\u5B57\u7B26\u5355\u72EC\u8C03\u7528\u6587\u672C\u6A21\u5757\u3002</li></ul><blockquote><p>Once you have compared alternative designs, you will be in a better position to identify the best design. The best choice may be one of the alternatives, or you may discover that you can combine features of multiple alternatives into a new design that is better than any of the original choices.</p></blockquote><p>\u6BD4\u8F83\u4E86\u5907\u9009\u8BBE\u8BA1\u4E4B\u540E\uFF0C\u60A8\u5C06\u53EF\u4EE5\u66F4\u597D\u5730\u786E\u5B9A\u6700\u4F73\u8BBE\u8BA1\u3002\u6700\u4F73\u9009\u62E9\u53EF\u80FD\u662F\u8FD9\u4E9B\u9009\u62E9\u4E4B\u4E00\uFF0C\u6216\u8005\u60A8\u53EF\u80FD\u4F1A\u53D1\u73B0\uFF0C\u60A8\u53EF\u4EE5\u5C06\u591A\u79CD\u9009\u62E9\u7684\u7279\u6027\u7ED3\u5408\u5230\u4E00\u4E2A\u65B0\u7684\u8BBE\u8BA1\u4E2D\uFF0C\u8FD9\u4E2A\u65B0\u7684\u8BBE\u8BA1\u6BD4\u4EFB\u4F55\u6700\u521D\u7684\u9009\u62E9\u90FD\u8981\u597D\u3002</p><blockquote><p>Sometimes none of the alternatives is particularly attractive; when this happens, see if you can come up with additional schemes. Use the problems you identified with the original alternatives to drive the new design(s). If you were designing the text class and considered only the line-oriented and character-oriented approaches, you might notice that each of the alternatives is awkward because it requires higher level software to perform additional text manipulations. That\u2019s a red flag: if there\u2019s going to be a text class, it should handle all of the text manipulation. In order to eliminate the additional text manipulations, the text interface needs to match more closely the operations happening in higher level software. These operations don\u2019t always correspond to single characters or single lines. This line of reasoning should lead you to a range-oriented API for text, which eliminates the problem with the earlier designs.</p></blockquote><p>\u6709\u65F6\u6240\u6709\u7684\u5907\u9009\u8BBE\u8BA1\u90FD\u6CA1\u6709\u7279\u522B\u7684\u5438\u5F15\u529B\u3002\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\u65F6\uFF0C\u770B\u770B\u662F\u5426\u53EF\u4EE5\u63D0\u51FA\u5176\u4ED6\u65B9\u6848\u3002\u4F7F\u7528\u60A8\u5728\u5907\u9009\u8BBE\u8BA1\u4E2D\u53D1\u73B0\u7684\u95EE\u9898\u6765\u63A8\u52A8\u65B0\u8BBE\u8BA1\u3002\u5982\u679C\u60A8\u5728\u8BBE\u8BA1\u6587\u672C\u7C7B\u5E76\u4E14\u4EC5\u8003\u8651\u9762\u5411\u884C\u548C\u9762\u5411\u5B57\u7B26\u7684\u65B9\u6CD5\uFF0C\u5219\u53EF\u80FD\u4F1A\u6CE8\u610F\u5230\u6BCF\u4E2A\u66FF\u4EE3\u65B9\u6848\u90FD\u6BD4\u8F83\u7B28\u62D9\uFF0C\u56E0\u4E3A\u5B83\u9700\u8981\u66F4\u9AD8\u7EA7\u522B\u7684\u8F6F\u4EF6\u6765\u6267\u884C\u5176\u4ED6\u6587\u672C\u64CD\u4F5C\u3002\u90A3\u662F\u4E00\u4E2A\u5371\u9669\u4FE1\u53F7\uFF1A\u5982\u679C\u8981\u6709\u4E00\u4E2A\u6587\u672C\u7C7B\uFF0C\u5B83\u5E94\u8BE5\u5904\u7406\u6240\u6709\u6587\u672C\u64CD\u4F5C\u3002\u4E3A\u4E86\u6D88\u9664\u5176\u4ED6\u6587\u672C\u64CD\u4F5C\uFF0C\u6587\u672C\u754C\u9762\u9700\u8981\u66F4\u7D27\u5BC6\u5730\u5339\u914D\u9AD8\u7EA7\u8F6F\u4EF6\u4E2D\u53D1\u751F\u7684\u64CD\u4F5C\u3002\u8FD9\u4E9B\u64CD\u4F5C\u5E76\u4E0D\u603B\u662F\u5BF9\u5E94\u4E8E\u5355\u4E2A\u5B57\u7B26\u6216\u4E00\u884C\u3002\u8FD9\u79CD\u63A8\u7406\u65B9\u5F0F\u5E94\u8BE5\u4F1A\u8BA9\u4F60\u627E\u5230\u4E00\u4E2A\u9762\u5411\u8303\u56F4\u7684\u6587\u672C API\uFF0C\u5B83\u6D88\u9664\u4E86\u65E9\u671F\u8BBE\u8BA1\u7684\u95EE\u9898\u3002</p><blockquote><p>The design-it-twice principle can be applied at many levels in a system. For a module, you can use this approach first to pick the interface, as described above. Then you can apply it again when you are designing the implementation: for the text class, you might consider implementations such as a linked list of lines, fixed-size blocks of characters, or a \u201Cgap buffer.\u201D The goals will be different for the implementation than for the interface: for the implementation, the most important things are simplicity and performance. It\u2019s also useful to explore multiple designs at higher levels in the system, such as when choosing features for a user interface, or when decomposing a system into major modules. In each case, it\u2019s easier to identify the best approach if you can compare a few alternatives.</p></blockquote><p>\u8BBE\u8BA1\u4E24\u6B21\u539F\u5219\u53EF\u4EE5\u5728\u7CFB\u7EDF\u7684\u8BB8\u591A\u7EA7\u522B\u4E0A\u5E94\u7528\u3002\u5BF9\u4E8E\u6A21\u5757\uFF0C\u60A8\u53EF\u4EE5\u9996\u5148\u4F7F\u7528\u6B64\u65B9\u6CD5\u6765\u9009\u62E9\u63A5\u53E3\uFF0C\u5982\u4E0A\u6240\u8FF0\u3002\u7136\u540E\uFF0C\u60A8\u53EF\u4EE5\u5728\u8BBE\u8BA1\u5B9E\u73B0\u65F6\u518D\u6B21\u5E94\u7528\u5B83\uFF1A\u5BF9\u4E8E\u6587\u672C\u7C7B\uFF0C\u60A8\u53EF\u4EE5\u8003\u8651\u5B9E\u73B0\u8FD9\u4E9B\u5B9E\u73B0\uFF0C\u4F8B\u5982\u884C\u7684\u94FE\u63A5\u5217\u8868\uFF0C\u56FA\u5B9A\u5927\u5C0F\u7684\u5B57\u7B26\u5757\u6216\u201C\u95F4\u9699\u7F13\u51B2\u533A\u201D\u3002\u5B9E\u73B0\u7684\u76EE\u6807\u4E0E\u63A5\u53E3\u7684\u76EE\u6807\u662F\u4E0D\u540C\u7684\uFF1A\u5BF9\u4E8E\u5B9E\u73B0\uFF0C\u6700\u91CD\u8981\u7684\u662F\u7B80\u5355\u6027\u548C\u6027\u80FD\u3002\u5728\u7CFB\u7EDF\u7684\u66F4\u9AD8\u5C42\u6B21\u4E0A\u63A2\u7D22\u591A\u79CD\u8BBE\u8BA1\u4E5F\u5F88\u6709\u7528\uFF0C\u4F8B\u5982\u5728\u4E3A\u7528\u6237\u754C\u9762\u9009\u62E9\u529F\u80FD\u6216\u5C06\u7CFB\u7EDF\u5206\u89E3\u4E3A\u4E3B\u8981\u6A21\u5757\u65F6\u3002\u5728\u6BCF\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u60A8\u53EF\u4EE5\u6BD4\u8F83\u51E0\u79CD\u9009\u62E9\uFF0C\u5219\u66F4\u5BB9\u6613\u786E\u5B9A\u6700\u4F73\u65B9\u6CD5\u3002</p><blockquote><p>Designing it twice does not need to take a lot of extra time. For a smaller module such as a class, you may not need more than an hour or two to consider alternatives. This is a small amount of time compared to the days or weeks you will spend implementing the class. The initial design experiments will probably result in a significantly better design, which will more than pay for the time spent designing it twice. For larger modules you\u2019ll spend more time in the initial design explorations, but the implementation will also take longer, and the benefits of a better design will also be higher.</p></blockquote><p>\u8BBE\u8BA1\u4E24\u6B21\u4E0D\u9700\u8981\u82B1\u8D39\u5F88\u591A\u989D\u5916\u7684\u65F6\u95F4\u3002\u5BF9\u4E8E\u8F83\u5C0F\u7684\u6A21\u5757\u6BD4\u5982\u7C7B\uFF0C\u60A8\u53EF\u80FD\u4E0D\u9700\u8981\u4E00\u4E24\u4E2A\u5C0F\u65F6\u53BB\u601D\u8003\u5907\u9009\u8BBE\u8BA1\u3002\u4E0E\u60A8\u5C06\u82B1\u8D39\u6570\u5929\u6216\u6570\u5468\u65F6\u95F4\u6765\u5B9E\u73B0\u8BE5\u7C7B\u76F8\u6BD4\uFF0C\u8FD9\u662F\u5F88\u5C11\u7684\u65F6\u95F4\u3002\u6700\u521D\u7684\u8BBE\u8BA1\u5B9E\u9A8C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u660E\u663E\u66F4\u597D\u7684\u8BBE\u8BA1\uFF0C\u8FD9\u5C06\u6BD4\u82B1\u4E24\u6B21\u8BBE\u8BA1\u65F6\u95F4\u6240\u82B1\u7684\u65F6\u95F4\u591A\u3002\u5BF9\u4E8E\u8F83\u5927\u7684\u6A21\u5757\uFF0C\u60A8\u5C06\u82B1\u8D39\u66F4\u591A\u7684\u65F6\u95F4\u8FDB\u884C\u521D\u59CB\u8BBE\u8BA1\u63A2\u7D22\uFF0C\u4F46\u662F\u5B9E\u73B0\u4E5F\u5C06\u82B1\u8D39\u66F4\u957F\u7684\u65F6\u95F4\uFF0C\u5E76\u4E14\u66F4\u597D\u7684\u8BBE\u8BA1\u6240\u5E26\u6765\u7684\u597D\u5904\u4E5F\u4F1A\u66F4\u9AD8\u3002</p><blockquote><p>I have noticed that the design-it-twice principle is sometimes hard for really smart people to embrace. When they are growing up, smart people discover that their first quick idea about any problem is sufficient for a good grade; there is no need to consider a second or third possibility. This makes it easy to develop bad work habits. However, as these people get older, they get promoted into environments with harder and harder problems. Eventually, everyone reaches a point where your first ideas are no longer good enough; if you want to get really great results, you have to consider a second possibility, or perhaps a third, no matter how smart you are. The design of large software systems falls in this category: no-one is good enough to get it right with their first try.</p></blockquote><p>\u6211\u5DF2\u7ECF\u6CE8\u610F\u5230\uFF0C\u771F\u6B63\u806A\u660E\u7684\u4EBA\u6709\u65F6\u5F88\u96BE\u63A5\u53D7\u8BBE\u8BA1\u4E24\u6B21\u539F\u5219\u3002\u5F53\u4ED6\u4EEC\u957F\u5927\u540E\uFF0C\u806A\u660E\u7684\u4EBA\u4F1A\u53D1\u73B0\uFF0C\u4ED6\u4EEC\u5BF9\u4EFB\u4F55\u95EE\u9898\u7684\u7B2C\u4E00\u4E2A\u5FEB\u901F\u6784\u60F3\u5C31\u8DB3\u4EE5\u53D6\u5F97\u826F\u597D\u7684\u6210\u7EE9\u3002\u65E0\u9700\u8003\u8651\u7B2C\u4E8C\u79CD\u6216\u7B2C\u4E09\u79CD\u53EF\u80FD\u6027\u3002\u8FD9\u4F7F\u5F97\u5BB9\u6613\u517B\u6210\u4E0D\u826F\u7684\u5DE5\u4F5C\u4E60\u60EF\u3002\u4F46\u662F\uFF0C\u968F\u7740\u8FD9\u4E9B\u4EBA\u53D8\u8001\uFF0C\u4ED6\u4EEC\u5C06\u88AB\u63D0\u5347\u5230\u8D8A\u6765\u8D8A\u56F0\u96BE\u7684\u73AF\u5883\u4E2D\u3002\u6700\u7EC8\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u8FBE\u5230\u4E86\u60A8\u7684\u7B2C\u4E00\u4E2A\u60F3\u6CD5\u4E0D\u518D\u8DB3\u591F\u597D\u7684\u5883\u5730\u3002\u5982\u679C\u60A8\u60F3\u83B7\u5F97\u975E\u5E38\u597D\u7684\u7ED3\u679C\uFF0C\u90A3\u4E48\u65E0\u8BBA\u60A8\u591A\u4E48\u806A\u660E\uFF0C\u90FD\u5FC5\u987B\u8003\u8651\u7B2C\u4E8C\u79CD\u53EF\u80FD\u6027\uFF0C\u6216\u8005\u7B2C\u4E09\u79CD\u53EF\u80FD\u6027\u3002\u5927\u578B\u8F6F\u4EF6\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u5C5E\u4E8E\u6B64\u7C7B\uFF1A\u6CA1\u6709\u4EBA\u8DB3\u591F\u4F18\u79C0\uFF0C\u80FD\u591F\u7B2C\u4E00\u6B21\u5C31\u505A\u597D\u3002</p><blockquote><p>Unfortunately, I often see smart people who insist on implementing the first idea that comes to mind, and this causes them to underperform their true potential (it also makes them frustrating to work with). Perhaps they subconsciously believe that \u201Csmart people get it right the first time,\u201D so if they try multiple designs it would mean they are not smart after all. This is not the case. It isn\u2019t that you aren\u2019t smart; it\u2019s that the problems are really hard! Furthermore, that\u2019s a good thing: it\u2019s much more fun to work on a difficult problem where you have to think carefully, rather than an easy problem where you don\u2019t have to think at all.</p></blockquote><p>\u4E0D\u5E78\u7684\u662F\uFF0C\u6211\u7ECF\u5E38\u770B\u5230\u806A\u660E\u7684\u4EBA\u575A\u6301\u8981\u5B9E\u73B0\u7B2C\u4E00\u4E2A\u60F3\u5230\u7684\u60F3\u6CD5\uFF0C\u8FD9\u4F1A\u4F7F\u4ED6\u4EEC\u65E0\u6CD5\u53D1\u6325\u5176\u771F\u6B63\u7684\u6F5C\u529B\uFF08\u8FD9\u4E5F\u4F7F\u4ED6\u4EEC\u6CAE\u4E27\u5730\u5DE5\u4F5C\uFF09\u3002\u4E5F\u8BB8\u4ED6\u4EEC\u4E0B\u610F\u8BC6\u5730\u76F8\u4FE1\u201C\u806A\u660E\u7684\u4EBA\u7B2C\u4E00\u6B21\u5C31\u80FD\u505A\u5230\u201D\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u4ED6\u4EEC\u5C1D\u8BD5\u591A\u79CD\u8BBE\u8BA1\uFF0C\u90A3\u5C06\u610F\u5473\u7740\u4ED6\u4EEC\u5E76\u4E0D\u806A\u660E\u3002\u4E0D\u662F\u8FD9\u79CD\u60C5\u51B5\u3002\u4E0D\u662F\u8BF4\u4F60\u4E0D\u806A\u660E\uFF1B\u800C\u662F\u95EE\u9898\u771F\u7684\u5F88\u96BE\u89E3\u51B3\uFF01\u6B64\u5916\uFF0C\u8FD9\u662F\u4E00\u4EF6\u597D\u4E8B\uFF1A\u5904\u7406\u4E00\u4E2A\u5FC5\u987B\u8BA4\u771F\u601D\u8003\u7684\u96BE\u9898\u6BD4\u5904\u7406\u4E00\u4E2A\u6839\u672C\u4E0D\u9700\u8981\u601D\u8003\u7684\u96BE\u9898\u66F4\u6709\u8DA3\u3002</p><blockquote><p>The design-it-twice approach not only improves your designs, but it also improves your design skills. The process of devising and comparing multiple approaches will teach you about the factors that make designs better or worse. Over time, this will make it easier for you to rule out bad designs and hone in on really great ones.</p></blockquote><p>\u8BBE\u8BA1\u4E24\u6B21\u7684\u65B9\u5F0F\u4E0D\u4EC5\u53EF\u4EE5\u6539\u5584\u60A8\u7684\u8BBE\u8BA1\uFF0C\u800C\u4E14\u53EF\u4EE5\u63D0\u9AD8\u60A8\u7684\u8BBE\u8BA1\u80FD\u529B\u3002\u8BBE\u8BA1\u548C\u6BD4\u8F83\u591A\u79CD\u65B9\u6CD5\u7684\u8FC7\u7A0B\u5C06\u6559\u4F1A\u4F60\u4F7F\u8BBE\u8BA1\u53D8\u5F97\u66F4\u597D\u6216\u66F4\u5DEE\u7684\u56E0\u7D20\u3002\u8FD9\u5C06\u4F7F\u4F60\u66F4\u5BB9\u6613\u6392\u9664\u4E0D\u597D\u7684\u8BBE\u8BA1\uFF0C\u5E76\u94BB\u7814\u771F\u6B63\u4F1F\u5927\u7684\u8BBE\u8BA1\u3002</p>',27);function a(r,n){return i}var l=e(o,[["render",a],["__file","ch11.html.vue"]]);export{l as default};