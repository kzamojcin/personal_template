## I'm putting together a list of commands that I use. The list is divided by native environments for those commands. 

### It's worth noting, that I'm working on MS Windows 7 OS, so some commands may vary if you use different operating system.
### This list is personalized to my own likings and is not showing all of the commands available for each interface. 




#### Git Bash Command Line:

```
git init ("This creates a new subdirectory named .git that contains all of your necessary repository files – a Git repository skeleton." - https://git-scm.com) 
git config --list (lists some major settings, like user name,email etc.)
git status (checks and shows if anything was modified)
git add	-A(stands for all) (prepares modified file to be commited)
git commit -m "insert comment here" (commits file changes with a comment)
git commit -am (same as above although we automatically go "git" add -A")
git pull origin master (pulls repository version from your github page master branch)
git push (pushes changes to github)
git push origin :old_branch new_branch (This will both delete the old branch and push the new one)
git branch branchName (creates a new branch)
git checkout branchName (to switch between branches)
git checkout -b branchName (to create a new branch and immediately switch to it)
git branch -d branchName (deletes branch locally)
git merge nameOfThebranch (merges the branch into the branch we are currently in)
git merge name_of_the_branch --no-ff ( same as above but beside our "standard" commit addition to the github repository, we also have a dedicated commit just for the merge which holds all the commits that were performed since last merge )("hit escape and type :wq" to exit the extra window)
git remote -v (checks fetch&push address)
git remote set-url origin addressOfTheUrl (sets repository destination for push command)
git clone addressOfTheRepo (clones repository from provided address)
pwd (prints path of the working directory)
cd path (changes directory)
cd .. (goes up one directory)
cd - (switches back to the directory you were previously in)
mkdir directoryName (creates a new directory/folder)
touch filename.filetype (creates new file)
echo > or >> (puts data into a file if there is no such file, creates the file)
echo > (">" replaces all content of the file, with new data)
echo >> (">>" adds data to the current content of the file)

```
For this, and more commands for Git Bash CMD Line check [Getting started with Git Bash CMD Line](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line)

### Node.js

```
node -v (checks version of node on your PC)
touch filename.filetype (creates new file)
```