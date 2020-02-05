const list = [
	{
		"title": "VigilantCitizen",
		"language" : "en",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["vigilantcitizen.com"],
		"facebook": ["https://www.facebook.com/realvigilantcitizen"]
	},
	{
		"title": "Zvedavec",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["zvedavec.org"]
	},
	{
		"title": "Protiprudu",
		"language" : "sk",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["protiprudu.org"],
		"facebook": ["https://www.facebook.com/podcastprotiproudu"]
	},
	{
		"title": "OrgoNet",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["orgo-net.blogspot.sk"],
		"facebook": ["https://www.facebook.com/Orgo-Net-na-FB-232171370242412"]
	},
	{
		"title": "Aeronet",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["aeronet.cz"],
		"facebook": ["https://www.facebook.com/aeronet.cz"]
	},
	{
		"title": "Conspi",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["conspi.cz"],
		"facebook": ["https://www.facebook.com/conspicz"]
	},
	{
		"title": "NewWorldOrderOpposition",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["nwoo.org"],
		"facebook": ["https://www.facebook.com/groups/344917118941679"]
	},
	{
		"title": "Exopolitika",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["exopolitika.cz"],
		"facebook": ["https://www.facebook.com/Exopolitika-377359218568"]
	},
	{
		"title": "Badatel",
		"language" : "sk",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["badatel.net"],
		"facebook": ["https://www.facebook.com/B%C3%A1date%C4%BEnet-538138222998497"]
	},
	{
		"title": "CeskeNezavisleZpravodajstvi",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["czechfreepress.cz"],
		"facebook": ["https://www.facebook.com/czechfreepress"]
	},
	{
		"title": "StratenaEuropa",
		"language" : "sk",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["stratenaeuropa.sk"]
	},
	{
		"title": "BraveNewWorldOrder",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["bnw-nwo.wz.cz"]
	},
	{
		"title": "Protiprud",
		"language" : "sk",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["protiprud.sk"]
	},
	{
		"title": "Protiproud",
		"language" : "cz",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["protiproud.cz"],
		"facebook": ["https://www.facebook.com/protiproud.cz"]
	},
	{
		"title": "ZemaVek",
		"language" : "sk",
		"type" : "conspiracy",
		"notes" : "",
		"domains": ["zemavek.sk"],
		"facebook": ["https://www.facebook.com/ZEMAVEK"]
	}
];

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

function isWhitelistedFacebook(blockObject) {
	return !notWhitelistedWebsite(blockObject, 'facebook', 'whitelist')
}

function isBlacklistedFacebook(blockObject) {
	return !notWhitelistedWebsite(blockObject, 'facebook', 'blacklist')
}

function getWebsiteElement(blockObject) {
	const div = document.createElement('div')
	div.style="z-index: 16777271 !important;font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;position:fixed;background-color:#d70022;left:0;top:0;width: 100%;height:100%;color:white;padding: 3rem;"
	
	const header = document.createElement('h1')
	header.style = "color:white;font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size: 33px; font-weight: 300;"
	header.innerText = 'Pozor! Stránka '+blockObject.title+' bola označená ako nebezpečná.'
	div.append(header)
	
	div.append(document.createElement('br'))
	div.append(document.createElement('br'))
	
	const blankButton = document.createElement('button')
	blankButton.style = "font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;cursor: pointer;margin-right: 1rem; margin-bottom: 1rem; padding: 0 1rem; height: 32px; font-size: 15px; color: #ffffff; border: none; border-radius: 2px; background-color: #5a0002;"
	blankButton.innerText = 'Rýchlo preč!'
	const blankHref = document.createElement('a')
	blankHref.href = 'about:blank'
	blankHref.append(blankButton)
	div.append(blankHref)
	
	div.append(document.createElement('br'))
	div.append(document.createElement('br'))
	
	const moreUnderline = document.createElement('u')
	moreUnderline.style = 'cursor: pointer;'
	moreUnderline.innerText = 'Chcem vedieť viac'
	const moreHref = document.createElement('a')
	moreHref.style = "font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;color:white;"
	moreHref.onclick = function(){this.parentNode.getElementsByTagName('p')[0].style.display = 'block';}
	moreHref.append(moreUnderline)
	div.append(moreHref)

	const paragraf = document.createElement('p')
	paragraf.style = "font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;display:none;font-size: 18px;max-width: 800px;"
	paragraf.append('Stránka '+blockObject.title+' bola označená ako nevhodná a pre vašu bezpečnosť na ňu neodporúčame pokračovať.')
	paragraf.append(' Táto stránka môže obsahovať konšpirátorský obsah, ktorý sa nezakladá na pravde.')
	paragraf.append(document.createElement('br'))
	paragraf.append('Podrobnosti o stránke '+blockObject.title+' nájdete na stránke nášho projektu: ')
	linkHref = document.createElement('a')
	linkHref.style = "font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;color:white;text-decoration: underline;"
	linkHref.href = 'https://antivytrus.sk/'+blockObject.title
	linkHref.innerText = 'antivytrus.sk/'+blockObject.title
	paragraf.append(linkHref)
	paragraf.append(document.createElement('br'))
	paragraf.append(document.createElement('br'))
	const continueHref = document.createElement('a')
	continueHref.style = "font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;color:white;font-size:12;cursor: pointer;"
	continueHref.onclick = function(){this.parentNode.parentNode.style.display = 'none';window.localStorage.setItem('antivytrus-website-whitelist-'+blockObject.title, (new Date()).getTime())}
	continueHref.innerText = 'Rozumiem rizikám, zobraziť príspevok'
	paragraf.append(continueHref)
	div.append(paragraf)

	return div
}

function handleWrapper(wrapper) {
	wrapper.classList.add('antivytrus')
}

function hideFacebookWrapper(wrapper, blockObject) {
	wrapper.style.display = 'none';
	handleWrapper(wrapper)
}

function isWrapperHandled(wrapper) {
	return wrapper.classList.contains('antivytrus')
}


function blockFacebook(blockData) {
	const wrappers = document.getElementsByClassName('userContentWrapper')

	for (let i = 0; i < wrappers.length; i++) {
		const wrapper = wrappers[i]

		if (isWrapperHandled(wrapper)) {
			continue;
		}

		const anchors = wrapper.getElementsByTagName('a')
		for (let j = 0; j < anchors.length; j++) {
			const link = anchors[j].href
			const blockObject = getFacebookBlockObject(blockData, link)

			if (blockObject) {
				if (isBlacklistedFacebook(blockObject)) {
					hideFacebookWrapper(wrapper, blockObject)
					break;
				}

				if (!isWhitelistedFacebook(blockObject)) {
					blockFacebookWrapper(wrapper, blockObject)
					break;
				}
			}
		}
	}
}

function blockFacebookWrapper(wrapper, blockObject) {
	handleWrapper(wrapper)
	const warning = document.createElement('div')
	warning.style.backgroundColor = 'white'
	warning.style.minWidth = '100%'
	warning.style.minHeight = '100%'
	// warning.style.position = 'absolute'
	warning.style.zIndex = 300

	const img = document.createElement('img')
	img.style = "max-width:100%"
	img.src = "https://api.antivytrus.sk/image.jpg"
	warning.append(img)

	const div = document.createElement('div')
	div.style = "text-align:center;padding:10px;"
	div.append("Stránka "+blockObject.title+" bola označená ako nevhodná a pre vašu bezpečnosť na ňu neodporúčame pokračovať.")

	div.append(document.createElement('br'))
	div.append(document.createElement('br'))

	const buttonHide = document.createElement('button')
	buttonHide.style = "align-items:flex-start; background-color:rgb(24, 119, 242); background-position-x:0px; background-position-y:0px; border-bottom-color:rgb(24, 119, 242); border-bottom-left-radius:2px; border-bottom-right-radius:2px; border-bottom-style:solid; border-bottom-width:1px; border-collapse:collapse; border-image-outset:0px; border-image-repeat:stretch; border-image-slice:100%; border-image-source:none; border-image-width:1; border-left-color:rgb(24, 119, 242); border-left-style:solid; border-left-width:1px; border-right-color:rgb(24, 119, 242); border-right-style:solid; border-right-width:1px; border-top-color:rgb(24, 119, 242); border-top-left-radius:2px; border-top-right-radius:2px; border-top-style:solid; border-top-width:1px; box-shadow:none; box-sizing:border-box; color:rgb(255, 255, 255); cursor:pointer; direction:ltr; display:inline-block; font-family:-apple-system, system-ui, Arial, sans-serif; font-size:12px; font-stretch:100%; font-style:normal; font-variant-caps:normal; font-variant-east-asian:normal; font-variant-ligatures:normal; font-variant-numeric:normal; font-weight:700; height:28px; letter-spacing:normal; line-height:26px; margin-bottom:0px; margin-left:0px; margin-right:0px; margin-top:0px; /*max-width:242px;*/ outline-color:rgb(255, 255, 255); outline-style:none; outline-width:0px; overflow-x:visible; overflow-y:visible; padding-bottom:0px; padding-left:11px; padding-right:11px; padding-top:0px; position:relative; text-align:center; text-indent:0px; text-rendering:auto; text-shadow:none; text-transform:none; transition-delay:0s, 0s; transition-duration:0.3s, 0.001s; transition-property:background, border-color, border-width, color; transition-timing-function:cubic-bezier(0.1, 0.7, 0.1, 1), ease; vertical-align:middle; width: auto; word-spacing:0px; writing-mode:horizontal-tb; -webkit-appearance:none; -webkit-border-horizontal-spacing:0px; -webkit-border-vertical-spacing:0px; -webkit-font-smoothing:antialiased; -webkit-border-image:none;"
	buttonHide.onclick = function(){this.parentNode.parentNode.parentNode.style.display = 'none';window.localStorage.setItem('antivytrus-facebook-blacklist-'+blockObject.title, (new Date()).getTime())}
	buttonHide.append('Už nezobrazovať túto stránku')
	div.append(buttonHide)

	div.append(document.createElement('br'))
	div.append(document.createElement('br'))

	const u = document.createElement('u')
	u.style = "color:grey;cursor: pointer;"
	u.onclick = function(){this.parentNode.getElementsByTagName('p')[0].style.display = 'block';}
	u.innerText = "Chcem vedieť viac"
	div.append(u)

	const p = document.createElement('p')
	p.style = "display:none;padding:10px;"
	const b1 = document.createElement('b')
	b1.innerText = 'nevhodná'
	const b2 = document.createElement('b')
	b2.innerText = 'neodporúčame'
	const b3 = document.createElement('b')
	b3.innerText = 'konšpirátorský obsah'
	p.append("Stránka "+blockObject.title+" bola označená ako ",b1," a pre vašu bezpečnosť na ňu ",b2," pokračovať. Táto stránka môže obsahovať ",b3,", ktorý sa nezakladá na pravde. ")
	
	p.append(document.createElement('br'))
	p.append(document.createElement('br'))

	p.append("Podrobnosti o stránke "+blockObject.title+" nájdete na stránke nášho projektu: ")
	const aInfo = document.createElement('a')
	aInfo.style = "color:grey;"
	aInfo.target = "_blank"
	aInfo.href = "https://antivytrus.sk/"+blockObject.title
	aInfo.innerText = "antivytrus.sk/"+blockObject.title
	p.append(aInfo)

	p.append(document.createElement('br'))
	p.append(document.createElement('br'))

	const aShow = document.createElement('a')
	aShow.style = "color:rgb(24, 119, 242);"
	aShow.href= "#"
	aShow.onclick = function(){
		for (let i = 0; i < wrapper.children.length; i++) {
			wrapper.children[i].style.display = 'block'
		}
		this.parentNode.parentNode.parentNode.style.display = 'none';
		window.localStorage.setItem('antivytrus-facebook-whitelist-'+blockObject.title, (new Date()).getTime())
	}
	aShow.innerText = "Rozumiem rizikám, zobraziť príspevok"
	p.append(aShow)

	div.append(p)

	warning.append(div)

	for (let i = 0; i < wrapper.children.length; i++) {
		wrapper.children[i].style.display = 'none'
	}

	wrapper.prepend(warning)
}

function blockWebsite(blockObject) {
	const body = getBodyTag()
	if (!isWrapperHandled(body)) {
		const div = getWebsiteElement(blockObject)
		body.prepend(div)
		handleWrapper(body)
	}
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

function getFacebookBlockObject(blockData, link) {
	for (let i = 0; i < blockData.length; i++) {
		const blockObject = blockData[i];

		if (blockObject.facebook) {
			for (let j = 0; j < blockObject.facebook.length; j++) {
				if (link.includes(blockObject.facebook[j])) {
					return blockObject;
				}
			}
		}

		if (blockObject.domains) {
			for (let j = 0; j < blockObject.domains.length; j++) {
				if (link.includes(blockObject.domains[j])) {
					return blockObject;
				}
			}
		}	
	}


	return null;
}

function start(blockData) {
	if (isFacebook()) {
		blockFacebook(blockData)
	} else {
		const blockObject = getBlockObject(blockData)
		blockObject && notWhitelistedWebsite(blockObject, 'website', 'whitelist') && blockWebsite(blockObject)
	}
}

function isFacebook() {
	return window.location.hostname.split('.').slice(-2).join('.') === 'fejsbuk.com' || window.location.hostname.split('.').slice(-2).join('.') === 'facebook.com';
}

const cachePrefix = 'antivytrus';

if (! window.localStorage.getItem(cachePrefix+'started')) {
	window.localStorage.setItem(cachePrefix+'started', (new Date()).toISOString())
}

function antivytrus() {
	start(list)
}

try {
	antivytrus()
	setInterval(function(){
		antivytrus()
	}, 1000)
} catch (e) {
	//
}