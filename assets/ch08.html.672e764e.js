import{_ as e,d as t}from"./app.70deb030.js";const o={},a=t('<h1 id="\u7B2C-8-\u7AE0-\u964D\u4F4E\u590D\u6742\u6027" tabindex="-1"><a class="header-anchor" href="#\u7B2C-8-\u7AE0-\u964D\u4F4E\u590D\u6742\u6027" aria-hidden="true">#</a> \u7B2C 8 \u7AE0 \u964D\u4F4E\u590D\u6742\u6027</h1><blockquote><p>Chapter 8 Pull Complexity Downwards</p></blockquote><p>This chapter introduces another way of thinking about how to create deeper classes. Suppose that you are developing a new module, and you discover a piece of unavoidable complexity. Which is better: should you let users of the module deal with the complexity, or should you handle the complexity internally within the module? If the complexity is related to the functionality provided by the module, then the second answer is usually the right one. Most modules have more users than developers, so it is better for the developers to suffer than the users. As a module developer, you should strive to make life as easy as possible for the users of your module, even if that means extra work for you. Another way of expressing this idea is that it is more important for a module to have a simple interface than a simple implementation.</p><blockquote><p>\u672C\u7AE0\u4ECB\u7ECD\u4E86\u6709\u5173\u5982\u4F55\u521B\u5EFA\u66F4\u6DF1\u5C42\u7C7B\u7684\u53E6\u4E00\u79CD\u601D\u8003\u65B9\u5F0F\u3002\u5047\u8BBE\u60A8\u6B63\u5728\u5F00\u53D1\u4E00\u4E2A\u65B0\u6A21\u5757\uFF0C\u5E76\u4E14\u53D1\u73B0\u4E86\u4E00\u4E2A\u4E0D\u53EF\u907F\u514D\u7684\u590D\u6742\u6027\u3002\u54EA\u4E2A\u66F4\u597D\uFF1A\u5E94\u8BE5\u8BA9\u6A21\u5757\u7528\u6237\u5904\u7406\u590D\u6742\u6027\uFF0C\u8FD8\u662F\u5E94\u8BE5\u5728\u6A21\u5757\u5185\u90E8\u5904\u7406\u590D\u6742\u6027\uFF1F\u5982\u679C\u590D\u6742\u5EA6\u4E0E\u6A21\u5757\u63D0\u4F9B\u7684\u529F\u80FD\u6709\u5173\uFF0C\u5219\u7B2C\u4E8C\u4E2A\u7B54\u6848\u901A\u5E38\u662F\u6B63\u786E\u7684\u7B54\u6848\u3002\u5927\u591A\u6570\u6A21\u5757\u62E5\u6709\u7684\u7528\u6237\u591A\u4E8E\u5F00\u53D1\u4EBA\u5458\uFF0C\u56E0\u6B64\u5F00\u53D1\u4EBA\u5458\u906D\u53D7\u7684\u82E6\u96BE\u8981\u5927\u4E8E\u7528\u6237\u3002\u4F5C\u4E3A\u6A21\u5757\u5F00\u53D1\u4EBA\u5458\uFF0C\u60A8\u5E94\u8BE5\u52AA\u529B\u4F7F\u6A21\u5757\u7528\u6237\u7684\u751F\u6D3B\u5C3D\u53EF\u80FD\u8F7B\u677E\uFF0C\u5373\u4F7F\u8FD9\u5BF9\u60A8\u6765\u8BF4\u610F\u5473\u7740\u989D\u5916\u7684\u5DE5\u4F5C\u3002\u8868\u8FBE\u6B64\u60F3\u6CD5\u7684\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\uFF0C\u6A21\u5757\u5177\u6709\u7B80\u5355\u7684\u63A5\u53E3\u6BD4\u7B80\u5355\u7684\u5B9E\u73B0\u66F4\u4E3A\u91CD\u8981\u3002</p></blockquote><p>As a developer, it\u2019s tempting to behave in the opposite fashion: solve the easy problems and punt the hard ones to someone else. If a condition arises that you\u2019re not certain how to deal with, the easiest thing is to throw an exception and let the caller handle it. If you are not certain what policy to implement, you can define a few configuration parameters to control the policy and leave it up to the system administrator to figure out the best values for them.</p><blockquote><p>\u4F5C\u4E3A\u5F00\u53D1\u4EBA\u5458\uFF0C\u5F88\u5BB9\u6613\u4EE5\u76F8\u53CD\u7684\u65B9\u5F0F\u884C\u4E8B\uFF1A\u89E3\u51B3\u7B80\u5355\u7684\u95EE\u9898\uFF0C\u7136\u540E\u5C06\u56F0\u96BE\u7684\u95EE\u9898\u63A8\u7ED9\u5176\u4ED6\u4EBA\u3002\u5982\u679C\u51FA\u73B0\u4E0D\u786E\u5B9A\u5982\u4F55\u5904\u7406\u7684\u6761\u4EF6\uFF0C\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u662F\u5F15\u53D1\u5F02\u5E38\u5E76\u8BA9\u8C03\u7528\u65B9\u5904\u7406\u5B83\u3002\u5982\u679C\u4E0D\u786E\u5B9A\u8981\u5B9E\u65BD\u4EC0\u4E48\u7B56\u7565\uFF0C\u5219\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E9B\u914D\u7F6E\u53C2\u6570\u6765\u63A7\u5236\u8BE5\u7B56\u7565\uFF0C\u7136\u540E\u7531\u7CFB\u7EDF\u7BA1\u7406\u5458\u81EA\u884C\u786E\u5B9A\u6700\u4F73\u7B56\u7565\u3002</p></blockquote><p>Approaches like these will make your life easier in the short term, but they amplify complexity, so that many people must deal with a problem, rather than just one person. For example, if a class throws an exception, every caller of the class will have to deal with it. If a class exports configuration parameters, every system administrator in every installation will have to learn how to set them.</p><blockquote><p>\u8FD9\u6837\u7684\u65B9\u6CD5\u77ED\u671F\u5185\u4F1A\u4F7F\u60A8\u7684\u751F\u6D3B\u66F4\u8F7B\u677E\uFF0C\u4F46\u5B83\u4EEC\u4F1A\u52A0\u5267\u590D\u6742\u6027\uFF0C\u56E0\u6B64\u8BB8\u591A\u4EBA\u5FC5\u987B\u5904\u7406\u4E00\u4E2A\u95EE\u9898\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E2A\u4EBA\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4E00\u4E2A\u7C7B\u629B\u51FA\u5F02\u5E38\uFF0C\u5219\u8BE5\u7C7B\u7684\u6BCF\u4E2A\u8C03\u7528\u8005\u90FD\u5FC5\u987B\u5904\u7406\u8BE5\u5F02\u5E38\u3002\u5982\u679C\u4E00\u4E2A\u7C7B\u5BFC\u51FA\u914D\u7F6E\u53C2\u6570\uFF0C\u5219\u6BCF\u4E2A\u5B89\u88C5\u4E2D\u7684\u6BCF\u4E2A\u7CFB\u7EDF\u7BA1\u7406\u5458\u90FD\u5FC5\u987B\u5B66\u4E60\u5982\u4F55\u8BBE\u7F6E\u5B83\u4EEC\u3002</p></blockquote><h2 id="_8-1-example-editor-text-class-\u793A\u4F8B-\u7F16\u8F91\u5668\u6587\u672C\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-1-example-editor-text-class-\u793A\u4F8B-\u7F16\u8F91\u5668\u6587\u672C\u7C7B" aria-hidden="true">#</a> 8.1 Example: editor text class \u793A\u4F8B\uFF1A\u7F16\u8F91\u5668\u6587\u672C\u7C7B</h2><p>Consider the class that manages the text of a file for a GUI text editor, which was discussed in Chapters 6 and 7. The class provides methods to read a file from disk into memory, query and modify the in-memory copy of the file, and write the modified version back to disk. When students had to implement this class, many of them chose a line-oriented interface, with methods to read, insert, and delete whole lines of text. This resulted in a simple implementation for the class, but it created complexity for higher level software. At the level of the user interface, operations rarely involve whole lines. For example, keystrokes cause individual characters to be inserted within an existing line; copying or deleting the selection can modify parts of several different lines. With the line-oriented text interface, higher-level software had to split and join lines in order to implement the user interface.</p><blockquote><p>\u8003\u8651\u4E3A GUI \u6587\u672C\u7F16\u8F91\u5668\u7BA1\u7406\u6587\u4EF6\u6587\u672C\u7684\u7C7B\uFF0C\u8FD9\u5728\u7B2C 6 \u7AE0\u548C\u7B2C 7 \u7AE0\u4E2D\u8BA8\u8BBA\u8FC7\u3002\u8BE5\u7C7B\u63D0\u4F9B\u4E86\u5C06\u6587\u4EF6\u4ECE\u78C1\u76D8\u8BFB\u5165\u5185\u5B58\u3001\u67E5\u8BE2\u548C\u4FEE\u6539\u6587\u4EF6\u5728\u5185\u5B58\u4E2D\u7684\u526F\u672C\u4EE5\u53CA\u5C06\u4FEE\u6539\u540E\u7684\u7248\u672C\u5199\u56DE\u78C1\u76D8\u7684\u65B9\u6CD5\u3002\u5F53\u5B66\u751F\u5FC5\u987B\u5B9E\u73B0\u8FD9\u4E2A\u7C7B\u65F6\uFF0C\u4ED6\u4EEC\u4E2D\u7684\u8BB8\u591A\u4EBA\u9009\u62E9\u4E86\u4E00\u4E2A\u9762\u5411\u884C\u7684\u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u5177\u6709\u8BFB\u53D6\u3001\u63D2\u5165\u548C\u5220\u9664\u6574\u884C\u6587\u672C\u7684\u65B9\u6CD5\u3002\u8FD9\u5BFC\u81F4\u4E86\u7C7B\u7684\u7B80\u5355\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u4E3A\u66F4\u9AD8\u7EA7\u522B\u7684\u8F6F\u4EF6\u5E26\u6765\u4E86\u590D\u6742\u6027\u3002\u5728\u7528\u6237\u754C\u9762\u7EA7\u522B\uFF0C\u64CD\u4F5C\u5F88\u5C11\u6D89\u53CA\u6574\u884C\u3002\u4F8B\u5982\uFF0C\u51FB\u952E\u4F1A\u5BFC\u81F4\u5728\u73B0\u6709\u884C\u4E2D\u63D2\u5165\u5355\u4E2A\u5B57\u7B26;\u590D\u5236\u6216\u5220\u9664\u9009\u62E9\u9879\u53EF\u4EE5\u4FEE\u6539\u51E0\u4E2A\u4E0D\u540C\u884C\u7684\u90E8\u5206\u3002\u4F7F\u7528\u9762\u5411\u884C\u7684\u6587\u672C\u754C\u9762\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u7528\u6237\u754C\u9762\uFF0C\u9AD8\u7EA7\u8F6F\u4EF6\u5FC5\u987B\u5206\u5272\u548C\u8FDE\u63A5\u884C\u3002</p></blockquote><p>A character-oriented interface such as the one described in Section 6.3 pulls complexity downward. The user interface software can now insert and delete arbitrary ranges of text without splitting and merging lines, so it becomes simpler. The implementation of the text class probably becomes more complex: if it represents the text internally as a collection of lines, it will have to split and merge lines to implement the character-oriented operations. This approach is better because it encapsulates the complexity of splitting and merging within the text class, which reduces the overall complexity of the system.</p><blockquote><p>\u9762\u5411\u5B57\u7B26\u7684\u754C\u9762\uFF08\u5982 6.3 \u8282\u4E2D\u6240\u8FF0\uFF09\u964D\u4F4E\u4E86\u590D\u6742\u6027\u3002\u7528\u6237\u754C\u9762\u8F6F\u4EF6\u73B0\u5728\u53EF\u4EE5\u63D2\u5165\u548C\u5220\u9664\u4EFB\u610F\u8303\u56F4\u7684\u6587\u672C\uFF0C\u800C\u65E0\u9700\u5206\u5272\u548C\u5408\u5E76\u884C\uFF0C\u56E0\u6B64\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3002\u6587\u672C\u7C7B\u7684\u5B9E\u73B0\u53EF\u80FD\u4F1A\u53D8\u5F97\u66F4\u52A0\u590D\u6742\uFF1A\u5982\u679C\u5185\u90E8\u5C06\u6587\u672C\u8868\u793A\u4E3A\u884C\u7684\u96C6\u5408\uFF0C\u5219\u5FC5\u987B\u62C6\u5206\u548C\u5408\u5E76\u884C\u4EE5\u5B9E\u73B0\u9762\u5411\u5B57\u7B26\u7684\u64CD\u4F5C\u3002\u8FD9\u79CD\u65B9\u6CD5\u66F4\u597D\uFF0C\u56E0\u4E3A\u5B83\u5C01\u88C5\u4E86\u5728\u6587\u672C\u7C7B\u4E2D\u62C6\u5206\u548C\u5408\u5E76\u7684\u590D\u6742\u6027\uFF0C\u4ECE\u800C\u964D\u4F4E\u4E86\u7CFB\u7EDF\u7684\u6574\u4F53\u590D\u6742\u6027\u3002</p></blockquote><h2 id="_8-2-example-configuration-parameters-\u793A\u4F8B-\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_8-2-example-configuration-parameters-\u793A\u4F8B-\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> 8.2 Example: configuration parameters \u793A\u4F8B\uFF1A\u914D\u7F6E\u53C2\u6570</h2><p>Configuration parameters are an example of moving complexity upwards instead of down. Rather than determining a particular behavior internally, a class can export a few parameters that control its behavior, such as the size of a cache or the number of times to retry a request before giving up. Users of the class must then specify appropriate values for the parameters. Configuration parameters have become very popular in systems today; some systems have hundreds of them.</p><blockquote><p>\u914D\u7F6E\u53C2\u6570\u662F\u63D0\u9AD8\u590D\u6742\u5EA6\u800C\u4E0D\u662F\u964D\u4F4E\u590D\u6742\u5EA6\u7684\u4E00\u4E2A\u793A\u4F8B\u3002\u7C7B\u53EF\u4EE5\u5728\u5185\u90E8\u8F93\u51FA\u4E00\u4E9B\u63A7\u5236\u5176\u884C\u4E3A\u7684\u53C2\u6570\uFF0C\u800C\u4E0D\u662F\u5728\u5185\u90E8\u786E\u5B9A\u7279\u5B9A\u7684\u884C\u4E3A\uFF0C\u4F8B\u5982\u9AD8\u901F\u7F13\u5B58\u7684\u5927\u5C0F\u6216\u5728\u653E\u5F03\u4E4B\u524D\u91CD\u8BD5\u8BF7\u6C42\u7684\u6B21\u6570\u3002\u7136\u540E\uFF0C\u8BE5\u7C7B\u7684\u7528\u6237\u5FC5\u987B\u4E3A\u53C2\u6570\u6307\u5B9A\u9002\u5F53\u7684\u503C\u3002\u5728\u5F53\u4ECA\u7684\u7CFB\u7EDF\u4E2D\uFF0C\u914D\u7F6E\u53C2\u6570\u5DF2\u53D8\u5F97\u975E\u5E38\u6D41\u884C\u3002\u6709\u4E9B\u7CFB\u7EDF\u6709\u6570\u767E\u4E2A\u3002</p></blockquote><p>Advocates argue that configuration parameters are good because they allow users to tune the system for their particular requirements and workloads. In some situations it is hard for low-level infrastructure code to know the best policy to apply, whereas users are much more familiar with their domains. For instance, a user might know that some requests are more time-critical than others, so it makes sense for the user to specify a higher priority for those requests. In situations like this, configuration parameters can result in better performance across a broader variety of domains.</p><blockquote><p>\u62E5\u62A4\u8005\u8BA4\u4E3A\u914D\u7F6E\u53C2\u6570\u4E0D\u9519\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5141\u8BB8\u7528\u6237\u6839\u636E\u4ED6\u4EEC\u7684\u7279\u5B9A\u8981\u6C42\u548C\u5DE5\u4F5C\u8D1F\u8F7D\u6765\u8C03\u6574\u7CFB\u7EDF\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F4E\u7EA7\u57FA\u7840\u7ED3\u6784\u4EE3\u7801\u5F88\u96BE\u77E5\u9053\u8981\u5E94\u7528\u7684\u6700\u4F73\u7B56\u7565\uFF0C\u800C\u7528\u6237\u5219\u5BF9\u5176\u57DF\u66F4\u52A0\u719F\u6089\u3002\u4F8B\u5982\uFF0C\u7528\u6237\u53EF\u80FD\u77E5\u9053\u67D0\u4E9B\u8BF7\u6C42\u6BD4\u5176\u4ED6\u8BF7\u6C42\u66F4\u7D27\u8FEB\uFF0C\u56E0\u6B64\u7528\u6237\u4E3A\u8FD9\u4E9B\u8BF7\u6C42\u6307\u5B9A\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\u662F\u6709\u610F\u4E49\u7684\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u914D\u7F6E\u53C2\u6570\u53EF\u4EE5\u5728\u66F4\u5E7F\u6CDB\u7684\u57DF\u4E2D\u5E26\u6765\u66F4\u597D\u7684\u6027\u80FD\u3002</p></blockquote><p>However, configuration parameters also provide an easy excuse to avoid dealing with important issues and pass them on to someone else. In many cases, it\u2019s difficult or impossible for users or administrators to determine the right values for the parameters. In other cases, the right values could have been determined automatically with a little extra work in the system implementation. Consider a network protocol that must deal with lost packets. If it sends a request but doesn\u2019t receive a response within a certain time period, it resends the request. One way to determine the retry interval is to introduce a configuration parameter. However, the transport protocol could compute a reasonable value on its own by measuring the response time for requests that succeed and then using a multiple of this for the retry interval. This approach pulls complexity downward and saves users from having to figure out the right retry interval. It has the additional advantage of computing the retry interval dynamically, so it will adjust automatically if operating conditions change. In contrast, configuration parameters can easily become out of date.</p><blockquote><p>\u4F46\u662F\uFF0C\u914D\u7F6E\u53C2\u6570\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u8F7B\u677E\u7684\u501F\u53E3\uFF0C\u53EF\u4EE5\u907F\u514D\u5904\u7406\u91CD\u8981\u95EE\u9898\u5E76\u5C06\u5176\u4F20\u9012\u7ED9\u5176\u4ED6\u4EBA\u3002\u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u6216\u7BA1\u7406\u5458\u5F88\u96BE\u6216\u65E0\u6CD5\u786E\u5B9A\u53C2\u6570\u7684\u6B63\u786E\u503C\u3002\u5728\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u7CFB\u7EDF\u5B9E\u73B0\u4E2D\u8FDB\u884C\u4E00\u4E9B\u989D\u5916\u7684\u5DE5\u4F5C\u6765\u81EA\u52A8\u786E\u5B9A\u6B63\u786E\u7684\u503C\u3002\u8003\u8651\u5FC5\u987B\u5904\u7406\u4E22\u5931\u6570\u636E\u5305\u7684\u7F51\u7EDC\u534F\u8BAE\u3002\u5982\u679C\u5B83\u53D1\u9001\u8BF7\u6C42\u4F46\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\u672A\u6536\u5230\u54CD\u5E94\uFF0C\u5219\u91CD\u65B0\u53D1\u9001\u8BE5\u8BF7\u6C42\u3002\u786E\u5B9A\u91CD\u8BD5\u95F4\u9694\u7684\u4E00\u79CD\u65B9\u6CD5\u662F\u5F15\u5165\u914D\u7F6E\u53C2\u6570\u3002\u4F46\u662F\uFF0C\u4F20\u8F93\u534F\u8BAE\u53EF\u4EE5\u901A\u8FC7\u6D4B\u91CF\u6210\u529F\u8BF7\u6C42\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u7136\u540E\u5C06\u5176\u500D\u6570\u7528\u4E8E\u91CD\u8BD5\u95F4\u9694\uFF0C\u81EA\u5DF1\u8BA1\u7B97\u51FA\u4E00\u4E2A\u5408\u7406\u7684\u503C\u3002\u8FD9\u79CD\u65B9\u6CD5\u964D\u4F4E\u4E86\u590D\u6742\u6027\uFF0C\u4F7F\u7528\u6237\u4E0D\u5FC5\u627E\u51FA\u6B63\u786E\u7684\u91CD\u8BD5\u95F4\u9694\u3002\u5B83\u5177\u6709\u52A8\u6001\u8BA1\u7B97\u91CD\u8BD5\u95F4\u9694\u7684\u5176\u4ED6\u4F18\u70B9\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u64CD\u4F5C\u6761\u4EF6\u53D1\u751F\u53D8\u5316\uFF0C\u5B83\u5C06\u81EA\u52A8\u8FDB\u884C\u8C03\u6574\u3002\u76F8\u53CD\uFF0C\u914D\u7F6E\u53C2\u6570\u5F88\u5BB9\u6613\u8FC7\u65F6\u3002</p></blockquote><p>Thus, you should avoid configuration parameters as much as possible. Before exporting a configuration parameter, ask yourself: \u201Cwill users (or higher-level modules) be able to determine a better value than we can determine here?\u201D When you do create configuration parameters, see if you can compute reasonable defaults automatically, so users will only need to provide values under exceptional conditions. Ideally, each module should solve a problem completely; configuration parameters result in an incomplete solution, which adds to system complexity.</p><blockquote><p>\u56E0\u6B64\uFF0C\u60A8\u5E94\u5C3D\u53EF\u80FD\u907F\u514D\u4F7F\u7528\u914D\u7F6E\u53C2\u6570\u3002\u5728\u5BFC\u51FA\u914D\u7F6E\u53C2\u6570\u4E4B\u524D\uFF0C\u8BF7\u95EE\u81EA\u5DF1\uFF1A\u201C\u7528\u6237\uFF08\u6216\u66F4\u9AD8\u7EA7\u522B\u7684\u6A21\u5757\uFF09\u662F\u5426\u80FD\u591F\u786E\u5B9A\u6BD4\u6211\u4EEC\u5728\u6B64\u786E\u5B9A\u7684\u66F4\u597D\u7684\u503C\uFF1F\u201D \u5F53\u60A8\u521B\u5EFA\u914D\u7F6E\u53C2\u6570\u65F6\uFF0C\u8BF7\u67E5\u770B\u662F\u5426\u53EF\u4EE5\u81EA\u52A8\u8BA1\u7B97\u5408\u7406\u7684\u9ED8\u8BA4\u503C\uFF0C\u56E0\u6B64\u7528\u6237\u4EC5\u9700\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\u63D0\u4F9B\u503C\u5373\u53EF\u3002\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u4E2A\u6A21\u5757\u90FD\u5E94\u5B8C\u5168\u89E3\u51B3\u95EE\u9898\u3002\u914D\u7F6E\u53C2\u6570\u5BFC\u81F4\u89E3\u51B3\u65B9\u6848\u4E0D\u5B8C\u6574\uFF0C\u4ECE\u800C\u589E\u52A0\u4E86\u7CFB\u7EDF\u590D\u6742\u6027\u3002</p></blockquote><h2 id="_8-3-taking-it-too-far-\u8D70\u5F97\u592A\u8FDC" tabindex="-1"><a class="header-anchor" href="#_8-3-taking-it-too-far-\u8D70\u5F97\u592A\u8FDC" aria-hidden="true">#</a> 8.3 Taking it too far \u8D70\u5F97\u592A\u8FDC</h2><p>Use discretion when pulling complexity downward; this is an idea that can easily be overdone. An extreme approach would be to pull all of the functionality of the entire application down into a single class, which clearly doesn\u2019t make sense. Pulling complexity down makes the most sense if (a) the complexity being pulled down is closely related to the class\u2019s existing functionality, (b) pulling the complexity down will result in many simplifications elsewhere in the application, and (c) pulling the complexity down simplifies the class\u2019s interface. Remember that the goal is to minimize overall system complexity.</p><blockquote><p>\u964D\u4F4E\u590D\u6742\u6027\u65F6\u8981\u8C28\u614E\u5904\u7406\uFF1B\u8FD9\u4E2A\u60F3\u6CD5\u5F88\u5BB9\u6613\u88AB\u5938\u5927\u3002\u4E00\u79CD\u6781\u7AEF\u7684\u65B9\u6CD5\u662F\u5C06\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u6240\u6709\u529F\u80FD\u5F52\u4E3A\u4E00\u4E2A\u7C7B\uFF0C\u8FD9\u663E\u7136\u6CA1\u6709\u610F\u4E49\u3002\u5982\u679C\uFF08a\uFF09\u88AB\u964D\u4F4E\u7684\u590D\u6742\u5EA6\u4E0E\u8BE5\u7C7B\u7684\u73B0\u6709\u529F\u80FD\u5BC6\u5207\u76F8\u5173\uFF0C\uFF08b\uFF09\u964D\u4F4E\u590D\u6742\u5EA6\u5C06\u5BFC\u81F4\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5176\u4ED6\u5730\u65B9\u7684\u8BB8\u591A\u7B80\u5316\uFF0C\u5219\u964D\u4F4E\u590D\u6742\u5EA6\u6700\u6709\u610F\u4E49\u3002\u7B80\u5316\u4E86\u7C7B\u7684\u754C\u9762\u3002\u8BF7\u8BB0\u4F4F\uFF0C\u76EE\u6807\u662F\u6700\u5927\u7A0B\u5EA6\u5730\u964D\u4F4E\u6574\u4F53\u7CFB\u7EDF\u590D\u6742\u6027\u3002</p></blockquote><p>Chapter 6 described how some students defined methods in the text class that reflected the user interface, such as a method that implements the functionality of the backspace key. It might seem that this is good, since it pulls complexity downward. However, adding knowledge of the user interface to the text class doesn\u2019t simplify higher-level code very much, and the user-interface knowledge doesn\u2019t relate to the core functions of the text class. In this case, pulling complexity down just resulted in information leakage.</p><blockquote><p>\u7B2C 6 \u7AE0\u4ECB\u7ECD\u4E86\u4E00\u4E9B\u5B66\u751F\u5982\u4F55\u5728\u6587\u672C\u7C7B\u4E2D\u5B9A\u4E49\u53CD\u6620\u7528\u6237\u754C\u9762\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982\u5B9E\u73B0\u9000\u683C\u952E\u529F\u80FD\u7684\u65B9\u6CD5\u3002\u8FD9\u4F3C\u4E4E\u5F88\u597D\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u964D\u4F4E\u590D\u6742\u6027\u3002\u4F46\u662F\uFF0C\u5C06\u7528\u6237\u754C\u9762\u7684\u77E5\u8BC6\u6DFB\u52A0\u5230\u6587\u672C\u7C7B\u4E2D\u5E76\u4E0D\u4F1A\u5927\u5927\u7B80\u5316\u9AD8\u5C42\u4EE3\u7801\uFF0C\u5E76\u4E14\u7528\u6237\u754C\u9762\u7684\u77E5\u8BC6\u4E0E\u6587\u672C\u7C7B\u7684\u6838\u5FC3\u529F\u80FD\u65E0\u5173\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u964D\u4F4E\u590D\u6742\u5EA6\u53EA\u4F1A\u5BFC\u81F4\u4FE1\u606F\u6CC4\u6F0F\u3002</p></blockquote><h2 id="_8-4-conclusion-\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#_8-4-conclusion-\u7ED3\u8BBA" aria-hidden="true">#</a> 8.4 Conclusion \u7ED3\u8BBA</h2><p>When developing a module, look for opportunities to take a little bit of extra suffering upon yourself in order to reduce the suffering of your users.</p><blockquote><p>\u5728\u5F00\u53D1\u6A21\u5757\u65F6\uFF0C\u8BF7\u5BFB\u627E\u673A\u4F1A\u51CF\u8F7B\u81EA\u5DF1\u7684\u75DB\u82E6\uFF0C\u4EE5\u51CF\u8F7B\u7528\u6237\u7684\u75DB\u82E6\u3002</p></blockquote>',30);function i(s,r){return a}var l=e(o,[["render",i],["__file","ch08.html.vue"]]);export{l as default};
