(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{757:function(s,t,a){"use strict";a.r(t);var e=a(97),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-免密码登陆及原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-免密码登陆及原理"}},[s._v("#")]),s._v(" Linux 免密码登陆及原理")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("我们常常会遇到这种情况：从服务器A去连接服务器B，经常需要输入服务器B密码，方可连接。再比如，我们在搭建集群（主从节点）的时候，经常就需要通过 ssh 来启动和停止各个节点上的各种守护进程，这就需要在节点之间执行指令的版时候是不需要输入密码的方式，故我们需要配置 ssh 使用权无密码公钥认证的方式")]),s._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("非对称加密算法--RSA加密原理")]),s._v(" "),a("p",[s._v("了解详细算法："),a("a",{attrs:{href:"https://blog.csdn.net/wjiabin/article/details/85228078",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/wjiabin/article/details/85228078"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"处理机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理机制"}},[s._v("#")]),s._v(" 处理机制")]),s._v(" "),a("ol",[a("li",[s._v("非对称密钥就是一对密钥：公钥和私钥。")]),s._v(" "),a("li",[s._v("私钥由自己服务器持有，保存在自己本地中，一般在 .ssh 目录下。")]),s._v(" "),a("li",[s._v("公钥则通过网络传递给对方服务，保存在对方服务中，一般 .ssh 目录下的 authorized_keys 文件。")]),s._v(" "),a("li",[s._v("通过私钥加密的数据只能由公钥解密，同样用公钥加密的数据也只有用私钥解密。")])]),s._v(" "),a("h2",{attrs:{id:"免密码机制流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#免密码机制流程图"}},[s._v("#")]),s._v(" 免密码机制流程图")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.willlu.cn/image/bigdata/%E5%85%8D%E5%AF%86%E7%A0%81%E7%99%BB%E9%99%86%E5%8E%9F%E7%90%86.png",alt:"免密码机制流程图"}})]),s._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),a("h3",{attrs:{id:"创建公钥与私钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建公钥与私钥"}},[s._v("#")]),s._v(" 创建公钥与私钥")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bigdata11 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh-keygen -t rsa")]),s._v("\nGenerating public/private rsa key pair.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连续按3次确认键")]),s._v("\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/root/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\ndf:66:eb:74:2e:d8:c9:b5:ed:29:00:74:9a:4f:0f:ff root@bigdata11\nThe key's randomart image is:\n+--"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" RSA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" +      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         + o     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        S + +    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" + o.  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          .+*ooo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          ."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".Eo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           .o.oo."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------\n")])])]),a("h3",{attrs:{id:"将公钥发送对方服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将公钥发送对方服务器"}},[s._v("#")]),s._v(" 将公钥发送对方服务器")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bigdata11 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh-copy-id -i /root/.ssh/id_rsa.pub root@bigdata11")]),s._v("\n/usr/bin/ssh-copy-id: INFO: attempting to log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" with the new key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" remain to be installed -- "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you are prompted now it is to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" the new keys\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这一步需要输入服务器密码")]),s._v("\nroot@bigdata11"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s password: \n\nNumber of key(s) added: 1\n\nNow try logging into the machine, with:   \"ssh '")]),s._v("root@bigdata11'\"\nand check to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" sure that only the key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" you wanted were added.\n")])])]),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bigdata11 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" bigdata12\n")])])]),a("p",[s._v("如果不用输入密码，则免密码配置成功！相反，如果服务B想免密码服务A, 循环以上步骤即可。")]),s._v(" "),a("h3",{attrs:{id:"查看免密码服务列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看免密码服务列表"}},[s._v("#")]),s._v(" 查看免密码服务列表")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bigdata11 software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# more ~/.ssh/authorized_keys ")]),s._v("\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQChruuNQh9jiIiOWsl998hz7J9q/bcfUZSlMQzq2Mj1wGCTUWDT7NyjOjTgJuzmh8cETcddRMPzWTfgqNw8lp4/WeVL61y3mrxIxYDypt/p7rQMpjzqifBb8JEiCMEKn\nTpkxoCDF9Wf5NYsUJAYwR4NsnZ9aS9iRMC+T57YGxhFOrZoKJZ0rhHOKvV+/JVDk2L7ApWgRLA/ySARgnB7qeo3QE4cVDP7svjN7SGblkXrE3DUNgPY7eAyv+SRtc1wIjE/fYgyXL5RDi/pwN5P8eHpnF9ncfBCtu5u+O\nQwGVU+FGSAlTTmldpH7djdwK6IqpLWI01TB5tnGu3GWRkwu3UJ root@bigdata11\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDR4G8DZYAOA0PJoKIO7u8rgrfzoTuAhsW+8ZBXXyKWcuFi/ck8kQGuGp4jE3G8p0sh28Ua++eEq6bZqIE7YZvT4bxdREBXkHzEGpxWyewM8EFd/hk+/rCX6wjl8b0iH\nd6tUkfnaGvBrWbTOQ+z3soq03lUbeBd6D5Bo/s8moAcDPPG02trSJHuTnLWm8/ejfaIneU9dfsqoNqba60doqJIAv+4/fHYOa/KKu4Bm48rY4+lakZ9M05IsQaEaAolDBr2N8YgnO9SJn+SEQCWvammRi0+ocLDkXE+di\nCbSoq2kAMHPeZXZBHfjt1OXVXu5I8sYNT2T14IGSJBVoqqnQFB root@bigdata12\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);