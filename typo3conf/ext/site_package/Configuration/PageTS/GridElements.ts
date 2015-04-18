tx_gridelements.setup.wide-narrow {
    title = Wide - Narrow (60-40)
    description = Two column grid with 60-40 division
    flexformDS = FILE:EXT:site_package/Configuration/Flexforms/WideNarrow.xml

    config {
        colCount = 2
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Left
                        colPos = 1
                    }
                    2 {
                        name = Right
                        colPos = 2
                    }
                }
            }
        }
    }
}

tx_gridelements.setup.narrow-wide {
    title = Narrow - Wide (40-60)
    description = Two column grid with 40-60 division
    flexformDS = FILE:EXT:site_package/Configuration/Flexforms/NarrowWide.xml

    config {
        colCount = 2
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Left
                        colPos = 1
                    }
                    2 {
                        name = Right
                        colPos = 2
                    }
                }
            }
        }
    }
}

tx_gridelements.setup.fifty-fifty {
    title = Fifty - Fifty (50-50)
    description = Two column grid with 50-50 division
    flexformDS = FILE:EXT:site_package/Configuration/Flexforms/NarrowWide.xml

    config {
        colCount = 2
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Left
                        colPos = 1
                    }
                    2 {
                        name = Right
                        colPos = 2
                    }
                }
            }
        }
    }
}

tx_gridelements.setup.normal-container {
    title = Normal Container
    description = Container element for content
    #flexformDS = FILE:EXT:site_package/Configuration/Flexforms/NormalContainer.xml

    config {
        colCount = 1
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Normal Container
                        colPos = 1
                    }
                }
            }
        }
    }
}

tx_gridelements.setup.center-offset{
    title = Center Offset
    description = Centered Grid Columns
        #flexformDS = FILE:EXT:site_package/Configuration/Flexforms/NormalContainer.xml

    config {
        colCount = 1
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Center
                        colPos = 1
                    }
                }
            }
        }
    }
}