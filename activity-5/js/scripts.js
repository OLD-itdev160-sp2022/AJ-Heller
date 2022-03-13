(function () {

/***************************************
  * Package data and constructor objects
  ***************************************/

var data = [
    {
    name: 'Path Intellisense',
    description: 'Path Intellisense helps to autocomplete filenames',
    author: 'Christian Kohler',
    url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
    downloads: 6560317,
    stars: 102,
    selector: 'p1'
    },
    {
    name: 'CSS Peek',
    description: 'CSS Peek extends HTML and Embedded JavaScript templates with Go To Definition support',
    author: 'Pranay Prakash',
    url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
    downloads: 2740578,
    stars: 71,
    selector: 'p2'
    }
];

//(VSCode)extension constructor funciton
function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;
    this.getFormattedDownloads = function(){
    return this.downloads.toLocaleString();
    };
    this.getFormattedStars = function(){
    return this.stars.toLocaleString();
    };
    }

    /*********************
    * Utility Functions*
    ********************/

    var getTodaysDate = function (){
    var today = new Date();
    return today.toDateString();
    };

    //Returns DOM element by ID

    var getEl = function (id){
    return document.getElementById(id);
    };

    //Writes the package object's data to the appropriate DOM elements
    var writePackageInfo = function (package){
    //get reference to DOM elements
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector +'-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');
    //write package to the DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
    };
    //Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();
    //Write package data one by one
    var settingSync = new Package(data[0]);
    var liquidTemplate = new Package(data[1]);
    writePackageInfo(settingSync);
    writePackageInfo(liquidTemplate);

}())