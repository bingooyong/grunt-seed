grunt-seed
==========

a web project seed used grunt



#安装插件

	npm install --save-dev
	
	
#启动本地开发

	grunt server


#部署

	grunt build

#测试

	grunt test

#插件的使用


##css

1. [autoprefixer] 解析CSS文件并且添加浏览器前缀到CSS规则里，使用 [Can I Use]的数据来决定哪些前缀是需要的

2. [grunt-contrib-less] 编译 LESS 文件到 CSS.

   
##JS

1. [grunt-contrib-uglify] 使用UglifyJS压缩JS文件
2. [grunt-contrib-jshint] JS文件格式检查

##Image

1. [grunt-contrib-imagemin] 图片压缩

##Html

1. [grunt-contrib-htmlmin] html压缩

##Test

1. [grunt-karma] 运行 Karma 测试

##Automation自动化

1. [load-grunt-tasks] 简化加载npmtasks
2. [grunt-concurrent] 用来执行多线程任务的
3. [time-grunt] 计算任务的执行时间
4. [grunt-newer] 配置 [Grunt] 的 Task 只执行新文件
5. [grunt-open] 自动打开浏览器
5. [grunt-contrib-connect] 启动一个 Web Server
6. [grunt-connect-proxy] 启动一个代理 Web Server 用于代理后端服务
7. [grunt-contrib-copy]  自动复制粘贴文件
8. [grunt-rev] 文件名md5避免缓存
9. [grunt-contrib-watch] 监测文件变化，自动执行其他Task
10. [grunt-contrib-livereload] 自动刷新浏览器，增加F5的使用寿命，开发必备
11. [grunt-contrib-clean] 清理无用文件
12. [grunt-usemin] 自动合并文件，concat -> uglifyjs






[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started
[Can I Use]: http://caniuse.com/
[autoprefixer]: https://github.com/ai/autoprefixer
[grunt-contrib-connect]: https://github.com/gruntjs/grunt-contrib-connect
[grunt-connect-proxy]: https://github.com/drewzboto/grunt-connect-proxy
[grunt-concurrent]: https://github.com/sindresorhus/grunt-concurrent
[load-grunt-tasks]: https://github.com/sindresorhus/load-grunt-tasks
[time-grunt]: https://github.com/sindresorhus/time-grunt
[grunt-newer]: https://github.com/tschaub/grunt-newer
[grunt-open]: https://github.com/jsoverson/grunt-open

[grunt-contrib-copy]: https://github.com/gruntjs/grunt-contrib-copy
[grunt-rev]: https://github.com/cbas/grunt-rev
[grunt-contrib-less]: https://github.com/gruntjs/grunt-contrib-less
[grunt-contrib-clean]: https://github.com/gruntjs/grunt-contrib-clean
[grunt-contrib-uglify]: https://github.com/gruntjs/grunt-contrib-uglify
[grunt-contrib-jshint]: https://github.com/gruntjs/grunt-contrib-jshint
[grunt-contrib-imagemin]: https://github.com/gruntjs/grunt-contrib-imagemin
[grunt-contrib-htmlmin]: https://github.com/gruntjs/grunt-contrib-htmlmin
[grunt-contrib-watch]: https://github.com/gruntjs/grunt-contrib-watch
[grunt-contrib-livereload]: https://github.com/gruntjs/grunt-contrib-livereload
[grunt-contrib-clean]: https://github.com/gruntjs/grunt-contrib-clean
[grunt-usemin]: https://github.com/yeoman/grunt-usemin
[grunt-karma]: https://github.com/karma-runner/grunt-karma