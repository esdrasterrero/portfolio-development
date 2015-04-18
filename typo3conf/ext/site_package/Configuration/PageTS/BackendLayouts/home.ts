################################
#### BACKENDLAYOUT: HOME    ####
################################
mod {
    web_layout {
        BackendLayouts {
        home {
                title = Main Home
                config {
                    backend_layout {
                        colCount = 1
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Main Column
                                        colPos = 0
                                        colspan = 6
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:site_package/Resources/Public/images/BackendLayouts/home.gif
            }
        }
    }
}