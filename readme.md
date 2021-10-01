# HacktoberFest-2021 🏆

#### 🎯 HacktoberFest - The month long festival for developers

- This repository aims to give an introduction as to how the Open Source World functions. Use this project to make your first contribution to an open-source project on GitHub. Practice making your first pull request to a public repository before doing the real thing!

- Make sure to grab some cool swags during Hacktoberfest by getting involved in the open-source community and completing some simple tasks in this project.

- This repository is open to all members of the GitHub community. Any member can contribute to this project without being a collaborator. We encourage first time contributors, and also have interesting tasks for experienced developers.

<b>Repo Link : to be updated soon</b>

# <b>What is Hacktoberfest?</b> 😕

A month-long celebration from October 1st to October 31st presented by Digital Ocean and DEV Community collaborated with GitHub to get people involved in Open Source. Create your very first pull request to any public repository on GitHub and contribute to the open-source developer community.

https://hacktoberfest.digitalocean.com/

# Rules ⚓

To earn your Hacktoberfest tee or tree reward, you must register and make four valid pull requests (PRs) between October 1-31 (in any time zone). PRs can be made to participating public repos on GitHub, those that have the Hacktoberfest topic. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate. This year, the first 70,000 participants who successfully complete the challenge will be eligible to receive a prize.

- <b>Read the participation details to learn how to earn your Hacktoberfest tee or tree reward. </b>

- <b>Those who have not registered yet for hacktoberfest can get themselves registered <a href="https://hacktoberfest.digitalocean.com/register">HERE</a></b>
<hr>

# Task 1: Introduce yourself

Let's begin by getting acquainted with contributors over the globe. Contribute in this fun task, where you get to introduce yourself in the dev way!

# Task 2: Porfolio builder

Portfolio building is a way by which you can express yourself and your skills in a more vibrant way, such that both you as well as your skills are reflected. This task enables you to build your own portfolio by modifying the sample template provided by us.

# Task 3 : Movie recommenders

Are you a binge watcher? Well we've created this task specially for you so that you can put your perspective of watching web series and tv shows through your developments skills. Contribute to this movie recommender website and make it the next NETFLIX!

<hr>


# How to contibute :scroll:

### 0. Star The Repo :star2:

Star the repo by pressing the topmost-right button to start your wonderful journey.


### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [Hacktoberfest-21](https://github.com/ietebitmesra/Hacktoberfest-21) by using the <a href="https://github.com/helios1101/HacktoberFest_20/new/master?readme=1#fork-destination-box"><kbd><b>Fork</b></kbd></a> button on top-right of your screen.

 [![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)](https://github.com/ietebitmesra/Hacktoberfest-21/)


### 2. Clone it :busts_in_silhouette:

`NOTE: commands are to be executed on Linux, Mac, and Windows(using Powershell)`

You need to clone (download) it to local machine using

```sh
$ git clone https://github.com/Your_Username/Hacktoberfest-21.git
```

> This makes a local copy of the repository in your machine.

Once you have cloned the `Hacktoberfest-21` repository in Github, move to that folder first using change directory command on Linux, Mac, and Windows(PowerShell to be used).

```sh
# This will change directory to a folder Hacktoberfest-21
$ cd Hacktoberfest-21
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/Your_Username/Hacktoberfest-21.git (fetch)
origin  https://github.com/Your_Username/Hacktoberfest-21.git (push)
```

Now, let's add a reference to the original [Hacktoberfest-21](https://github.com/ietebitmesra/Hacktoberfest-21/) repository using

```sh
$ git remote add upstream https://github.com/ietebitmesra/Hacktoberfest-21.git
```

> This adds a new remote named ***upstream***.

See the changes using

```sh
$ git remote -v
origin    https://github.com/Your_Username/Hacktoberfest-21.git (fetch)
origin    https://github.com/Your_Username/Hacktoberfest-21.git (push)
upstream  https://github.com/Remote_Username/Hacktoberfest-21.git (fetch)
upstream  https://github.com/Remote_Username/Hacktoberfest-21.git (push)
```
`In your case, you will see`
```sh
$ git remote -V
origin    https://github.com/Your_Username/Hacktoberfest-21.git (fetch)
origin    https://github.com/Your_Username/Hacktoberfest-21.git (push)
upstream  https://github.com/ietebitmesra/Hacktoberfest-21.git (fetch)
upstream  https://github.com/ietebitmesra/Hacktoberfest-21.git (push)
```

### 4. Sync it :recycle:

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune

# Switch to `master` branch
$ git checkout master

# Reset local `master` branch to match the `upstream` repository's `master` branch
$ git reset --hard upstream/master

# Push changes to your forked `Hacktoberfest-21` repo
$ git push origin master
```

### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/ietebitmesra/Hacktoberfest-21/pulls).

### 6. Create a new branch :bangbang:

Whenever you are going to contribute. Please create a separate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and switch to branch Folder_Name
$ git checkout -b BranchName
```

Create a separate branch for contribution and try to use the same name of the branch as of folder.

To switch to the desired branch

```sh
# To switch from one folder to other
$ git checkout BranchName
```

To add the changes to the branch. Use

```sh
# To add all files to branch Folder_Name
$ git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin BranchName
```

Finally, go to your repository in the browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effor
 
 

# Prizes

![Prizes](https://raw.githubusercontent.com/sakpab2602/Hacktoberfest-21/master/Task1/img/prizes.jpeg)

This time around we have different prizes for the top 5 contributors who will be judged on the basis of points distribution criteria in each task!
The special prizes include : -
1. Smart-watches
2. Ear buds
3. Bags

**To be eligible for prizes register <a href="http://bit.ly/hacktober2021">HERE</a>**

 # Prize distribution criteria

- First 5 contributors who have made pull requests in all 3 mentioned tasks.

- Winners will be selected on the basis of

  - First come first serve (FCFS)
  - QUALITY OF CODE

- Points will be allotted for each task and highest scorers will be selected as winners. Marks distribution criteria will be mentioned in detail in respective task's `readme.md`

- All decisions made by IETE will be final and binding, no changes will be entertained after the result declaration.
