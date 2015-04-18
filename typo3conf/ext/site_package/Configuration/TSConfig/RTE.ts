RTE {
	classesAnchor {
		externalLink {
			image = EXT:rtehtmlarea/res/accessibilityicons/img/external_link.gif
			titleText =
		}
		externalLinkInNewWindow {
			type =
			titleText =
		}
		internalLink {
			titleText =
		}
		internalLinkInNewWindow {
			type =
			titleText =
		}
		download {
			titleText =
		}
		mail {
			titleText =
		}
	}
	proc {
		allowedClasses := removeFromList(external-link-new-window, internal-link-new-window)
	}
	buttons {
		link {
			url.properties.class.default = external-link
			properties.class.allowedClasses := removeFromList(external-link-new-window, internal-link-new-window)
		}
	}
}