/* DIRECTIONS:
	Write a function that when given a URL as a string,
	parses out just the domain name and returns it as a string.
	
	For example:
	domainName("http://github.com/carbonfive/raygun") == "github" 
	domainName("http://www.zombie-bites.com") == "zombie-bites"
	domainName("https://www.cnet.com") == "cnet"
*/

/**
* Domain Name Extraction Function
* 
* @param {String} url		URL string ex. https://github.com/sayhelloelijah
* @returns {String}     Value of domain name without extension ex. https://github.com/sayhelloelijah -> github
*/
let domainName = url => url.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0];
domainName('https://www.github.com'); // returns github