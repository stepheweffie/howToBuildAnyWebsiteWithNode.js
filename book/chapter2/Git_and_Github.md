Git & Github
============

Before creating our website we are going to learn how to use Git & Github.

Git = A program that allows you to store your code online.

Github = A website that beautifully shows your code to everyone or just 
         yourself. Currently it is the most popular code sharing site and for
         good reason as there are many useful capabilities on the site that 
         allow programmers to work together on a project.
         
<h3>Instructions</h3>
1. Install Git bash [here](http://git-scm.com/downloads) which is a program 
   that allows you to use Git through a command line.

2. Create a Github account [here](https://github.com/join) & just choose the
   free plan for now as this can be changed later.

3. TODO: video explaining how to create a new repository.

Git commands used in the video:

1. When creating a new repository:
    ```sh 
    prompt> # navigated into your folder you want to put on Github
    prompt> git init # initialize your git repository locally
    prompt> git add . # adds everything changed from local to staging
    prompt> git commit -m "first commit" # commits everything in staging
                                         # to be ready to be pushed to Github
    prompt> git remote add origin https://github.com/yourUsername/yourReponame.git
    prompt> git push -u origin master
    ```

2. After creating your repository, making a change to your repo & wanting to 
   show that change on Github:
   ```sh
   prompt> git add . # if you added a file or added onto previous files
   prompt> git add -u # if you deleted files you don't want to show on Github
   prompt> git commit -m "comment about what you changed"
   prompt> git push
   ```

3. If you are tired of typing your username & password everything you type
   `git push` do the following:
   ```sh
   prompt> git remote set-url origin git@github.com:yourUsername/yourReponame.git
   ```
   The git@github.com:yourUsername/yourReponame.git is your SSH and can be
   found right beside your HTTP URL when you click on your repo on Github.