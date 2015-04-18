config {
	index_enable = 1

	linkVars = L
	uniqueLinkVars = 1
	sys_language_overlay = content_fallback

	# Dutch language as a default
	language = nl
	locale_all = nl_NL
	htmlTag_langKey = nl-NL
	sys_language_uid = 0
	tx_realurl_enable = 1
}

# English language
[globalVar = GP:L = 1]
	config {
		language = en
		locale_all = en_EN
		htmlTag_langKey = en-EN
		sys_language_uid = 1
	}
[global]

[globalVar = TSFE:id = {$pages.homePage}]
	page {
		bodyTag >
		bodyTagCObject.10 = TEXT
		bodyTagCObject.10.value = home-page
		bodyTagCObject.10.wrap = <body class="|">
	}
[global]