## Git 使用方法

- 下载/克隆一个项目使用命令 `git clone [url]` 回车
- 设置项目作者使用命令 `git config --global user.name “chenxx”`
- 查看项目作者使用命令 `git config --global user.name`
- 设置项目邮箱使用命令 `git config --global user.email “ryanwell@foxmail.com”`
- 查看项目邮箱使用命令 `git config --global user.email`
- 查看配置列表使用命令 `git config --list`
- 查看提交日志，包括他人提交的 `git log`
- 查看本地分支 `git branch`
- 查看远程分支 `git branch -a`
- 切换分支 `git checkout [branckName]` 如 `git checkout develop`
- 直接拉某个远程分支的代码 `git origin [branckName]` 如 `git origin develop`

* 对比工作区和暂存区代码 `git diff`
* 对比暂存区和版本库代码 `git diff --cached`
* 对比工作区和版本库代码 `git diff master`
* 从暂存区撤回工作区 `git reset HEAD [temp.vue]`
* 让暂存区->版本区的代码覆盖工作区代码（如果暂存区没有则从版本区去找） `git checkout -- xxx.js`
