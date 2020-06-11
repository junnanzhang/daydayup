#删除分支
git branch -D dev //删除本地分支 或者小d

git push origin —delete <branchName>


git config credential.helper store 在这之后你只需要再输入一次密码， Git 就会把你的密码保存下来

git log -p

git log --stat

git reflog

git show commit号

Git diff --staged

git checkout branch1

git rebase master



**在 Git 中，有两个「偏移符号」： ^ 和 ~。 ^ 的用法：在 commit 的后面加一个或多个 ^ 号，可以把 commit 往回偏移，偏移的数量是 ^ 的数量。例如：master^ 表示 master 指向的 commit 之前的那个 commit； HEAD^^ 表示 HEAD 所指向的 commit 往前数两个 commit。 ~ 的用法：在 commit 的后面加上 ~ 号和一个数，可以把 commit 往回偏移，偏移的数量是 ~ 号后面的数。例如：HEAD~5 表示 HEAD 指向的 commit往前数 5 个 commit。**


没有被 track 的文件（即从来没有被 add 过的文件不会被 stash 起来，因为 Git 会忽略它们。如果想把这些文件也一起 stash，可以加上 `-u` 参数，它是 `--include-untracked` 的简写


查看所有标签 git tag
创建标签 git tag name
指定提交信息  git tag -a name -m “comment”’
删除标签   git tag -d name
标签发布 git push origin name



#issue

Another git process seems to be running in this repository, e.g.


Try deleting index.lock file in your .git directory.
rm -f .git/index.lock

#git clean


Git clean命令用来从你的工作目录中删除所有没有tracked过的文件
Git clean经常和git reset —hard一起结合使用. 记住reset只影响被track过的文件, 所以需要clean来删除没有track过的文件. 结合使用这两个命令能让你的工作目录完全回到一个指定的<commit>的状态
用法
git clean -n
是一次clean的演习, 告诉你哪些文件会被删除. 记住他不会真正的删除文件, 只是一个提醒
git clean -f
删除当前目录下所有没有track过的文件. 他不会删除.gitignore文件里面指定的文件夹和文件, 不管这些文件有没有被track过
git clean -f <path>
删除指定路径下的没有被track过的文件
git clean -df
删除当前目录下没有被track过的文件和文件夹
git clean -xf
删除当前目录下所有没有track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件
Git reset —hard和git clean -f是一对好基友. 结合使用他们能让你的工作目录完全回退到最近一次commit的时候
Git clean对于刚编译过的项目也非常有用. 如, 他能轻易删除掉编译后生成的.o和.exe等文件. 这个在打包要发布一个release的时候非常有用
下面的例子要删除所有工作目录下面的修改, 包括新添加的文件. 假设你已经提交了一些快照了, 而且做了一些新的开发
git reset —hard
git clean -df
运行后, 工作目录和缓存区回到最近一次commit时候一摸一样的状态，git status会告诉你这是一个干净的工作目录, 又是一个新的开始了！