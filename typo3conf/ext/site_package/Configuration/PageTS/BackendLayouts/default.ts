################################
#### BACKENDLAYOUT: DEFAULT ####
################################
mod {
    web_layout {
        BackendLayouts {
        default {
                title = Main
                config {
                    backend_layout {
                        colCount = 1
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Main column
                                        colPos = 0
                                        colspan = 6
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:site_package/Resources/Public/images/BackendLayouts/default.gif
            }
        }
    }
}