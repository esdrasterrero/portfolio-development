# Tile
tx_gridelements.setup.medium-block {
	title = Tegel
	description = Een tegel bestaand uit: tegel, kleine afbeelding of grote afbeelding
	flexformDS = FILE:EXT:woudenberg_site/Configuration/Flexforms/MediumBlock.xml

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = MediumBlock
					}
				}
			}
		}
	}
}

# Colored tile
tx_gridelements.setup.menu-block {
	title = Gekleurde tegel
	description = Een groene, blauwe of paarse tegel
	flexformDS = FILE:EXT:woudenberg_site/Configuration/Flexforms/MenuBlock.xml

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Item
					}
				}
			}
		}
	}
}

# Smoelenboek
tx_gridelements.setup.info-box {
	title = Smoelenboek box
	description = Een smoelenboek

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Content
						colPos = 0
					}
				}
			}
		}
	}
}

# Info Block
tx_gridelements.setup.info-block {
	title = Smoelenboek Werknemer
	description = Smoelenboek Werknemer gegevens
	flexformDS = FILE:EXT:woudenberg_site/Configuration/Flexforms/InfoBlock.xml

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Info Block
					}
				}
			}
		}
	}
}