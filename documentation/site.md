# Site.md

## Organising the Site for Future Updates & Maintenance:
With respect to those who are taking over site development going forward, the focus for them with regard to Wordpress features will be the plugins that we have installed for the site.

### How the Site is Organised:
The organisation of WordPress features abides by the default format, (outlined below) and includes plugins that implement additional features to the WordPress user interface:

#### Posts
All posts - This is the main panel for the posts feature, and is where the created posts are shown in alphabetical order by default. If the user wishes to make modifications to the content of a particular category, they can do so by adjusting the category filter to, for example, the _announcements_ category, then click the filter button.

Add New Post - This panel automatically creates a new post for the user to begin inserting post content into.

Categories - This is a variation of the main panel that features the created categories, as well as the ability to create categories and fill in relevant information, such as the name, parent category, and description.

Tags - This is another variation of the main panel, which features the created tags, as well as the ability to create tags and fill in relevant information, such as the name, parent category, and description.

#### Media
Library - This is where uploaded media such as images and videos are found on the site, which features the ability to filter that which is presented. This will be useful in case the user has increased the quantity of uploaded media, to the extent of making it difficult to locate a precise item in the library.

Add New Media File - This panel is where the user can either drag-and-drop the media that they wish to add to the library, or browse the files on their computer to make additions.

#### Pages
All Pages - This is the main panel for the pages feature, and is where the created pages are shown in alphabetical order by default.

Add New Page - This panel automatically creates a new page for the user to begin inserting page content into.

#### Comments
Comments have been enabled under course posts to allow students to carry out discussions.

#### Appearance
Themes - This is the panel where the available themes for the site are located, which includes the ability to interact with our custom theme, or browse for other themes to try out.

Customise - This is the panel where the user can make changes to various site features such as the utilised theme, site identity, colours, as well as many others.

Widgets - This is the panel where the user can interact with and modify the available widgets, predominately the sidebar.

Menus - This is the panel where the user can create and make changes to the menu navigation presented at the top of the site, amongst other menus that the user can create on this panel.

Header - This is used for quick access to the header image feature as part of the Customise panel.

Background - This is used for quick access to the background image feature as part of the Customise panel.

Theme Check - This panel is the additional feature made available by the 'Theme Check' plugin, and is what allows the user to view and manage the theme integrity, making sure that it is ready for use on the live site.

Theme File Editor - This panel is an additional feature made available by the 'WP File Manager' plugin, and is where files pertaining to the theme can be modified. However, since we have utilised IDE's and other backend tools in the production of this site, modifications via this method are not recommended for the user.

#### Plugins
Installed Plugins - This panel shows a list of all the plugins that are installed for the site, with some having been installed by us, and others having come preinstalled with the site (further details on the plugins we have installed are discussed further below).

Add New Plugin - This panel is where the user can go, to install plugins that they wish to use for the site.

Plugin File Editor - This is where files pertaining to plugins can be configured. However, this functionality has not been employed by us in the making of this site. Furthermore, it requires knowledge of PHP in order to make modifications to it. It is for these reasons that it is not recommended for the user to interact with this functionality, unless the user knows what they are doing.

#### Users
All Users - This panel shows a list of all the WordPress users for the site (not to be mistaken for guests and members of the site)

Add New User - This panel is where the user can go if they wish to add an additional WordPress user for site development.

Profile - This panel is where the user can go to customise their user profile, including the displayed colour scheme, name, email and password for the user.

#### Tools
Import - This panel is the additional feature made available by the 'WordPress Importer' plugin, and is what allows the user to import non-media items into WordPress

Export - This panel is where the user will go if they wish to export the site as an XML file.

Site Health - This panel is where to user will go to access, modify and maintain the health of the site, which includes its user performance and security.

#### Settings
General - This is the main panel for site settings, and is where the user will go if they wish to make changes to the site name, chosen language in addition to timezones.

Writing - This is the panel that the user will go to if they wish to update settings pertaining to posts and associated categories.

Reading - This is the panel that the user will go to if they wish to make changes to how certain items are displayed on the site, such as what is displayed in place of the 
homepage, the quantity of information shown for a post, amongst other features.

Discussion - This is the panel that the user will go to if they wish to make changes to the classification rating of site discussion, in addition to the way guests and members present themselves on the site, including avatar settings.

Media - This is the panel that the user will go to if they wish to adjust the pixel proportions of image sizes on the site.

Permalinks - This is the panel that the user will go to if they wish to make changes to the way that permalinks are structured on the site.

Privacy - This is the panel that the user will go to if they wish to make changes to the site privacy policy.

### Featured Plugins:
- 'Show Current Template' (Author: JOTAKI Taisuke, Acquired from WordPress.org Plugin Page at (https://wordpress.org/plugins/show-current-template/))
- 'Theme Check' (Author: Themes Team, Acquired from WordPress.org Plugin Page at (https://wordpress.org/plugins/theme-check/))
- 'Wordpress Importer' (Author: wordpressdotorg, Acquired from WordPress.org Plugin Page at (https://wordpress.org/plugins/wordpress-importer/))
- 'WP File Manager' (Author: mndpsingh287, Acquired from WordPress.org Plugin Page at (https://wordpress.org/plugins/wp-file-manager/))

Further information regarding how we have utilised these plugins can be found below.

### Making Updates to the Site:
#### Creating new pages
The process of creating a new page is simple. On the left-hand side of the WordPress dashboard, click on the menu item called 'Pages'. From here, you can click on the button titled 'Add New Page' to make a new page. Alternatively, the sub-menu item of the same name can be selected to create a page. When a page is made without a parent designation, it is then added to the website navigation menus. If a page is made with a parent designation, it will need to be added to the navigation menus. This can be achieved by going to the 'Menus' panel under 'Appearances'.

#### Creating new posts
The process of creating a new post is simple. On the left-hand side of the WordPress dashboard, click on the menu item called 'Posts'. From here, you can click on the button titled 'Add New Post' to make a new post. So far, the website features numerous categories pertaining to different site content, such as 'Announcements', 'Courses' (which features sub-categories for different genres), as well as 'News', to name a couple. It is advised that the user should make use of these categories for the relevant posts. That being said, the user is free to create new categories for new types of posts.

#### Utilising the Show Current Template plugin
This plugin was used to show the theme elements used for each page. The user will be able to take advantage of this plugin whilst viewing a page, where the 'Show Current Template' option will be clickable for showing theme elements, located on the top navigation bar.

#### Utilising the Theme Check plugin
This plugin was used to check the theme files for any issues in regard to how well theme standards are applied. The user will be able to take advantage of this plugin, by going to 'Appearances' on the left-hand panel, then click on the sub-menu titled 'Theme Check'. 
From here, the user can choose the theme that they wish to check and then click the 'check' button. If the theme has any issues, the plugin will provide a list containing them, which may include suggestions on how the user can fix the theme.

#### Utilising the WordPress Importer plugin
This plugin introduces the 'import' option within the 'Tools' menu, which allows the user to both Import and Export WordPress XML files containing site content.

#### Utilising the WP File Manager plugin
This plugin introduces various features to the WordPress site regarding WordPress files and the ability to more precisely configure them. The user will be able to take advantage of this plugin, whenever the user is dealing with the files of WordPress content and media more directly, as the plugin allows for greater leniency with regard to file types and sizes.
