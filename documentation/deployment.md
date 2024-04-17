# Deployment

## Tools Used:

---

- Content Management System - WordPress
- Communication - Discord
- Team Management and Task Assignment - Trello
- Local Environment - CognacBox
- Version Control - GitHub

### Content Management System - WordPress

WordPress is a popular CMS that is completely free to download and use. It has SEO optimisation features, a
user-friendly interface, as well as a supported network of developmnent tools and plugins.

### Communication - Discord

We chose to use Discord for our team Communication as it is a free platform that people are already familiar with. Some
reasons we chose to use discord are:

- Centralised voice/video and text communication program between team members.
- Creation of different channels for different topics eg: General, Backend Information, Themes and Ideas, Collab Links.
- It's available across all devices computers/phones, which allows people to receive messages and reply easily and
  effectively.
- Allows users to screen share if something needs to be shown to the team.
- You can create an account with an email by going to the following link: **[Discord](https://discord.com/)**
- Our team's Discord server can be accessed by clicking on the following
  link: **[Discord Server](https://discord.gg/2Mj2bPjSnW)**

### Project Management - Trello:

Trello is a web-based application that allows users to create boards, lists, and cards to organise and prioritise their
projects.

- To register for Trello, you will require an email to make an account.
- You can access the Trello board by clicking on the following
  link: **[Trello Board](https://trello.com/b/buEoNuGt/cp3402-team-4)**
- All our current tasks, completed tasks and planned future tasks are listed on the Trello board so someone joining the
  project will be able to use the link as a reference point.

### Local Environment - CognacBox:

CognacBox is a LAMP stack Local Development Environment that is free to download and use, but can take some time to set
up as you will also need to
download **[Vagrant](https://developer.hashicorp.com/vagrant/install?product_intent=vagrant)**
and **[VirtualBox](https://www.virtualbox.org/wiki/Downloads)**.
You can find the link to the CognacBox GitHub **[Here](https://github.com/reddingwebpro/cognacbox)**.

Reasons we chose to use CognacBox:

- OS: Ubuntu-22.04-LTS (Jammy Jellyfish) **Long Term Support Through 2027**
- APACHE: 2.4 with headers, rewrite, includes, expires
- Supports up to PHP 8.2
- Supports MySQL 8.0
- Is set up to run the latest version of WordPress for the foreseeable future.

### Version Control - GitHub:

Version control for this project was done through GitHub. We have two branches for this Project, Main and Development.
The Main was used to push the final version of the project, while the Development branch was used to push the latest
changes to the project.

- You can access the GitHub repository by clicking on the following
  link: **[GitHub Repository](https://github.com/cp3402-students/project-team4)**

## Initial Set Up

---

### CongacBox:

- Download and install **[Vagrant](https://developer.hashicorp.com/vagrant/install?product_intent=vagrant)**
  and **[VirtualBox](https://www.virtualbox.org/wiki/Downloads)**.
- Open your command line and change directory to where you want to install CognacBox.

```sh
cd <chosen directory>
```

- Use the following command to clone the CognacBox repository.

```sh 
git clone https://github.com/reddingwebpro/cognacbox <project filename>
```

- Change directory to the project folder.

```sh 
cd <project filename>
```

- Use the following command to start the Vagrant box.

```sh 
vagrant up
```

- This can take a while to set up as its installing the OS and all the necessary software. You will know it has finished
  installing when the command line ***returns to being interactive***. eg: C:\dev\cp3402>_
- After it has finished installing open your web browser and go to the following
  link: **[http://192.168.33.10/](http://192.168.33.10/)** to see the CognacBox welcome page.
- ***Within the directory you installed CognacBox, there is a public folder. This is where you will place the files for
  your WordPress installation.***

### WordPress:

- Download the latest version of WordPress from the following link: **[WordPress](https://wordpress.org/download/)**.
- Unzip the file and copy the contents of the unzipped WordPress(+ version number) folder ***and grab the subdirectory
  inside called wordpress***.
- Drag/copy the wordpress folder into the ***public folder*** of the CognacBox directory.
- Once the wordpress folder has been sucessfully transfered go your web browser and click on the
  following **[LINK](http://192.168.33.10/wordpress/)** to set up WordPress.
- Select the Language you wish to install and click ***Continue***.
- Next, open **[CognacBox Welcome Page](http://192.168.33.10)** in a new tab in your browser and scroll down to the ***
  Database Area***.
- Go back to your WordPress installation page and click ***Let's go!***
- On the next page transfer the information from the Welcome Page:
    - Database Name: cognacbox
    - Username: root
    - Password: root
    - Database Host: localhost
    - Leave Table Prefix as wp_ and click ***Submit***
- Click ***Run the installation***
- Fill in the following information:
    - Site Title: U3A Online
    - Username: user
    - Password: user
    - Tick the checkbox to confirm weak password (password strength is not important in local devlopment so the easier
      to remember the better)
    - Email: [your email address]
    - Click ***Install WordPress*** button
- Click ***Log In***
- Enter Username and Password set up in the previous steps to gain access to WordPress backend.

### GitHub:

- Open your command line
- navigate to your theme directory inside your local development environment using:

```sh
cd <cognacbox installation>/public/wordpress/wp-content/themes
```

- Once in the themes folder type the command to clone the repository:

```sh
git clone https://github.com/cp3402-students/project-team4 <theme name>
```

- Once the repository has finished cloning use command line to get into <theme name> directory

```sh
cd <theme name> 
```

- Check to see what branch you are on with:

```sh
git branch
```

- Swap to the Development branch with:

```sh
git checkout Development
```

- Update the branch with:

```sh
git pull
```

### IDE configuration:

- Download and install **[Node.js](https://nodejs.org/en/download)**
  and **[Composer](https://getcomposer.org/download/)**
- Open the GitHub Repository in your IDE
- Open the terminal with in the IDE
    - The GitHub Repo already comes with the required files to carry out the next part so you can just run the commands
      provided you will have everything working.
- Run command to install Node Packages:
    - The next part can take a while, and will give you lots of "Depreciation" errors, its okay to ignore these errors.

```sh
npm install
  ```

- Run command to install Composer Packages:
    - If at any point with this set up you get asked for permission to install "php-compatibility" packages type 'Y' and
      continue install

```sh
 composer install 
  ```

- After both of these commands are finished run the script

```sh
npm run dev
```

- This script will run Browser-Sync and Node-Sass at the same time to look for changes in files, compile SASS files into
  CSS files and refresh the webpage in Browser-Sync.

## Return Set Up

---

### CognacBox:

- Open command line
- Navigate to your development environment using:

```sh
cd <location of your development environment> 
```

- Start CognacBox using command:

```sh
vagrant up 
```

- You will know the process is finished when ***the command line returns to being interactive***.

### WordPress:

- After CognacBox is running return to your website backend by
  visiting **[WP Backend](http://192.168.33.10/wordpress/wp-admin)**.

### IDE:

- Open project in IDE
- Go to the terminal section within IDE.
- Run command:

```sh
npm run dev 
```

- Browser-Sync and Node-Sass will run
- Start developing :)

## Staging Site

---

### Access staging site:

- Website Address: 52.63.166.166
- WP Backend: 52.63.166.166/wp-admin
- SuperUser: user
- Password: 1r=S1ugdxLyh

#### WordPress site Back Up:

- Access Staging Wordpress Backend using credentials above.
- Go down to ***Tools*** from the sidebar on the Left.
    - Select ***Export*** from the sub menu.

- Select ***All Content*** radio button
- Click ***Download Export File***
- Save Export into Project GitHub Repository in the ***Backups*** directory

#### Export Theme:

- Open project repository in IDE
- Open the Terminal within IDE
- Run command to batch Theme into zip file.

```sh
npm run bundle
```

## Production Site

---

### Access Production Site:

- Website Address: 170.64.226.235
- WP Backend: 170.64.226.235/wp-admin
- SuperUser: user
- Password: i4T#mmbk^5H^XTpdW7

#### Import WordPress Posts/Pages:

- Access Production Wordpress Backend using credentials above.
- Go down to ***Tools*** from the sidebar on the Left.
    - Select ***Import*** from the sub menu.
- Find the WordPress import section from the table and click ***Run Importer***
- Click ***Choose File***
- Navigate to your Backups folder within the Project GitHub Repository
- Find the ***latest backup zip file*** and click ***Open***
- Click ***Upload file and import***
- Tick ***Download an import file attachments***
- Click ***Submit***
- Check for Error Messages and problems
- If nothing is flagged the site is imported.

#### Import Theme:

- Access Production Wordpress Backend using credentials above.
- Go down to ***Appearance*** from the sidebar on the Left.
- Click ***Add New Theme***
- Click ***Upload Theme***
- Click ***Choose File***
- Find Theme Export file in Project GitHub Repository
- Click ***Open***
- Click ***Install Now***
- After theme is sucessfully installed Click ***Activate***

