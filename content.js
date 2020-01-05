function getBodyTag() {
	return document.getElementsByTagName('body')[0]
}

function notWhitelistedWebsite(blockObject, prefix, list) {
	const time = window.localStorage.getItem('antivytrus-'+prefix+'-'+list+'-'+blockObject.title)
	if (!time) return true;
	if (((new Date).getTime() - time) > 1000 * 60 * 60) {
		window.localStorage.removeItem('antivytrus-'+prefix+'-'+list+'-'+blockObject.title)
		return true;
	}

	return false;
}

function getWebsiteElement(blockObject) {
	const div = document.createElement('div')
	div.style="z-index: 99999 !important;font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;position:fixed;background-color:#d70022;left:0;top:0;width: 100%;height:100%;color:white;padding: 3rem;"
	div.innerHTML = `<h1 style="color:white;font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size: 33px; font-weight: 300;">Pozor! Stránka `+blockObject.title+` bola označená ako nebezpečná.</h1>
	Stránka `+blockObject.title+` bola označená ako nevhodná a pre vašu bezpečnosť na ňu neodporúčame pokračovať.
	<br />
	<br />
	<a href="about:blank"><button style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;cursor: pointer;margin-right: 1rem; margin-bottom: 1rem; padding: 0 1rem; height: 32px; font-size: 15px; color: #ffffff; border: none; border-radius: 2px; background-color: #5a0002;">Rýchlo preč!</button></a>
	<br />
	<br />
		
	<a style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;color:white;" onclick="this.parentNode.getElementsByTagName('p')[0].style.display = 'block';"><u style="cursor: pointer;">Chcem vedieť viac</u></a>

	<p style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;display:none;font-size: 18px;max-width: 800px;">
		Stránka `+blockObject.title+` bola označená ako <b>nevhodná</b> a pre vašu bezpečnosť na ňu <b>neodporúčame</b> pokračovať. 
		Táto stránka môže obsahovať <b>konšpirátorský obsah</b>, ktorý sa nezakladá na pravde.<br/>
		<br/>
		Podrobnosti o stránke `+blockObject.title+` nájdete na stránke nášho projektu: 
		<a style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;color:white;text-decoration: underline;" href="https://www.antivytrus.sk/`+blockObject.title+`">
			www.antivytrus.sk/`+blockObject.title+`
		</a>
		<br/>
		<br/>
		<a onclick="this.parentNode.parentNode.style.display = 'none';window.localStorage.setItem('antivytrus-website-whitelist-`+blockObject.title+`', (new Date()).getTime())" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;color:#840404;font-size: 16px;" href="#">
			Rozumiem rizikám, zobraziť príspevok
		</a>
	</p>`
	return div
}

function blockWebsite(blockObject) {
	const body = getBodyTag()
	const div = getWebsiteElement(blockObject)
	body.prepend(div)
}

function getBlockObject(blockData) {
	for (let i = 0; i < blockData.length; i++){
		const e = blockData[i]
		const currentHost = window.location.hostname.split('.').slice(-2).join('.');
		if (e.domains.indexOf(currentHost) !== -1) {
			return e;
		}
	}
	
	return null;
}

function start(blockData) {
	const blockObject = getBlockObject(blockData)
	blockObject && notWhitelistedWebsite(blockObject, 'website', 'whitelist') && blockWebsite(blockObject)
}

const cachePrefix = 'antivytrus';

if (! window.localStorage.getItem(cachePrefix+'started')) {
	window.localStorage.setItem(cachePrefix+'started', (new Date()).toISOString())
}

function antivytrus() {
	if (!window.localStorage.getItem(cachePrefix+'pages')) {
		fetch('https://api.antivytrus.sk/list.json') 
		.then(function(res) {
			return res.json()
		})
		.then(function(blockData){
			window.localStorage.setItem(cachePrefix+'pages', JSON.stringify(blockData))
			start(blockData)

		})
		.catch(function(e) {
			//
		})
	} else {
		const blockData = JSON.parse(window.localStorage.getItem(cachePrefix+'pages'))
		start(blockData)
	}
}

try {
	antivytrus()
} catch (e) {
	//
}