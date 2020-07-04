(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{754:function(a,t,e){"use strict";e.r(t);var s=e(97),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"jdk13-新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdk13-新特性"}},[a._v("#")]),a._v(" JDK13 新特性")]),a._v(" "),e("h2",{attrs:{id:"新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新特性"}},[a._v("#")]),a._v(" 新特性")]),a._v(" "),e("ol",[e("li",[a._v("switch优化更新")]),a._v(" "),e("li",[a._v("文本块升级")]),a._v(" "),e("li",[a._v("动态CDS档案")]),a._v(" "),e("li",[a._v("取消使用未使用的内存")]),a._v(" "),e("li",[a._v("重新实现旧版套接字API")]),a._v(" "),e("li",[a._v("FileSystems.newFileSystem新方法")]),a._v(" "),e("li",[a._v("nio新方法")]),a._v(" "),e("li",[a._v("核心库/ java.time")]),a._v(" "),e("li",[a._v("核心库/ java.util中：I18N")]),a._v(" "),e("li",[a._v("热点/ GC")]),a._v(" "),e("li",[a._v("安全库/ java.security")]),a._v(" "),e("li",[a._v("删除功能")])]),a._v(" "),e("h2",{attrs:{id:"小栗子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小栗子"}},[a._v("#")]),a._v(" 小栗子")]),a._v(" "),e("h3",{attrs:{id:"_1、switch优化更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、switch优化更新"}},[a._v("#")]),a._v(" 1、switch优化更新")]),a._v(" "),e("p",[a._v("JDK11以及之前的版本")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("switch (day) {\n    case MONDAY:\n    case FRIDAY:\n    case SUNDAY:\n         System.out.println(6);\n         break;\n    case TUESDAY:\n        System.out.println(7);\n        break; case THURSDAY:\n    case SATURDAY:\n        System.out.println(8);\n         break;\n    case WEDNESDAY:\n         System.out.println(9);\n         break;\n}\n")])])]),e("p",[a._v("JDK12版本")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("switch (day) {\n    case MONDAY, FRIDAY, SUNDAY -> System.out.println(6);\n    case TUESDAY -> System.out.println(7);\n    case THURSDAY, SATURDAY -> System.out.println(8);\n    case WEDNESDAY -> System.out.println(9);\n }\n")])])]),e("p",[a._v("JDK13版本+")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('static void howMany(int k) {\n   System.out.println(\n       switch (k) {\n           case  1 -> "one"\n           case  2 -> "two"\n           default -> "many"\n       }\n   );\n}\n')])])]),e("h3",{attrs:{id:"_2、文本块升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、文本块升级"}},[a._v("#")]),a._v(" 2、文本块升级")]),a._v(" "),e("p",[a._v("JDK13之前")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('String html = "<html>\\n" +\n             "    <body>\\n" +\n             "        <p>Hello, world</p>\\n" +\n             "    </body>\\n" +\n             "</html>\\n";\n')])])]),e("p",[a._v("JDK13优化的")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('String html = """\n             <html>\n                 <body>\n                     <p>Hello, world</p>\n                 </body>\n             </html>\n             """;\n')])])]),e("h3",{attrs:{id:"_2-2、sql变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、sql变化"}},[a._v("#")]),a._v(" 2.2、SQL变化")]),a._v(" "),e("p",[a._v("JDK13之前")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('String query = "SELECT `EMP_ID`, `LAST_NAME` FROM `EMPLOYEE_TB`\\n" +\n              "WHERE `CITY` = \'INDIANAPOLIS\'\\n" +\n              "ORDER BY `EMP_ID`, `LAST_NAME`;\\n";\n')])])]),e("p",[a._v("JDK13")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('String query = """\n               SELECT `EMP_ID`, `LAST_NAME` FROM `EMPLOYEE_TB`\n               WHERE `CITY` = \'INDIANAPOLIS\'\n               ORDER BY `EMP_ID`, `LAST_NAME`;\n              """;\n')])])]),e("h3",{attrs:{id:"_2-3、解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、解释"}},[a._v("#")]),a._v(" 2.3、解释")]),a._v(" "),e("p",[a._v("文本块")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"""\nline 1\nline 2\nline 3\n"""\n')])])]),e("p",[a._v("相当于字符串文字")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('"line 1\\nline 2\\nline 3\\n"\n')])])]),e("h3",{attrs:{id:"_3、动态cds档案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、动态cds档案"}},[a._v("#")]),a._v(" 3、动态CDS档案")]),a._v(" "),e("p",[a._v("目标：")]),a._v(" "),e("blockquote",[e("p",[a._v("提高应用程序类 - 数据共享（AppCDS）的可用性。消除了用户进行试运行以创建每个应用程序的类列表的需要。\n-Xshare:dump\n使用类列表由该选项启用的静态归档应继续工作。这包括内置类加载器和用户定义的类加载器的类。")])]),a._v(" "),e("h3",{attrs:{id:"_4、取消使用未使用的内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、取消使用未使用的内存"}},[a._v("#")]),a._v(" 4、取消使用未使用的内存")]),a._v(" "),e("p",[a._v("摘要：")]),a._v(" "),e("blockquote",[e("p",[a._v("增强ZGC以将未使用的堆内存返回给操作系统。")])]),a._v(" "),e("p",[a._v("动机：")]),a._v(" "),e("blockquote",[e("p",[a._v("ZGC目前没有取消提交并将内存返回给操作系统，即使该内存长时间未使用。对于所有类型的应用程序和环境，此行为并非最佳， 尤其是那些需要关注内存占用的应用程序和环境 例如：通过使用支付资源的容器环境。应用程序可能长时间处于空闲状态并与许多其 他应用程序共享或竞争资源的环境。应用程序在执行期间可能具有非常不同的堆空间要求。")])]),a._v(" "),e("blockquote",[e("p",[a._v("例如，启动期间所需的堆可能大于稳态执行期间稍后所需的堆。HotSpot中的其他垃圾收集器，如G1和Shenandoah，今天提供 了这种功能，某些类别的用户发现它非常有用。将此功能添加到ZGC将受到同一组用户的欢迎。")])]),a._v(" "),e("h3",{attrs:{id:"_5、重新实现旧版套接字api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、重新实现旧版套接字api"}},[a._v("#")]),a._v(" 5、重新实现旧版套接字API")]),a._v(" "),e("p",[a._v("摘要：")]),a._v(" "),e("blockquote",[e("p",[a._v("使用更简单，更现代的实现替换java.net.Socket和java.net.ServerSocketAPI 使用的底层实现，易于维护和调试。新的实 现很容易适应用户模式线程，也就是光纤，目前正在Project Loom中进行探索。")])]),a._v(" "),e("p",[a._v("动机：")]),a._v(" "),e("blockquote",[e("p",[a._v("在java.net.Socket和java.net.ServerSocketAPI，以及它们的底层实现，可以追溯到JDK 1.0。实现是遗留Java和C代 码的混合，维护和调试很痛苦。该实现使用线程堆栈作为I/O缓冲区，这种方法需要多次增加默认线程堆栈大小。该实现使用本机数据 结构来支持异步关闭，这是多年来微妙可靠性和移植问题的根源。该实现还有几个并发问题，需要进行大修才能正确解决。在未来的光 纤世界环境中，而不是在本机方法中阻塞线程，当前的实现不适用于目的。")])]),a._v(" "),e("h3",{attrs:{id:"_6、filesystems-newfilesystem新方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、filesystems-newfilesystem新方法"}},[a._v("#")]),a._v(" 6、FileSystems.newFileSystem新方法")]),a._v(" "),e("p",[a._v("核心库/ java.nio中添加了FileSystems.newFileSystem（Path，Map ）方法")]),a._v(" "),e("p",[a._v("添加了三种新方法java.nio.file.FileSystems，以便更轻松地使用将文件内容视为文件系统的文件系统提供程序。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1、newFileSystem(Path)\n2、newFileSystem(Path, Map<String, ?>)\n3、newFileSystem(Path, Map<String, ?>, ClassLoader)\n")])])]),e("blockquote",[e("p",[a._v("添加为newFileSystem(Path, Map) 已使用现有2-arg newFileSystem(Path, ClassLoader)并指定类加载器 的代码创建源（但不是二进制）兼容性问题。null.例如，由于引用newFileSystem不明确，因此无法编译以下内容：\nFileSystem fs = FileSystems.newFileSystem(path, null);\n为了避免模糊引用，需要修改此代码以将第二个参数强制转换为java.lang.ClassLoader。")])]),a._v(" "),e("h3",{attrs:{id:"_7、nio新方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、nio新方法"}},[a._v("#")]),a._v(" 7、nio新方法")]),a._v(" "),e("p",[a._v("核心库/ java.nio中新的java.nio.ByteBuffer批量获取/放置方法转移字节而不考虑缓冲区位置。")]),a._v(" "),e("blockquote",[e("p",[a._v("java.nio.ByteBufferjava.nio现在，其他缓冲区类型定义绝对批量get和put传输连续字节序列的方法，而不考虑或影响缓冲区位置。")])]),a._v(" "),e("h3",{attrs:{id:"_8、核心库-java-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、核心库-java-time"}},[a._v("#")]),a._v(" 8、核心库/ java.time")]),a._v(" "),e("blockquote",[e("p",[a._v('新日本时代名称Reiwa，此更新中添加了代表新Reiwa时代的实例。与其他时代不同，这个时代没有公共领域。它可以通过调用 JapaneseEra.of(3)或获得JapaneseEra.valueOf("Reiwa")。JDK13及更高版本将有一个新的公共领域来代表这个时代。')])]),a._v(" "),e("blockquote",[e("p",[a._v('NewEra从2019年5月1日开始的日本时代的占位符名称“ ”已被新的官方名称取代。依赖占位符名称（请参阅JDK-8202088）获 取新时代单例（JapaneseEra.valueOf("NewEra")）的应用程序将不再起作用。请参阅JDK-8205432')])]),a._v(" "),e("h3",{attrs:{id:"_9、核心库-java-util中：i18n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、核心库-java-util中：i18n"}},[a._v("#")]),a._v(" 9、核心库/ java.util中：I18N")]),a._v(" "),e("p",[a._v("支持Unicode 12.1，此版本将Unicode支持升级到12.1，其中包括以下内容：")]),a._v(" "),e("blockquote",[e("p",[a._v("java.lang.Character支持12.1级的Unicode字符数据库，其中12.0从11.0开始增加554个字符，总共137,928个 字符。这些新增内容包括4个新脚本，总共150个脚本，以及61个新的表情符号字符。\nU+32FF SQUARE ERA NAME REIWA从 12.0开始，12.1只添加一个字符。java.text.Bidi和java.text.Normalizer类分别支持12.0级的Unicode标准附件， ＃9和＃15。java.util.regexpackage支持基于12.0级Unicode标准附件＃29的扩展字形集群。")])]),a._v(" "),e("h3",{attrs:{id:"_10、热点-gc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10、热点-gc"}},[a._v("#")]),a._v(" 10、热点/ GC")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("10.1 JEP 351 ZGC取消提交未使用的存储器\n10.2 添加了-XXSoftMaxHeapSize标志\n10.3 ZGC支持的最大堆大小从4TB增加到16TB\n")])])]),e("h3",{attrs:{id:"_11、安全库-java-security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11、安全库-java-security"}},[a._v("#")]),a._v(" 11、安全库/ java.security")]),a._v(" "),e("blockquote",[e("p",[a._v("11.1 该com.sun.security.crl.readtimeout系统属性设置为CRL检索的最大读取超时，单位为秒。如果尚未设置该属性，或者其值为负，则将其设置为默认值15秒。值0表示无限超时。")])]),a._v(" "),e("blockquote",[e("p",[a._v("11.2 新的keytool -showinfo -tls用于显示TLS配置信息的命令keytool -showinfo -tls添加了一个显示TLS配置信 息的新命令。")])]),a._v(" "),e("blockquote",[e("p",[a._v("11.3 SunMSCAPI提供程序现在支持以下一代加密（CNG）格式读取私钥。这意味着CNG格式的RSA和EC密钥可从Windows密钥 库加载，例如“Windows-MY”。与EC（签名算法SHA1withECDSA，SHA256withECDSA等等）也支持。")])]),a._v(" "),e("h3",{attrs:{id:"_12、删除功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12、删除功能"}},[a._v("#")]),a._v(" 12、删除功能")]),a._v(" "),e("p",[a._v("删除的部分功能：")]),a._v(" "),e("blockquote",[e("p",[a._v("12.1 核心库/java.net中，不再支持Pre-JDK 1.4 SocketImpl实现java.net.SocketImpl此版本已删除对为JavaSE1.3及更早版本编译的自定义实现的支持。此更改对SocketImpl为Java SE 1.4（2002年发布）或更新版本编译的实现没有影响。")])]),a._v(" "),e("blockquote",[e("p",[a._v("12.2 核心库/java.lang中，删除运行时跟踪方法，过时的方法traceInstructions(boolean)，并traceMethodCalls(boolean)已经从删除java.lang.Runtime类。这些方法对许多版本都不起作用，它们的预期功能由Java虚拟机工具接口（JVMTI）提供。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);