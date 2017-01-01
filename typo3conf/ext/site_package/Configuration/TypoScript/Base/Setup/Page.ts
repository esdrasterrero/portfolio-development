page = PAGE
page {
    typeNum = 0
	shortcutIcon = EXT:site_package/Resources/Public/Icons/favicon.ico
	includeCSS {
		styles = EXT:site_package/Resources/Public/Styles/bootstrap.min.css
		styles.excludeFromConcatenation = 1
	}

	includeJSFooterlibs {
		jquerynew = http://code.jquery.com/jquery-1.11.0.min.js
		jquerynew.external = 1
	}
	includeJSFooter {
		bootstrap = EXT:site_package/Resources/Public/Scripts/bootstrap.min.js
		#masonry = EXT:site_package/Resources/Public/Scripts/masonry.min.js
		youwe = EXT:site_package/Resources/Public/Scripts/youwe.js
		youwe.excludeFromConcatenation = 1
	}

    10 =FLUIDTEMPLATE
	10 {
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {

            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout

            site_package__home = TEXT
            site_package__home.value = {$page.fluidtemplate.templateRootPath}Home.html
            site_package__home.insertData = 1

            default = TEXT
            default.value = {$page.fluidtemplate.templateRootPath}Main.html
            default.insertData = 1
		}
        templateRootPath     = {$page.fluidtemplate.templateRootPath}
        partialRootPath     = {$page.fluidtemplate.partialRootPath}
        layoutRootPath      = {$page.fluidtemplate.layoutRootPath}

		variables {

		}
	}
}
### GRID ELEMENTS ###
tt_content.gridelements_pi1.20.10.setup {

	defaultColumnConfig < lib.gridelements.defaultGridSetup
	defaultColumnConfig.cObject = FLUIDTEMPLATE
	defaultColumnConfig.cObject {
		partialRootPath = {$page.fluidtemplate.partialRootPath}
	}

	# Wide Narrow
	wide-narrow < .defaultColumnConfig
    wide-narrow.cObject.file = {$folders.gridelements}WideNarrow.html

    # Narrow Wide
    narrow-wide < .defaultColumnConfig
    narrow-wide.cObject.file = {$folders.gridelements}NarrowWide.html

    # Normal Container
    normal-container < .defaultColumnConfig
    normal-container.cObject.file = {$folders.gridelements}NormalContainer.html

    # Fifty Fifty
    fifty-fifty < .defaultColumnConfig
    fifty-fifty.cObject.file = {$folders.gridelements}FiftyFifty.html

    # Four Columns
    four-columns < .defaultColumnConfig
    four-columns.cObject.file = {$folders.gridelements}FourColumns.html

    # Normal Container
    center-offset < .defaultColumnConfig
    center-offset.cObject.file = {$folders.gridelements}CenterOffset.html

    background-container < .defaultColumnConfig
    background-container.cObject.file = {$folders.gridelements}BackgroundContainer.html

    # Slider
    slider < .defaultColumnConfig
    slider.cObject.file = {$folders.gridelements}Slider.html
}

### tt_content overrides ###
tt_content.stdWrap.innerWrap >
tt_content.image.20.imageStdWrap >
tt_content.image.20.imageStdWrapNoWidth >
tt_content.image.20.imageColumnStdWrap >
tt_content.image.20.layout.default.value = ###IMAGES######TEXT###
#tt_content.image.20.rendering.singleNoCaption >
tt_content.image.20.rendering.singleNoCaption.allStdWrap >
tt_content.image.20.rendering.singleNoCaption.singleStdWrap >
tt_content.image.20.rendering.singleNoCaption.rowStdWrap >
tt_content.image.20.rendering.singleNoCaption.noRowsStdWrap >
tt_content.image.20.rendering.singleNoCaption.lastRowStdWrap >
tt_content.image.20.rendering.singleNoCaption.columnStdWrap >
tt_content.image.20.rendering.singleNoCaption.lastRowStdWrap >

tt_content.image.20.rendering.splitCaption.allStdWrap >
#tt_content.image.20.rendering.splitCaption.singleStdWrap >
tt_content.image.20.rendering.splitCaption.rowStdWrap >
tt_content.image.20.rendering.splitCaption.noRowsStdWrap >
tt_content.image.20.rendering.splitCaption.lastRowStdWrap >
tt_content.image.20.rendering.splitCaption.columnStdWrap >
tt_content.image.20.rendering.splitCaption.lastRowStdWrap >

tt_content.image.20.rendering.splitCaption.singleStdWrap.wrap = ###CAPTION### | ###PARAMS###
tt_content.image.20.rendering.splitCaption.caption.wrap = <p> | </p>
tt_content.image.20.rendering.splitCaption.caption.wrap.override = <p> | </p>

tt_content.image.20.1.layout.default.element = <img class="img-responsive" src="###SRC###" ###PARAMS######ALTPARAMS######BORDER######SELFCLOSINGTAGSLASH###>




tt_content.menu.20.3.stdWrap.outerWrap = <ol class="nav affix-top" data-spy="affix" data-offset-top="125">|</ol>
tt_content.menu.20.3.1.NO.wrapItemAndSub = |*|<li class="column1">|</li> || <li class="column1">|</li> || <li class="column1">|</li> || <li class="column2 reset">|</li> || <li class="column2">|</li> || <li class="column2">|</li> || <li class="column3 reset">|</li> || <li class="column3">|</li> || <li class="column3">|</li> |*|
tt_content.menu.20.1.stdWrap.outerWrap = <ol>|</ol>
tt_content.stdWrap.innerWrap.cObject.default.30.cObject.menu.default.override >

# Alternate wrapping for A to Z Menu
[globalVar = TSFE:id = {$pages.atoz}]
	tt_content.menu.20.3.stdWrap.outerWrap = <div class="wrapper"><ul class="nav affix-top" data-spy="affix" data-offset-top="125">|</ul></div>
	tt_content.menu.20.3.1.NO.wrapItemAndSub = <li>|</li>
[global]

# bodyTag
[globalVar = TSFE:id != 1]
page.bodyTag >

page.bodyTagCObject = TEXT
page.bodyTagCObject.value= main
page.bodyTagCObject.wrap = <body class="|">
[global]