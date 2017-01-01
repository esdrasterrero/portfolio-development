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

tx_gridelements.setup.four-columns {
    title = Fifty - Four Columns (25-25-25-25)
    description = Four column grid with 25-25-25-25 division
    flexformDS = FILE:EXT:site_package/Configuration/Flexforms/FourColumns.xml

    config {
        colCount = 4
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Left
                        colPos = 1
                    }
                    2 {
                        name = Left Center
                        colPos = 2
                    }
                    3 {
                        name = Right Center
                        colPos = 3
                    }
                    4 {
                        name = Right
                        colPos = 4
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

tx_gridelements.setup.background-container{
    title = Background Container
    description = Container with image background
        #flexformDS = FILE:EXT:site_package/Configuration/Flexforms/BackgroundContainer.xml

    config {
        colCount = 1
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Content
                        colPos = 1
                    }
                }
            }
        }
    }
}

tx_gridelements.setup.slider{
    title = Slider
    description = Slider for images
    #flexformDS = FILE:EXT:site_package/Configuration/Flexforms/Slider.xml

    config {
        colCount = 1
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Slides
                        colPos = 1
                    }
                }
            }
        }
    }
}

# Carousel Container
tx_gridelements.setup.uebb_bootstrap_carousel_container {
    title = Carousel Container
    description = Ein Element, dass mehrere Carousel Elemente enthält
    flexformDS = FILE:fileadmin/templates/gridelements/bootstrap3_carousel/bootstrap3_carousel_container.xml

    config {
        colCount = 1
        rowCount = 1

        rows {
            1 {
                columns {
                    1 {
                        name = Carousel Container
                        colPos = 0
                        allowed = gridelements_pi1
                    }
                }
            }
        }
    }
}

# Carousel Element
tx_gridelements.setup.uebb_bootstrap_carousel_item {
    title = Carousel Element
    description = Ein Element für ein Carousel-Container

    config {
        colCount = 4
        rowCount = 1
        rows {
            1 {
                columns {
                    1 {
                        name = Bild (max. 1)
                        colPos = 0
                        allowed = image
                    }
                    2 {
                        name = Inhalt
                        colspan = 3
                        colPos = 1
                        allowed = header,text
                    }
                }
            }
        }
    }
}